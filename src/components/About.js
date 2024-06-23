import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    render(){
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        { ({loggedInUser})=>(<h1>{loggedInUser}</h1>) }
                    </UserContext.Consumer>
                </div>
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