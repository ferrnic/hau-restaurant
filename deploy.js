// const FtpDeploy = require('ftp-deploy')
// const ftpDeploy = new FtpDeploy()


const localRoot = __dirname + '/build'
const remoteRoot = '/test/'
console.log('process.env.HOST => ', process.env.HOST);
const config = {
  HOST: process.env.HOST,
  // PASSWORD: __PASSWORD__,
  // USER: __USER__,
  localRoot: localRoot,
  remoteRoot: remoteRoot,
  include: [ '*', '**/*' ],
  exclude: [ 'dist/**/*.map' ],
}

// ftpDeploy.deploy(config, (err, res) => {
//   if (err) console.log(err)
//   else {
//     console.log(`filed moved from (localRoot) ${localRoot} to (remoteRoot) ${remoteRoot} :`);
//     console.log(res);
//   }
// });
