const request = require('request-promise')
    , cheerio = require('cheerio')
    , fs = require('fs')

async function main() {
    console.log('Get by tag')
    var html = await request.get('https://reactnativetutorial.net/css-selectors/')
    fs.writeFileSync('./test.html', html)
    var $ = cheerio.load(html)
    console.log($('h1').text())

    console.log('List by tag')
    html = await request.get('https://reactnativetutorial.net/css-selectors/lesson2.html')
    $ = cheerio.load(html)
    $('h2').each((index, element) => {
        console.log($(element).text())
    })

    console.log('List by id')
    html = await request.get('https://reactnativetutorial.net/css-selectors/lesson3.html')
    $ = cheerio.load(html)
    $('#red').each((index, element) => {
        console.log($(element).text())
    })

    console.log('List by class')
    html = await request.get('https://reactnativetutorial.net/css-selectors/lesson5.html')
    $ = cheerio.load(html)
    $('.red').each((index, element) => {
        console.log($(element).text())
    })
}

main()