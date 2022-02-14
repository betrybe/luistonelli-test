const modEmailValidate = require('./emailValidate.mod');
const modUserdb = require('./userDb.mod');
        
    // eslint-disable-next-line max-lines-per-function
    exports.getUsers = (req, res) => {
       const { name } = req.body;
       const { email } = req.body;
       const { password } = req.body;
       
       const obj = { name, email, password, role: 'user' };
       
       async function userInsert() {
            ret = await modUserdb(obj);
            res.status(201).send({ user: ret }); 
        } 

       async function run() {
            const validEmail = await modEmailValidate(email); 

            if (validEmail > 0) {
                res.status(409).send({ message: 'Email already registered.' }); 
            } else if (validEmail < 0 || name.length === 0 || password.length === 0) {
                res.status(400).send({ message: 'Invalid entries. Try again.' }); 
            } else {
                userInsert();
            }          
        }
       run();
    };