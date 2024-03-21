//Lets check whats in a job post
import { FetchFunction, FilterCheerioData } from "./JobListingsScrape.js";

let url = "https://www.linkedin.com/jobs/view/software-engineer-intern-at-varian-3864746438/?position=48&pageNum=0&refId=Up8Gh3MXO%2BQnL%2Fohz%2FTfsw%3D%3D&trackingId=n9VIizPWAHSlFd8gDRYhwg%3D%3D&trk=public_jobs_jserp-result_sear";

let test = FetchFunction(url);

test.then((data) => {console.log(data)});

//Filters
/*h1 class="t-24 t-bold job-details-jobs-unified-top-card__job-title" This is the title of job
div class="jobs-box__html-content jobs-description-content__text t-14 t-normal
jobs-description-content__text--stretch"*/

