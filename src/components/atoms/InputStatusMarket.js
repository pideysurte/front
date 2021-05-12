import React, {Component} from 'react'
class inputStatusMarket extends Component {

    componentDidMount(){

    }
    render(){

        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Activo marketplace</label>
                            <select className="form-control" id="activomarket">      
                                <option value="1" >Activo</option>   
                                <option value="0" >Desactivado</option>                                    
                            </select>                                                              
                        </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default inputStatusMarket