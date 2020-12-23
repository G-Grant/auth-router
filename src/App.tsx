import React, { useEffect } from 'react';
import { HashRouter, Link, Route, RouteProps, Router, useHistory } from "react-router-dom";
import './App.css';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import D from './pages/D';

import { adminRoutes, publicRoutes } from "./routes";

// const isChange:boolean = true;


const role = 'visitor'

function App() {
  return (
    <HashRouter>
      <h1>首页</h1>
      <Link to='/a'><button>跳转 A</button></Link>
      <Link to='/b'><button>跳转 B</button></Link>
      <Link to='/c'><button>跳转 C</button></Link>
      <Link to='/d'><button>跳转 D</button></Link>
      {
        publicRoutes.map(route=>{
          return <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
        })
      }
      {
        adminRoutes.map(route=>{
          if(route.role.includes(role)){
            return <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
          }
          return null
        })
      }
    </HashRouter>
  );
}

export default App;
