const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()


const localRoot = __dirname + '/build'
const remoteRoot = '/test/'
const config = {
  HOST: process.env.HOST,
  PASSWORD: process.env.PASSWORD,
  USER: process.env.USER,
  localRoot: localRoot,
  remoteRoot: remoteRoot,
  include: [ '*', '**/*' ],
  exclude: [ 'dist/**/*.map' ],
}
console.log('--------- will deploy with config => ', config);
ftpDeploy.deploy(config, (err, res) => {
  if (err) {
    console.log('error');
    console.log(err)
  }
  else {
    console.log(`filed moved from (localRoot) ${localRoot} to (remoteRoot) ${remoteRoot} :`);
    console.log(res);
  }
});
