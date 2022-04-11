const env = require('./enviroment');
const fs = require('fs');

module.exports = (app) => {
    app.locals.assetPath = function(filePath) {
        if (env.name == 'development') {
            return filePath;
        }

        return JSON.parse()
    }
}