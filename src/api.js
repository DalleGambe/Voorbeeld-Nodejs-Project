const express = require('express');
require('dotenv').config(); //definieren dat we gebruken maken van deze package
const mongoose = require('mongoose');
const serverless = require('serverless-http')

const router = require('./routes');

const app = express();

app.use(express.json());
app.use('/.netlify/functions/api', router); //wanneer op de website => het is een get, post of delete. => laat gebruiker juist acties laten doen.


mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true});
// .then(() => {
// console.log('Successfully connected to the database!');
//     app.listen(process.env.PORT, () => {
//         console.log(`Server is up and running on ${process.env.PORT}, your majesty.`);
//     })
// })
// .catch((e) => console.error(`Error! We failed to connect to the database. We appologise, your majesty. Error: ${e}`)
// );

module.exports.handler = serverless(app);
