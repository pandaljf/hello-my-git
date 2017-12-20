// 在请求拿到东西前去封装下确保其他页面拿到的数据是后端返回的值而不是返回后端封装的数据格式(具体的封装要求要和后端进行协商即数据的处理方式)
import axios from 'axios'
export default function (url) {
  return new Promise((reject,resolve) => {
    axios.get(url).then((res) => {
        const resData = res.data.page.listContent
        resolve(resData)
      })
      .catch((err) => {
        reject(err)
      })
    // axios.post(proxyUrl, data, {headers: head})
  })
}