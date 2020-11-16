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
    console.log(str);
    return str.substring(1)
}

module.exports = function (source) {
    var res = fs.readFileSync(this.resourcePath, { encoding: 'utf8' })

    let $ = cheerio.load(source)
    $("demo").each((i, ele) => {
        let pathattr = $(ele).attr('path')
        let name = $(ele).attr('name')
        if (!name) {
            name = getFileName(pathattr)
            name = toLine(name)
        }
        let file = path.resolve(path.dirname(this.resourcePath), pathattr)
        let code = fs.readFileSync(file, { encoding: 'utf8' })
        code = prismjs.highlight(code, Prism.languages.javascript, 'javascript')
        code = `<pre><code class="languages-javascript">${code}</code></pre>`
        // console.log('组件名称:' + name);
        let dom = `<div class="f-demo"><div><${name}></${name}></div><f-code>${code}</f-code></div>`
        // let p = $(ele).parent();
        // console.log(p.name);
        // if (p.name == 'p') {
        $(ele).parent().replaceWith(dom)
        // }
        // console.log();
        // $(ele).replaceWith(dom)
    })
    let body = $("body").html()
    return `<template><div id='write'>${body}</div></template>`


    // console.log('docs-loader');
    // return `export default function (Component) {
    //     Component.__sourceCode = "${source}"
    //   }`.trim()

}