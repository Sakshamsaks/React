import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is React web series</h2>
                <UserClass name={"Saksham Agrawal"} location={"Mathura class"}/>
            </div>
        );
    }
};

/*const About=()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is React web series</h2>
            <UserClass name={"Saksham Agrawal"} location={"Mathura class"}/>
        </div>
    );
};*/
export default About;