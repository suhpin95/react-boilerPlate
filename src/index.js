import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component{
    render(){
        return(
                <div>
                    <h2> Configuring the React JS </h2>
                </div>
        )
    }
}

ReactDOM.render( <Welcome/>, document.getElementById("app") )