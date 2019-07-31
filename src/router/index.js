import Home from './../component/Home'
import onu from './../component/onu'
import lampPost from './../component/lampPost'
import trace from './../component/trace'
import cover from './../component/cover'
import login from './../component/login'
import traceItem from './../component/traceItem'
let routes = [
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/onu',
    component:onu ,
    exact:false
  },
  {
    path:'/lamppost',
    component:lampPost ,
    exact:false
  },
  {
    path:'/trace',
    component:trace ,
    exact:true,
    routes:[
      {
        path:'/trace/traceItem',
        component:traceItem,
        exact:false
      }
    ]
  },
  {
    path:'/cover',
    component:cover,
    exact:false
  },
  {
    path:'/login',
    component:login,
    exact:false
  }
];

export default routes
