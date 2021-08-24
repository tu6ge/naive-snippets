const parse = require('parse-markdown-table')
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();


const fs = require('fs')

const data = fs.readFileSync('./index.demo-entry.md', 'utf8')

const regex =  /\#\# Props([\s\S]*?)\#\#/m

const result = data.match(regex)

const table1 = result[1].replace(/\\\|/g, '-')

async function demo(){
  const table = await parse.createMarkdownArrayTable(table1)

  console.info('headers', table.headers)
  for await (const row of table.rows) {
    console.info('row', row)
  }

}

demo();
