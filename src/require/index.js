// 在请求拿到东西前去封装下确保其他页面拿到的数据是后端返回的值而不是返回后端封装的数据格式(具体的封装要求要和后端进行协商即数据的处理方式)
import axios from 'axios'
export default function (url) {
  return new Promise((reject,resolve) => {
    axios.get(url,{headers:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vd3d3LmNhci1zZXJ2ZXIuY29tLy9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUxMzIxNDc2OCwiZXhwIjoxNTE1ODA2NzY4LCJuYmYiOjE1MTMyMTQ3NjgsImp0aSI6InBrMzBhVmFZQk5qaGpzYmsiLCJzdWIiOiIxMDI5NzA3OTUzNjU5MTgzMTA0In0.IZ307vnCjQRb7Zd-80fpNycaReseo5rw9Vo6NRoGufk'}).then((res) => {
        // const resData = res.data.page.listContent
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
    // axios.post(proxyUrl, data, {headers: head})
  })
}
