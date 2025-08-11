// fs read files
// find all mark down files
// transpile with `marked`
// write html
// win

const marked = require('marked');
const fs = require('fs');
const path = require('path');


const distDir = './dist';
const basePath = './pages';

const pages = fs.readdirSync(basePath);
const layout = fs.readFileSync(`${process.cwd()}/partials/layout.html`, 'utf-8');

pages.forEach(page => {
    const baseFilePath = `${basePath}/${page}/${page}`
    const pageContent = marked.parse(fs.readFileSync(`${baseFilePath}.md`, 'utf-8'));

    const content = layout
        .replace('{{ content }}', pageContent)
        .replace('{{ stylesPath }}', './styles.css');

    
    fs.writeFileSync(`${distDir}/${page}.html`, content);

    console.log({page})
})
