const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const HOST = process.env.HOST;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;

const localRoot = __dirname + '/build'
const remoteRoot = '/test/'
const config = {
  host: HOST,
  password: PASSWORD,
  user: USER,
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
