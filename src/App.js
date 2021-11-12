
import React,{Component} from 'react'

import RestaurentCreate from "./Component/RestaurentCreate"

import RestaurentDetail from "./Component/RestaurentDetail"

import RestaurentList from "./Component/RestaurentList"

import RestaurentSearch from "./Component/RestaurentSearch"

import RestaurentUpdate from "./Component/RestaurentUpdate"

import Home from "./Component/Home"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



import { BrowserRouter as Router ,Route ,Link,Routes,useRoutes,authed,props } from 'react-router-dom';

class App extends Component  {

  
  
constructor(){
  super();
  this.state={
    name:null,
    email:null,
    address:null

  }
}

update(){


}

render(){

  return(

    

    <Routes>
        <Route path="/create" element={<RestaurentCreate />}/>
    
        <Route path="/update/:id" element={<RestaurentUpdate  props="...props" />}/>
    
        <Route path="/list" element={<RestaurentList  />}/>
    
        <Route path="/detail" element={<RestaurentDetail  />}/>
    
   
    
    
    
    
    
        
    
    
        
    
    
    
     
        </Routes>
    
        
    
    
    
      )

}
  


  




}

export default App;
