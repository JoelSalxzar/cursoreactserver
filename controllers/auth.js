const jwt = require('../services/jwt');
const moment = require('moment');
const user = require('../models/user');

function willExpiredToken(token){
    const { exp } = jwt.decodedToken(token);
    const currentDate = moment().unix();
    if(currentDate > exp){
        return true;
    }
    return false;
}

function refreshAccessToken(req, res){
 const { refreshToken } = req.body;
 const isTokenExpired = willExpiredToken(refreshToken);
 console.log(isTokenExpired);
}

module.exports = {
    refreshAccessToken
};