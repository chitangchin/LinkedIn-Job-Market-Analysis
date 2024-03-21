//Used to manipulate HTML Documents from text
import * as cheerio from 'cheerio';

//Fetch Data from URL
export async function FetchFunction(url) {
    const response = await fetch (url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return response.text();
}

//Select Element and return array of Job Postings
export function LoadJobListings(data) {
    const htmlData = cheerio.load(data);
    let arr = FilterCheerioDataForLinks(htmlData, 'a.base-card__full-link')
    return arr; 
}

export function FilterCheerioDataForLinks(data, parameters) {
    const resultArr = [];
    const dataSelected = data(parameters);
    const test = dataSelected.each((index, value) => {
        let val = data(value).attr("href");
        resultArr.push(val);
    })
    return resultArr; 
}

export function FilterCheerioData(data, parameters) {
    const resultArr = [];
    const dataSelected = data(parameters);
    const test = dataSelected.each((index, value) => {
        console.log(index.text());

    })
    return true; 
}
