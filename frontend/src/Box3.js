import React from "react";

class Box3 extends React.Component{
    render(){
        return <div className="col-sm eventsDetails">
        {this.props.eventsDetails.length!==0?<h1>Next {this.props.eventsDetails.length} Events</h1>:<h1 className="noEvents">No Events found!</h1>}
         {this.props.eventsDetails.map((detail)=>
         <div key={detail.date} className="location">
         <p>{detail.location}</p>
         <span>{detail.date}</span>
         </div>
         )}
       </div>
    }
}

export default Box3