// 引入mock.js
const Mock = require('mockjs')
// 获取mock.Random 对象
// const Random = Mock.Random
import data from './data.json'


// 请求该url，就可以返回dataList
Mock.mock('http://101.200.155.141:8089/userList',data)
