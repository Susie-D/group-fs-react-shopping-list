const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()

router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM "shoppingList"
    ORDER BY "id";
    `
    pool.query(sqlText)
        .then((dbRes) => {
            console.log("this is:", dbRes.rows);
            res.send(dbRes.rows)
        })
        .catch((dbErr) => {
            console.log('GET /api/shoppingList');
        })

})

// POST '/api/shoppingList'
router.post('/', (req, res) => {
    const sqlText = `
        INSERT INTO "shoppingList" ("item", "quantity", "unit", "buy")
            VALUES ($1, $2, $3, $4);
    `
    const sqlValues = [req.body.item, req.body.quantity, req.body.unit, req.body.buy]

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201)
        })
        .catch((dbErr) => {
            console.log('POST /api/shoppingList error:', dbErr)
            res.sendStatus(500)
        })
})

router.put('/:id', (req, res) => {
    const sqlText = `
    UPDATE "shoppingList"
        SET "buy" = true
        WHERE "id" = $1;
    `
    const sqlValues = [req.params.id]
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200)
        })
        .catch((dbError) => {
            console.log('PUT/api/shoppingList/ :id error', dbError)
        })
})















module.exports = router