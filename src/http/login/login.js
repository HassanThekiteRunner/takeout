/*
 * @Author: your name
 * @Date: 2021-02-22 11:29:54
 * @LastEditTime: 2021-02-22 16:29:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\http\login.js
 */
import http from '../index'

export function login(){
    return http({
        method:'get',
        url:'/sendcode'
    })
}

export function user(){
    return http({
        method:'post',
        url:'/login_pwd',
        data:{
            pwd:'pwd',
            name:'name',
            captcha:'captcha'
        }
    })
}


export function tuxing(){
    return http({
        method:'get',
        url:'/captcha'
    })
}