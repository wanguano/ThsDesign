/*
 * @Description: 
 * @Author: 吴建明
 * @Date: 2024-10-21 22:34:09
 * @LastEditors: 吴建明
 * @LastEditTime: 2024-10-21 22:51:41
 * @FilePath: \ThsDesign\src\service\config.js
 * 
 */
// 本地测试API
// const devBaseURL = 'http://localhost:3000'
// const proBaseURL = 'http://localhost:3000'
// 已经部署到服务器上的API
const devBaseURL = 'http://45.139.193.170:3000'
const proBaseURL = 'http://45.139.193.170:3000'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 8000
