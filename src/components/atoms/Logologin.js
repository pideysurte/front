import React, {Component} from 'react'
class Logologin extends Component{
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
                <img src={ logo }   className="logologin block" />
            </React.Fragment>          
        )
    }
}

export default Logologin
