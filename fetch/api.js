import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://127.0.0.1:8000';

// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    console.log('错误的传参', 'fail');
    return Promise.reject(error);
});

export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: param
        })
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

export default{
    /**
     * 获取数据列表
     */
    DataSchemaList () {
        return fetchGet(`/data/list`)
    },
    /**
     * 获取指定数据项的全部数据
     */
    getTableDataByName (name) {
        return fetchPost(`/data/detail`, {table_name: name})
    },
    /**
     * 批量导入文件
     */
    saveTableData (datalist, name) {
        console.log(datalist)
        console.log(name)
        return fetchPost(`/data/add`, {data: datalist, table_name: name})
    }
}
