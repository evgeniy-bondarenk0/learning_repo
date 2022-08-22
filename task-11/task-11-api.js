const axios = require('axios').default;
const express = require('express');
const process = require('process');

const PORT = process.env.PORT || 3000; // Set port
const API_URL = 'https://yesno.wtf/api'; // External api

const useServer = express();

useServer.get('/random', async (req, res) => {
    try {
        const apiResponse = await axios.get(API_URL);

        if (apiResponse.data.answer === 'maybe') return res.status(500).send();
        return res.send({result: apiResponse.data.answer === 'yes' });

    } catch (err) {
        res.status(500).send(); // If service can not access, returned code 500
    }
});

useServer.get('/healthz', async (req, res) => {
    try {
        const apiPing = await axios.head(API_URL);

        if (apiPing) res.status(200).send(); // If service can access, returned code 200
    } catch (err) {
        res.status(500).send(); // If service can not access, returned code 500
    }
});

useServer.listen(PORT, () => {
    console.log('Server up on port: ', PORT); // eslint-disable-line
});
