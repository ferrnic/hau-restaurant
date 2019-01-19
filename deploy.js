const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()
var fs = require('fs');

var path1 = __dirname;
var path2 = './';
var path3 = '';

fs.readdir(path1, function(err, items) {
  console.log('....path1 => ', path1);
  console.log(items);

  for (var i=0; i<items.length; i++) {
    console.log(items[i]);
  }
});
fs.readdir(path2, function(err, items) {
  console.log('....path2 => ', path2);
  console.log(items);

  for (var i=0; i<items.length; i++) {
    console.log(items[i]);
  }
});
fs.readdir(path3, function(err, items) {
  console.log('....path3 => ', path3);
  console.log(items);

  for (var i=0; i<items.length; i++) {
    console.log(items[i]);
  }
});


const localRoot = __dirname + '/build'
const remoteRoot = '/test/'
const config = {
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USER,
  localRoot: localRoot,
  remoteRoot: remoteRoot,
  include: [ '*', '**/*' ],
  exclude: [ 'dist/**/*.map' ],
}
console.log('--------- will deploy with config => ', config);
ftpDeploy.deploy(config, (err, res) => {
  console.log('hasDeployed');
  if (err) {
    console.log('*********error');
    console.log(err)
  }
  else {
    console.log(`**********filed moved from (localRoot) ${localRoot} to (remoteRoot) ${remoteRoot} :`);
    console.log(res);
  }
});
