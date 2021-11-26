import './App.css';
import React from 'react'
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    Details:{
             image_url:'',
             name:'',
             followers:'',
             url:'',
             upcoming_event_count:'',
            },
    searchValue:'',
    error:'',
    flag:false,
    eventsDetails:[]        
           }
  }
  
  setQuery=(e)=>{
    this.setState(prevState=>({
      ...prevState,
      searchValue:e.target.value
    }))
  }
  submitHandle=()=>{
    fetch(`https://rest.bandsintown.com/artists/${this.state.searchValue}/?app_id=0ca0cf2b477cf81859c0a0e548b04dd3`)
    .then(res=>res.json())
    .then(data=>{  
    const {name,image_url,url,upcoming_event_count}=data;
      this.setState(prevState=>({...prevState,
        Details:{
        name,
        image_url,
        url,
        upcoming_event_count}
      }))
    })
   this.setState(prevState=>({...prevState,eventsDetails:[]}))
    fetch(`https://rest.bandsintown.com/artists/${this.state.searchValue}/events?app_id=0ca0cf2b477cf81859c0a0e548b04dd3`)
    .then(res=>res.json())
    .then(data=>{
      var limit=3
      if(data.length<3){
        limit=data.length
      }
    if(data.errorMessage!==undefined){
      this.setState(prevState=>({...prevState,error:'Not found'}))
      this.setState(prevState=>({
        ...prevState,
        flag:false
      }))    }
    else{
      for(var i=0;i<limit;i++){
        let newData={ 
          location:data[i].venue.location,
          date:data[i].datetime
        }
        this.setState(prevState => ({
          ...prevState,
          eventsDetails: [...prevState.eventsDetails, newData]
        }))
      }
      this.setState(prevState=>({
        ...prevState,
        flag:true
      }))
    }
    
    })

  }
  render(){
  return (
    <div className="App">
      <div className="searchField">
      <input placeholder="search artist" onChange={this.setQuery}></input>
      <input type="submit" onClick={this.submitHandle}></input>
      </div>
      {this.state.flag?<div className="container">
        <div className="row">
      <Box1  Details={this.state.Details} />
      <Box2 Details={this.state.Details} />
      <Box3 eventsDetails={this.state.eventsDetails}/>       
        </div>
      </div>:<h1 className="errorMsg">{this.state.error}</h1>}
    
    </div>
  );
}}

export default App;
