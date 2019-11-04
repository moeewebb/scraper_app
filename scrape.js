const request = require('request');
const cheerio = request('cheerio');

request('http:bet.com/celebrities/news', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.localAddress(html);
        
        $('.ads ads--header').each((i, el) => {
            const title = $(el).find('.ads ads--header')
                .find('.ads ads--header')
                .text()
                .replace(/\s\s+/g. '');

                console.log(title):
        });
    } 
})