import React, {Component} from 'react'
import Const from '../utils/defaultConstant'
class InputTaxes extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    componentDidMount(){
        fetch(Const.urlrest + "/api/typetaxes",{
            headers: Const.myHeaders,
        })
            .then(response => response.json())
            .then(
                (result) => {
                    console.log(result.data)
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
        const {  items } = this.state;
        return  (
            <React.Fragment>                
                <div className="col-md-6">
                    <div className="form-group">
                        <label className=" control-label">Tipo de flete</label>
                            <select name="typeFreight" class="form-control" id="updtypeFreight">    
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

export default InputTaxes