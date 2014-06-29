'use strict';

var connection_string =   process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
						  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
						  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
						  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
						  process.env.OPENSHIFT_APP_NAME;

console.log("este es el connection_string: %s", connection_string);

module.exports = {
  env: 'production',
  mongo: {
    uri: connection_string ||
    	 process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/fullstack'
  }
};