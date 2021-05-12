import React, {Component} from 'react'

import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

import Const from '../utils/defaultConstant'

document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

class subCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

   componentDidMount() {          

        fetch(Const.urlrest + "/api/orders",{
            headers: Const.myHeaders,
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
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-5 align-self-center">
                                <h3 className="text-primary">Descargar Pedidos</h3> </div>
                            <div className="col-md-7 align-self-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active">Listar </li>
                                </ol>
                            </div>
                        </div>
                       
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title"> </h4>   
                                            <a href="http://18.216.63.82:3000/api/orders/excel" target="_blank">
                                                <img src="https://cdn0.iconfinder.com/data/icons/logos-microsoft-office-365/128/Microsoft_Office-02-256.png" className="icoexcel" width="64"></img>
                                            </a>
                                          <form action="http://18.216.63.82:3000/api/orders/excel" method="GET" className="tcenter">
                                              <div className="row p-t-20">
                                                  <div className="col-md-12">
                                                      <div className="form-group">
                                                      <h3>Consultar pedidos de los ultimos 15 días</h3>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-sm-offset-2 col-sm-10">
                                                  <button type="submit" className="btn btn-default btnadd">Consultar</button>
                                              </div>  
                                          </form>
                                        </div>
                                    </div>

                                </div>



                            </div>          
                        </div>
              

                </div>
            </div>
      )
  }
}

export default subCategory;