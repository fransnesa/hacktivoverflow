const bcrypt = require('bcryptjs');

function encrypt(password){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}
function decrypt(password, hash){
    const compare = bcrypt.compareSync(password, hash)
    return compare
}

module.exports = {
    encrypt,
    decrypt
    
};