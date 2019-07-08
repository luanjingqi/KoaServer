const crypto = require('crypto');


function md5pass(str) {
    let obj = crypto.createHash('md5');
    obj.update(str);
    return obj.digest('hex')
}

module.exports = md5pass