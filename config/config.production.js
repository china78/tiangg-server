/*
*
* 生产环境配置
* 下面是码良依赖的各种服务，请务必逐一配置
*
*/

module.exports = {
  sequelize: {
    dialect: 'mysql',
    port: '3306',
    database: 'lowcode_db',
    host: '',
    username: 'yanfa',
    password: ''
  },
  oss: {
    accessKeyId: '',
    accessKeySecret: '',
    host: 'https://jhjcn.oss-cn-hangzhou.aliyuncs.com', // eg.. https://xxxxxx.oss-cn-hangzhou.aliyuncs.com'
    bucket: 'jhjcn',
    region: 'oss-cn-hangzhou' // eg. oss-cn-hangzhou
  },
  es: {
    index: 'godspen',
    type: 'doc',
    host: '',
  },
  // redis 单节点
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  // redis 集群
  // redis: [
  //   {host: '', port: 6390},
  //   {host: '', port: 6391},
  //   {host: '', port: 6390},
  // ],
  mail: {
    host: 'smtphz.qiye.163.com',
    port: 465,
    secure: true, // 端口号为465时，请设置为true
    user: 'test@zjrongxiang.com',
    pass: '',
  }
}
