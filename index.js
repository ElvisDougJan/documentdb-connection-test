const mongoose = require('mongoose')
const fs = require('fs')
const url = 'mongodb://root:rootroot@docdb-2019-10-04-00-27-36.cluster-cizjcxlcyxgi.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  sslValidate: false,
  sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem')
})
  .then(() => console.log('Connection to DB successful'))
  .catch((err) => console.error('ERROR >>>>>>>> ', err));