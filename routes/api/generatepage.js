const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const auth = require('../../middleware/auth');
const User = require('../../models/Users');

router.post(
    '/',
    async (req, res) => {

        const { page } = req.body;

        
        let parentFolder = require('path').dirname(require.main.filename);
        fs.writeFile(parentFolder + "/client/src/pages/CustomPage.js", page, function(err){

        if(err){
            res.json( { status: false, error: err});
            console.log("Failed to write file. Error holds - ", err);
        }
        else
            res.json( { status: true, error: null});
    });

    }
);




module.exports = router; 