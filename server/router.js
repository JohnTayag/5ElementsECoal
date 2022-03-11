const express = require("express");
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/eCoalDB.db');

const verify=require('./connectionRouter').verify;

router
    .get("/Articles", verify, (req, res) => {
        db.all('select * from article',
            (err, rows) => {
                if (err) {
                    console.log("err : ", err);
                    res.status(500).end();
                }else{
                    res.status(200).json(rows);
                }
            }
        );
    })
    .use((req, res) => {
        console.log("bad request:", req.method, req.path);
        res
            .status(400)
            .json({
                error: "Bad request"
            });
    });


module.exports = router;