import React from "react";

class Box2 extends React.Component{
    render(){
        return <div className="col-sm eventsCount">
        <h2>Upcoming Events</h2>
        <h5>Total : {this.props.Details.upcoming_event_count}</h5>
       </div>
    }
}

export default Box2