import React, {Component} from 'react'
import Const from '../utils/defaultConstant'
class InputRoutes extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    componentDidMount(){
        var datos = {
            idCedi: 1
        }
        fetch(Const.urlrest + "/api/routescedi/readcedi",{            
                headers: Const.myHeaders,
                method: "POST",
                body: JSON.stringify(datos)
        })
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render(){
        const { error, isLoaded, items } = this.state;
        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Rutas Cedi</label>
                            <select className="form-control" id="updidRoute" name="idRoute">      
                            {items.map(item => (
                                <option value={item.id} >{item.name}</option>
                            ))}                                          
                            </select>                                                              
                        </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default InputRoutes