"use strict"

const fs = require('fs');
const { exec } = require('child_process');


function generateHTML(outFile) {
    exec('resume-bandit -t templates/clean.tpl -d data/isitha.yml -e utf8 -o ' + outFile);
}



let htmlFile = 'isitha.html';


generateHTML(htmlFile);

