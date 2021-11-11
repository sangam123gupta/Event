import React, { Component } from 'react'

import {Button,Table} from "react-bootstrap";

import { Link } from "react-router-dom";

export default class RestaurentList extends Component {

    constructor(){
        super();

        this.state={
            list:null,
            flip:null,
            name:null,
            email:null,
            address:null,
            id:null
        }
    }

    componentDidMount(){

     this.refres();
    }

    refres(){

        this.refrence()
    }
refrence(){
    fetch("http://localhost:3000/restaurent").then((result)=>{
            result.json().then((data)=>{
                console.log(data);

                this.setState({
                    list:data
                })
            })
        })
}

    //   DELETE

    delete(id){

        fetch("http://localhost:3000/restaurent/"+id,{
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

    fetch('http://localhost:3000/restaurent/'+id).then((data)=>{
        data.json().then((resp)=>{
            this.setState({

                name:resp.name,
                email:resp.email,
                address:resp.address,
                id:resp.id

            })
        })
    })


}

clickupdate(){

    fetch('http://localhost:3000/restaurent/'+this.state.id,{
        method:"PUT",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(this.state)
    }).then((data)=>{

        alert("update data")

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
      
      <td><button style={{"width":"70px"}}  onClick={()=>this.update(item.id)}>Edit</button ></td>
      <td><button onClick={()=>this.delete(item.id)} >Delete</button></td>
      


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




            </div> :null
}






                
            </div>
        )
    }
}
