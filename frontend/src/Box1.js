import React from "react";

class Box1 extends React.Component{
    render(){
        return <div className="col-sm personalDetails ">
        <h1>{this.props.Details.name}</h1>
        <img src={this.props.Details.image_url} alt="artist"/>
        <a href={this.props.Details.url}>Click here to visit profile</a>
   </div>
    }
}

export default Box1