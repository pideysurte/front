import React, {Component} from 'react'
import Const from '../utils/defaultConstant'
class inputCedis extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    componentDidMount(){
        fetch(Const.urlrest + "/api/subcategory",{
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
        const { error, isLoaded, items } = this.state;
        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Sub categoría </label>
                            <select className="form-control" name="idSubcategory" id="updidSubcategory">      
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

export default inputCedis