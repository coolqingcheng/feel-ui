const path = require('path')
const fs = require('fs-extra')
var cheerio = require('cheerio')
const prismjs = require('prismjs')
/**
 * 获取文件名，不要后缀名
 * @param o 
 */
function getFileName(o) {
    var pos = o.lastIndexOf('/');
    let end = o.lastIndexOf('.')
    return o.substring(pos + 1, end);
}
function toLine(name,) {
    let str = name.replace(/([A-Z])/g, "-$1").toLowerCase();
    return str.substring(1)
}

module.exports = function (source) {
    let $ = cheerio.load(source)
    $("demo").each((i, ele) => {
        let pathattr = $(ele).attr('path')
        let name = $(ele).attr('name')
        if (!name) {
            name = getFileName(pathattr)
            name = toLine(name)
        }
        let showcode = true;
        if ($(ele).attr('showcode')) {
            if ($(ele).attr('showcode') == 'false') {
                showcode = false
            }
        }
        let file = path.resolve(path.dirname(this.resourcePath), pathattr)
        let code = fs.readFileSync(file, { encoding: 'utf8' })
        code = prismjs.highlight(code, Prism.languages.javascript, 'javascript')
        code = `<pre><code class="languages-javascript">${code}</code></pre>`
        let dom = `<div class="f-demo"><div><${name}></${name}></div><f-code :showcode="${showcode}">${code}</f-code></div>`
        $(ele).parent().replaceWith(dom)
    })
    let body = $("body").html()
    return `<template><div id='write'>${body}</div></template>`
}