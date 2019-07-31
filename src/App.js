import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from './router/index';
import './App.css'

function App() {
  return (
    <div className={'bg'}>
      <Router>
        <div>
          <Switch>
            {
              routes.map((item, i) => {
                if(item.exact){
                  return <Route exact key={i} path={item.path} render={
                    props=>(
                      <item.component {...props} routes ={item.routes} />
                      )
                    }
                  />
                }else{
                  return <Route  key={i} path={item.path} render={
                      props=>(
                        <item.component {...props} routes={item.routes} />
                      )
                    }
                  />
                }
              })
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
