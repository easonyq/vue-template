/**
 * @file 统一发送请求的地方
 * @author wangyisheng@baidu.com (wangyisheng)
 */

// import axios from 'axios'

export async function get (url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({message: 'Greeting from request'})
    }, 500)
  })
}
