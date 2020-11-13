var marked = require('marked')
var cheerio = require('cheerio')



module.exports = function (value) {

    let html = marked(value)
    // html = html.replace(new RegExp('<code', 'gm'), '<code v-hljs ')
    let $ = cheerio.load(html)
    // $('pre').each((i, ele) => {
    //     $(ele).html('<f-code>' + cheerio.html($(ele)) + '</f-code>')
    //     // console.log($(ele).html())
    // })
    //从body中取出内容
    let body = $("body").html()
    return body; //"<template><div id='write'>" + body + "</div></template>";
}