const path = require("path");

module.exports = {

    resolve : {
        extensions : ['.js', '.jsx']
    },
    entry:{ 
        app : ['./src/index.jsx'], 
    },
    output:{
        path: path.join(__dirname, '/dist'),
        filename : '[name].bundle.js'  
    },
    module : { //모듈 연결 설정
        rules : [{
            test: /\.jsx?/, // 대상 설정 정규식
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },
};