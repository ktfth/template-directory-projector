const fs = require('fs');
const path = require('path');

exports.lazy = (templatesPath, placement) => {
    let accumulation = null;
    let ctp = path.join(process.cwd(), templatesPath);
    if (fs.existsSync(ctp)) {
        let _cacheTemplates = fs.readdirSync(ctp);
        let places = placement.match(/\{\{\w+\}\}/g);
        if (places && places.length) {
            places.map(v => {
                let filepath = path.join(ctp, v.slice(2, v.length - 2) + '.tdp');
                placement.replace(v, fs.readFileSync(filepath));
            });
            accumulation = placement;
        }
    }
    return accumulation;
};
