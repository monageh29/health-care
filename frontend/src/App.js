import { RouterProvider,  Navigate, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Layoyt from './component/Layout/Layoyt';
import Notfound from './component/Notfound/Notfound';
import Doctor from './component/Doctor/Doctor';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login'
import Register from './component/Regiser/Regiser'

import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

function App() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      userData();
    }
  }, []);
  


  let userData = () => {
    let encoded = localStorage.getItem("token");
    let decoded = jwtDecode(encoded);
    console.log(decoded)
    setUser(decoded);
  };

  let logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  let Protect = ({ children }) => {
    if (localStorage.getItem("token") === null) {
      return <Navigate to="/Login" />;
    } else {
      return children;
    }
  };

  const router= createBrowserRouter([
    {path:'/',element:<Layoyt  userData={user} logOut={logOut}/>,children:[
      {path:'login',element:<Login currentUser={userData}/>},
      {index:true,element: <Protect>
      <Home />
    </Protect>},
     
      {path:'register',element:<Register/>},
     
      {path:'findadoctor',element: <Protect>
      <Doctor/>
    </Protect>},
      
   
      {path:'contact',element: <Protect>
      <Contact/>
    </Protect>},
,


      { path: "*", element: <Notfound/> }    ]}
  ])
  return (
   <>
   
        <RouterProvider router={router} />
   </>
  );
}

export default App;
