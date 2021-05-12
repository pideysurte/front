import React, {Component} from 'react'
import Const from '../utils/defaultConstant'
class inputFeatured extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    componentDidMount(){
        fetch(Const.urlrest + "/api/cedi",{
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
                        <label className=" control-label">Producto destacado </label>
                           <select className="form-control" id="updfeatured" name="featured">      
                                      <option value="0">No destacado</option>  
                                      <option value="1">Destacado</option>                               
                            </select>                                                              
                        </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default inputFeatured