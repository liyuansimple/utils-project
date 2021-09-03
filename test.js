/*
 * @Author: your name
 * @Date: 2021-02-03 15:45:52
 * @LastEditTime: 2021-02-03 15:49:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinnong-webe:\student\npmWrap\test.js
 */
const Utils = require('./index')

const isString = Utils.isString('test');

console.log('=====测试: test 是否是一个字符串类型=====',isString);