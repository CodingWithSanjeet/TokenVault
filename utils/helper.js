const crypto = require('crypto');
/**
 * 
 * @param {*} length 
 * @returns 
 */
const generateRandomToken = (length=48)=>{
    return crypto.randomBytes(length).toString('hex');
}

module.exports = {generateRandomToken}