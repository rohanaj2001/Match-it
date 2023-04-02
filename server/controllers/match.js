const { json } = require('body-parser');
const { create } = require('../models/shirtSchema');
const { spawn } = require('child_process');

const shirts = require('../models/shirtSchema')
const pants = require('../models/pantSchema')

module.exports = {
    shirtPost: async (req, res, next) => {
        try {
            var results;
            var image = req.body.shirtImage;   
            const pythonProcess = spawn('python', ['./python_scripts/imageProcessing.py', image]);
            pythonProcess.stdout.on('data', (data) => {
                 results = data.toString();
                 console.log(results);
            });
            pythonProcess.on('close', (code) => {
                console.log(`child process close all stdio with code ${code}`);
                console.log(JSON.parse(results));
                res.status(200).send(results)
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                'msg' : "Internal server error"
            })

        }

    }
}