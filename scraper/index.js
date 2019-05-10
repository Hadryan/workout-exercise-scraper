const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const puppeteer = require('puppeteer');

// Load in evironment variables
dotenv.config();

const applicationId = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    console.log('Navigating to FitGurlMel.com');
    await page.goto('https://fitgurlmel.com/pages/fitgurlmel-exercise-database', {waitUntil: 'load', timeout: 0});

    /*
    * Map over all exercise and return object with exercise name and corresponding gif
    */
    console.log('Looping through exercises...');
    const exercises = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.fancyboximg > img'), (image, index) => ({ name: image.alt.replace('_Fitgurlmel', ''), image: image.src, objectID: `exercise_${index}` })).filter((exercise) => !(exercise.name).toLowerCase().includes('melissa'));
    });

    // Connect to algolia
    const client = algoliasearch(applicationId, apiKey, {
        timeout: 4000,
    });

    const index = await client.initIndex(indexName);

    // Add exercises to algolia index
    await index.addObjects(exercises, (err, content) => {
        console.log('Successfully added exercises to Algolia');
    });

    // Close headless browser
    await browser.close();
})();

