const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
let conn = mongoClient.connect(url,
    { useUnifiedTopology: true },
    (error, connection) => {
        if (error) return console.log(error);
        global.dbo = connection.db('Cookmaster');
              
        console.log('Conectado...');
    });
            
module.exports = { conn };