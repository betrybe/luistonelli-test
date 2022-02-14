function emailValidate(email) {
    return new Promise((resolve) => {
        if (email.indexOf('@') === -1 || email.indexOf('.') < 0 || email.length === 0 ) {
            resolve(-1);
        }

        const query = { email };
        dbo.collection('users').find(query).limit(1).toArray((_err, result) => {
            resolve(result.length);
        });        
    });       
}

module.exports = emailValidate;