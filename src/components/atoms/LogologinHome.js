import React, {Component} from 'react'
class LogologinHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            logo:localStorage.getItem('img'),
            isLoaded:false,
            items:[]
        }
    }


    render(){
        const {  logo } = this.state 
        return  (
            <React.Fragment>
                <img src={ require("../../assets/images/logologin.png")} alt="Admin"  className="logologin block" />
            </React.Fragment>          
        )
    }
}

export default LogologinHome
