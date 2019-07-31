import request from './../util/http'
import qs from 'qs'

export function loginByUsername(username, password) {
  const data = qs.stringify({
    userName: username,
    password:password
  });
  return request({
    url: 'sysmanage/sysLogin/login',
    method: 'post',
    data
  })
}
