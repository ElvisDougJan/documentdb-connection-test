const mongoose = require('mongoose')
// const fs = require('fs')
//const url = 'mongodb://root:rootroot@docdb-2019-10-04-01-37-24.cizjcxlcyxgi.us-east-1.docdb.amazonaws.com:27017/teste?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem'
const url = 'mongodb://root:rootroot@docdb-2019-10-04-01-37-24.cluster-cizjcxlcyxgi.us-east-1.docdb.amazonaws.com:27017/teste'
'mongodb://root:rootroot@docdb-2019-10-04-01-37-24.cluster-cizjcxlcyxgi.us-east-1.docdb.amazonaws.com:27017'
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connection to DB successful'))
  .catch((err) => console.error('ERROR >>>>>>>> ', err));
