import React, { Component } from 'react'

import RestaurentList from "./RestaurentList"

import Datepicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker-cssmodules.css';


import 'react-datepicker/dist/react-datepicker.css';
export default class RestaurentCreate extends Component {

    constructor(){
        super();
        this.state={

            name:null,
            email:null,
            address:null,
            rating:null,
            flag:2,
            selectedDate:null,
            eventname:null,

            descrption:null,
            Organiser:null,


        }
    }

  /*  componentDidMount(){

       fetch('http://localhost:3000/restaurent',
       "method":"Post",
       
       
       )
    }*/

    create(){

        //console.log(this.state);

        
        fetch("http://localhost:3000/restaurent",
        {
            method:"Post",

            headers:{
                'content-Type':'application/json'
            },

            body:JSON.stringify(this.state)
        }
        
        ).then((result)=>{

            result.json().then((item)=>{
                console.log(item)
            })
        })
    }




    // add

    add(){

        this.setState({flag:3})
    }



    //           Save Evant



    saveevent(){


        fetch("http://localhost:3000/restaurent",
        {
            method:"Post",

            headers:{
                'content-Type':'application/json'
            },

            body:JSON.stringify(this.state)
        }
        
        ).then((result)=>{

            result.json().then((item)=>{
                alert(" All data is saved")
            })
        })


    }


    render() {

        

        return (
            <div className="container w-100 ">
<label><h4>Event name</h4></label>

<input type="text" style={{"marginLeft":"95px"}}   placeholder="event name" onChange={(event)=>{this.setState({eventname:event.target.value})}} />
<br/><br/>
<label><h4>Event descrption</h4></label>

<input type="text"   style={{"marginLeft":"40px"}}  placeholder="event descrption" onChange={(event)=>{this.setState({descrption:event.target.value})}} />
<br/><br/>
<span>   </span> 
<span>   </span> 
<div style={{"display":"flex"}}>
<div style={{"display":"flex"}}>
<label ><h4>Start date</h4></label>
    
   <div style={{"marginLeft":"115px"}}> 
   <Datepicker 

   selected={this.state.selectedDate}

   onChange={(date)=>this.setState({selectedDate:date})}
   
   dateFormat="dd/MM/yyyy"
   
   /></div>

   </div>

    <span>   </span> <label style={{"marginLeft":"20px"}}><h4>End date</h4></label>
    <div style={{"marginLeft":"60px"}}> 
   <Datepicker 

   selected={this.state.selectedDate}

   onChange={(date)=>this.setState({selectedDate:date})}
   
   dateFormat="dd/MM/yyyy"
   
   /></div>

</div>

<br/><br/>

<label><h4>Organiser</h4></label>
<input type="text"  style={{"marginLeft":"120px"}}  onChange={(event)=>{this.setState({Organiser:event.target.value})}} />


<br/><br/>
<label><h4>Tickets</h4></label>
<button style={{"marginLeft":"150px","width":"250px"}} 
onClick={()=>{this.add()}}>Add New Ticket</button>
<br/><br/>
<br/><br/>

{
    (this.state.flag===3) ?
    <div>
                <input type="text"  placeholder="Id"    onChange={(event)=>{this.setState({name:event.target.value})}} />

                <span>   </span>                

               <input type="text"  placeholder="Ticket No"  
               
               style={{"marginLeft":"60px"}}

               onChange={(event)=>{this.setState({email:event.target.value})}} />
 
               <span>   </span> 

                <input type="text"  placeholder="Price" 
                
                style={{"marginLeft":"140px"}}
                onChange={(event)=>{this.setState({address:event.target.value})}} />

                <span>   </span> 

                
                <span>   </span> 


<button style={{"marginLeft":"60px","width":"90px"}} onClick={()=>{this.create()}}> Save  </button>

</div>
:""
}





<RestaurentList/>

<br/>

<button style={{"width":"290px"}} onClick={()=>this.saveevent()}> Save Event</button>


            </div>
        )
    }
}
