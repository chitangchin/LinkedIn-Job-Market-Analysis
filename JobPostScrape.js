//Lets check whats in a job post
import { FetchFunction, FilterCheerioData } from "./JobListingsScrape.js";
import * as cheerio from 'cheerio'

let url = "https://www.linkedin.com/jobs/view/software-engineer-i-fandango-at-fandango-3864384876/?refId=5pJ6UxvJfilpQ6SVxOaCjg%3D%3D&trackingId=XBK4o39wSGOG57ZckN";

const response = FetchFunction(url)
.then(res => {
    const $ = cheerio.load(res);
    const test = $('span li')
    console.log(test.text());
});

//Filters
/*h1 class="t-24 t-bold job-details-jobs-unified-top-card__job-title" This is the title of job
div class="jobs-box__html-content jobs-description-content__text t-14 t-normal
jobs-description-content__text--stretch"*/

