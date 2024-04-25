const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()

router.get('/', (req,res) => {
    const sqlText = `
    SELECT * FROM "shoppingList"
    ORDER BY "id";
    `
    pool.query(sqlText)
    .then((dbRes) =>{
        console.log("this is:", dbRes.rows);
        res.send(dbRes.rows)
    })
    .catch((dbErr)=> {
        console.log('GET /api/shoppingList');
    })

})




















module.exports = router