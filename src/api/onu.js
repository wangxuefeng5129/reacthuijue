import axios from './../util/http'

export function OnuList(data) {
  return axios({
    url: '/trace/historylog/listHistoryByPageAndCondition',
    method: 'get',
    params: data
  })
}
