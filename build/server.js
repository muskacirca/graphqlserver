'use strict';

require("babel-polyfill"); // Use for openshift and Promise

var express = require('express');

var _require = require('./data/schema');

var Schema = _require.Schema;

var graphQLHTTP = require('express-graphql');

var app = express();
app.use('/', graphQLHTTP({ schema: Schema, pretty: true, graphiql: true }));

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.listen(server_port, server_ip_address, function (err) {
    if (err) return console.error(err);
    console.log('GraphQL Server is now running on ' + server_ip_address + ':' + server_port);
});