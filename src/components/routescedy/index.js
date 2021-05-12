import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CreateData from './createData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

class routescedi extends Component {
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
            let idCedi = $("#formcreate #updidCedi").val();
            let textPr = $("#cretextPr").val();
            let attentionDaysRoutes = []
            $(".checkdias:checked").each(function () {
                attentionDaysRoutes.push({
                    "dia": this.value
                })
            });

            if (name.length >= 4 && textPr.length >= 4 && attentionDaysRoutes.length >= 1) {
                var datos = {
                    name: name,
                    idCedi: idCedi,
                    textPr: textPr,
                    attentionDaysRoutes: JSON.stringify(attentionDaysRoutes)
                }
                fetch(Const.urlrest + "/api/routescedi", {
                        headers: Const.myHeaders,
                        method: "POST",
                        body: JSON.stringify(datos)
                    })
                    .then(response => response.json())
                    .then(
                        (result) => {
                            console.log(result)
                            alertaGeneral("Registro Ingresado");
                            window.location.reload(false);
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
            } else {
                alertaGeneral("Por favor revisa, todos los campos son obligatorios ");
            }
     });
        
             
   }

  render(){     

            
     
      const { error, isLoaded, items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                    <div className="page-wrapper">
                        <div className="row page-titles">
                            <div className="col-md-5 align-self-center">
                                <h3 className="text-primary">Rutas cedi</h3> </div>
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

export default routescedi;