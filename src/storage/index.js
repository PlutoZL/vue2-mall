// Sotrage封装

const STORAGE_KEY = 'mall'

export default {
  // 存取值
  setItem(key, value, moduel_name) {
    if (moduel_name) {
      let val = this.getItem(moduel_name)
      val[key] = value
      this.setItem(moduel_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key, moduel_name) {
    if (moduel_name) {
      let val = this.getItem(moduel_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem('mall') || '{}')
  },
  clear(key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) return
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
