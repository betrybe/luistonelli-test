function userInsert(obj) {
    return new Promise((resolve) => {
        dbo.collection('users').insertOne(obj, (error, response) => {
            resolve(response.ops[0]);            
        });
    });       
}

module.exports = userInsert;