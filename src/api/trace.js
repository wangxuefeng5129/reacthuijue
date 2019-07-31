import axios from './../util/http'

export function TraceList(data) {
  return axios({
    url: '/trace/historylog/listHistoryByPageAndCondition',
    method: 'get',
    params: data
  })
}
