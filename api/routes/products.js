const express = require('express');
// const { router } = require('../../app');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        messsage: 'Handling GET requrests at /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        messsage: 'Handling POST requrests at /products'
    });
});

router.get('/:productsID', (req, res, next) => {
    const _id = req.params.productsID;
    if (_id === '1234') {
        res.status(200).json({
            messsage: 'This is your roll number',
            id: _id
        });
    }
    else {
        res.status(200).json({
            messsage: 'Normal product',
            id: _id
        });
    }
});

module.exports = router;