/*
 * @Author: your name
 * @Date: 2021-02-23 09:25:35
 * @LastEditTime: 2021-02-23 19:38:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editim
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\http\home\home.js
 */
import http from '../index'

export function jwd(){
    return http({
        url:'/position/40.10038,116.36867',
        method:'get',
       
    })
}

export function lun(){
    return http({
        url:'/index_category',
        method:'get',
       
    })
}

export function shops(){
    return http({
        url:'/shops?latitude=40.10038&longitude=116.36867',
        method:'get',
       
    })
}