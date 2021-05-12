import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CreateData from './createData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');

class avertisingcedi extends Component {
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
            let idCedi = $("#updcedis").val();
            let data = $("#upddata").val();
            let cri1 = 0;
            let cri2 = 0;
            if ($("#updcri1").val()!=""){
                cri1 = $("#updcri1").val();
            }
            if ($("#updcri2").val() != "") {
                cri2 = $("#updcri2").val();
            }
            


            if (data.length >= 4 && cri1>= 1 ) {
                if(cri2 >= 1) {
                    var datos = {
                        idCedi: idCedi,
                        data: data,
                        cri1: cri1,
                        cri2: cri2,
                    }
                    fetch(Const.urlrest + "/api/notifications", {
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
                    alertaGeneral("Por favor ingresa un valor en la notificación");
                }
                    
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
                                <h3 className="text-primary">Notificaciones</h3> </div>
                            <div className="col-md-7 align-self-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active">Listar </li>
                                </ol>
                            </div>
                        </div>                        
                      <CreateData  />
                </div>
            </div>
      )
  }
}

export default avertisingcedi;