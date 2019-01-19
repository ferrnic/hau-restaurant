const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

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
