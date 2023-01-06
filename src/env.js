let baseURL
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pro.springboot.cn/api'

    break
  case 'test':
    baseURL = 'http://test-mall-pro.springboot.cn/api'

    break
  case 'prod':
    baseURL = 'http://mall-mall-pro.springboot.cn/api'

    break

  default:
    baseURL = 'http://mall-mall-pro.springboot.cn/api'
    break
}

export default {
  baseURL
}
