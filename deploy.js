const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USER,
  localRoot: './build',
  remoteRoot: '/www/',
  include: [ '*', '**/*' ],
  exclude: [ 'dist/**/*.map' ],
}
console.log('--------- will deploy with config => ', config);
ftpDeploy.deploy(config, (err, res) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log(res);
  }
});
