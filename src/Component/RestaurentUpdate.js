import React, { Component } from 'react'

import { useParams } from 'react-router';
export default class RestaurentUpdate extends Component {

    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null,
            id:null
        }
    }


    componentDidMount(props){


        fetch("http://localhost:3000/restaurent/"+this.props.id)
        .then((response)=>{

            console.log(response)
            response.json().then((result)=>{
                console.warn("result is here",result)
                this.setState({
                name:result.name,
                email:result.email,
                address:result.address,
                id:result.id

                })
            })
        })

    }

    update(){
        console.log("updata file is here");

        fetch('http://localhost:3000/restaurent/'+this.state.id,{
            method:"PUT",
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Value is updated")
            })
        })
    }


    render(props) {

        console.log(this.state.name)

        return (
            
            <div className="container">


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

                
                

                <button onClick={()=>this.update()}> Update </button>




            </div>
        )
    }
}
