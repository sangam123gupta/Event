import React, { Component } from 'react'

import {Button,Table} from "react-bootstrap";

import { Link } from "react-router-dom";

export default class RestaurentList extends Component {

    constructor(){
        super();

        this.state={
            list:null,
            flip:3,
            name:null,
            email:null,
            address:null,
            _id:null
        }
    }

    componentDidMount(){

     this.refres();
    }

    refres(){

        this.refrence()
    }
refrence(){
    fetch("http://localhost:3005/event").then((result)=>{
            result.json().then((data)=>{
                console.log(data);

                this.setState({
                    list:data

                    
                })

                console.log("data is seeing in this perticuler scenario",data)
            })
        })
}

    //   DELETE

    delete(id){

        fetch("http://localhost:3005/event/"+id,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((data)=>{
                alert(" value is deleted");

                this.refres();

                
            })
        })
        


    }

    // update
update(id){

    this.setState({flip:2})

    fetch('http://localhost:3005/event/'+id).then((data)=>{
        data.json().then((resp)=>{
            this.setState({

                name:resp.name,
                email:resp.email,
                address:resp.address,
                _id:resp._id

            })
        })
    })


}

clickupdate(){

    fetch('http://localhost:3005/ticket/'+this.state._id,{
        method:"PUT",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(this.state)
    }).then((data)=>{

        alert("update data")
        this.refres();
        this.setState({flip:5})

        this.refres();

    })

}
    
    render() {
        return (
            <div style={{"marginTop ":"140px"}}>

           {
                    this.state.list ? (
                        <div>

     <Table striped bordered hover>
            <thead>
        <tr>
      <th scope="col">Id</th>
      <th scope="col">Ticket No</th>
      <th scope="col">Price</th>
      
      <th scope="col">Operation</th>
    </tr>
    </thead>
    <tbody>                       

{
    this.state.list.map((item)=>
    
        
        <tr>
      <td >{item.name}</td>
      <td>{item.email}</td>
      <td>{item.address}</td>
      
      <td><button style={{"width":"70px"}}  onClick={()=>this.update(item._id)}>Edit</button ></td>
      <td><button onClick={()=>this.delete(item._id)} >Delete</button></td>
      


    </tr>
      
    )
}


</tbody>


</Table>

                        </div>
                    ) : (null)
                }

{
    (this.state.flip===2) ? <div className="container">

<h2>Edit</h2>
{console.log(this.state.name)}
    <input type="text"
                
                value={this.state.name}

                onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="id"/>

                <br/><br/>

                <input type="text"
                
                value={this.state.email}

                onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Ticket No"/>

                <br/>
                <br/>

                <input type="text"
                
                value={this.state.address}

                onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Price"/>

                <br/>
                <br/>

                
                

                <button onClick={()=>this.clickupdate()}> Update </button>




            </div> :""
}






                
            </div>
        )
    }
}
