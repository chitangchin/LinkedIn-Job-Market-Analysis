//Importing all Componenets and functions
import { FetchFunction, LoadJobListings } from './JobListingsScrape.js';
import * as cheerio from 'cheerio';

//Enter your URL here
let url = "https://www.linkedin.com/jobs/search/?currentJobId=3835742587&geoId=103644278&keywords=software%20engineer&location=United%20States&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true"

/* Order of Operation:
 * 1. Scrape the Job Posts from the Job Lists
 * 2. Extract data from each individual Job Post
 * 3. Export data/report to google or excel
 * 4. Generate a data graph
 */

//Gathering all Jobs within a Job Keyword
ListOfJobPostings(url);

function ListOfJobPostings(url) {
    FetchFunction(url)
        .then((data) => {
            const arr = LoadJobListings(data);
            return console.log(arr);
        })
}