const Sequelize = require('sequelize');

const db = new Sequelize('mysql://root:seaxplVHXegrNIlcpdCCcFAQWWKlbcWx@hayabusa.proxy.rlwy.net:13122/railway', {
 
  dialect: 'mysql',
  logging: false,
});

 

module.exports = db;