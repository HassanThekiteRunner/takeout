/*
 * @Author: your name
 * @Date: 2021-02-22 09:05:51
 * @LastEditTime: 2021-02-22 09:08:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\config.js
 */
module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:'http://127.0.0.1:3000',
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}