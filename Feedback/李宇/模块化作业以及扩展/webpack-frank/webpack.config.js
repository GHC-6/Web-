var path = require('path')                                      //����path

module.exports = {                                              //ע��������exports����export
  entry: './src/script/importprofile.js',                                 //����ļ�
  output: {                                                       //����ļ�
    path: path.resolve(__dirname,'dist'),                      //����ļ���Ŀ¼
    filename: 'bundle.js'                                        //����ļ�������
  }
}