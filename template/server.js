#!/bin/env node
var path = process.env.OPENSHIFT_REPO_DIR + 'node_modules/ethercalc'

process.env.OPENSHIFT_INTERNAL_PORT = process.env.OPENSHIFT_NODEJS_PORT
process.env.OPENSHIFT_INTERNAL_IP = process.env.OPENSHIFT_NODEJS_IP

require(path + '/app');
