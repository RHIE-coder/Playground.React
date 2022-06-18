const path = require("path");

module.exports = {
    
    entry:{ 
        app : ['./src/index.jsx'], 
    },
    
    output:{
        path: path.join(__dirname, '/dist'),
        filename : '[name].bundle.js'  
    },

    resolve : {
        extensions : ['.js', '.jsx']
    },

    module : {
        rules : [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },

};