const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USER,
  localRoot: './build',
  remoteRoot: '/www/',
  deleteRemote: true,
  include: [ '*', '**/*' ],
  exclude: [ '**/*.map' ],
};

ftpDeploy.deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err));