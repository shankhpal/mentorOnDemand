import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({IsAuth, role, render:Component, ...rest}) {
    return (
       <Route {...rest}
       render={ 
           
         (props)=>{

            console.log(IsAuth)
           if (IsAuth===role){
               return<Component />;
           }else{
               return(
                   <Redirect to={{pathname:"/", state:{from:props.location}}}/>
               );
           }
       }}
       />
    );
}

export default ProtectedRoute
