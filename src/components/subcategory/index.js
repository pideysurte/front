import React, {Component} from 'react'
import {appendScript} from '../utils/appendScript'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CreateData from './createData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
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
       var el = document.getElementById('mggAlert');
       if (el) {
           el.addEventListener("click", closeAlertGeneral);
       }
        $(document).on('click', '.btnadd', function () {
            let name = $("#crename").val();
            let idCedi = $("#formcreate #updcedis").val();
            let status = $("#updStatus").val();
            if (name.length >= 4) {
                var datos = {
                  name: name,
                  idCedi: idCedi,
                  status: status
                };
                fetch(Const.urlrest + "/api/subcategory", {
                        headers: Const.myHeaders,
                        method: "POST",
                        body: JSON.stringify(datos)
                    })
                    .then(response => response.json())
                    .then(
                        (result) => {
                            console.log(result)
                            alertaGeneral("Registro Ingresado");
                            window.location.reload();
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
            } else {
                alertaGeneral("Por favor revisa, todos los campos son obligatorios");
            }
        });
        
             
   }

  render(){     
   
      const { error, isLoaded, items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  <AlertGeneral /> 
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-5 align-self-center">
                                <h3 className="text-primary">SubCategor??a</h3> </div>
                            <div className="col-md-7 align-self-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active">Listar </li>
                                </ol>
                            </div>
                        </div>
                    <CreateData />  

                </div>
            </div>
      )
  }
}

export default subCategory;