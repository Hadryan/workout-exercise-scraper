# Exercise Web Scraper
This is a node based web scraper used to copy basic exercise info found on [FitGurlMel.com](https://fitgurlmel.com). This app utilizes [Puppeteer](https://github.com/GoogleChrome/puppeteer) to automate the process of finding exercises on a [page](https://fitgurlmel.com/pages/fitgurlmel-exercise-database) and uploads results to [Algolia](https://www.algolia.com).

# Demo
[Algolia Index](https://www.algolia.com/realtime-search-demo/exercises-a33a3dbe-8fe5-42ca-ac6d-7648a6e7db55)

`note:` The populated Algolia index will later be used to build a react based exercise search app

## Getting Started

### Prerequisites

1. Install NodeJS and npm
1. Create a new [Algolia account](https://www.algolia.com)

### Setup

1. Run `git clone https://github.com/lawmbass/workout-exercise-scraper.git`
1. `cd` into project
1. Run `npm install`
1. Create `.env` file in the root of the project and fill out variables as shown in `.example.env`

### Run project

1. Navigate to project root
1. Run `npm start`