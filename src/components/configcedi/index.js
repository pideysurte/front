import React, {Component} from 'react'
import $ from 'jquery';
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import {sha256} from 'js-sha256';
import UpdateData from './updateData'
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'

document.body.classList.add('fix-sidebar');
class configCedi extends Component {
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
        function isValidEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        var email = document.querySelector("#updemailAdmin");
        const resultado = document.querySelector('.labelEmailAdmin')

        email.addEventListener("keyup", function (event) {
            if (isValidEmail(this.value)) {
                resultado.textContent = "";
            } else {
                resultado.textContent = "Email Incorrecto";
            }
        })
        var email2 = document.querySelector("#updemailServiceClient");
        const resultado2 = document.querySelector('.labelEmailClient')

        email2.addEventListener("keyup", function (event) {
            if (isValidEmail(this.value)) {
                resultado.textContent = "";
            } else {
                resultado.textContent = "Email Incorrecto";
            }
        })

        document.querySelector('.formupdate').style.display = 'block'

        function formEdit(id) {
            fetch(Const.urlrest + "/api/cedi/read", {
                    headers: Const.myHeaders,
                    method: "POST",
                    body: JSON.stringify({
                        id: id
                    })
                })
                .then(response => response.json())
                .then(
                    (result) => {
                        console.log(result)
                        document.getElementById("updid").value = result.data.id
                        document.getElementById("updphoneAdmin").value = result.data.phoneAdmin
                        document.getElementById("updemailAdmin").value = result.data.emailAdmin
                        document.getElementById("updemailServiceClient").value = result.data.emailServiceClient
                        document.getElementById("updbalanceNotifications").value = result.data.balanceNotifications
                        $("#updactCedi option[value=" + result.data.actCedi + "] ").attr('selected', 'selected');
                        $("#updmethodEmail option[value=" + result.data.methodEmail + "] ").attr('selected', 'selected');
                       
                        let coordenadas = JSON.parse(result.data.coordinates)
                        for (var clave in coordenadas) {
                            if (coordenadas.hasOwnProperty(clave)) {
                                document.getElementById("upd" + clave).value = coordenadas[clave]
                                //  console.log("La clave es " + clave + " y el valor es " + coordenadas[clave]);
                            }
                        }


                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }

        function updateForm() {
            let id = document.getElementById("updid").value
            let phoneAdmin = document.getElementById("updphoneAdmin").value
            let emailAdmin = document.getElementById("updemailAdmin").value
            let actCedi = document.getElementById("updactCedi").value
            let methodEmail = document.getElementById("updmethodEmail").value
            let password = document.getElementById("updpassword").value
            let lat = document.getElementById("updlat").value
            let lng = document.getElementById("updlng").value
            let radio = document.getElementById("updradio").value
            let emailServiceClient = document.getElementById("updemailServiceClient").value
            
            if (lat != "" && lng != "" && radio != "") {
                let coordinates = {
                    "lat": lat,
                    "lng": lng,
                    "radio": radio
                }
                if (phoneAdmin.length >= 4 &&
                    emailAdmin.length >= 4

                ) {
                    if (password != "") {
                        var datos = {
                            id: id,
                            phoneAdmin: phoneAdmin,
                            emailAdmin: emailAdmin,
                            actCedi: actCedi,
                            methodEmail: methodEmail,
                            coordinates: JSON.stringify(coordinates),
                            password: sha256(password),
                            emailServiceClient: emailServiceClient
                        }
                    } else {
                        var datos = {
                            id: id,
                            phoneAdmin: phoneAdmin,
                            emailAdmin: emailAdmin,
                            actCedi: actCedi,
                            methodEmail: methodEmail,
                            emailServiceClient: emailServiceClient,
                            coordinates: JSON.stringify(coordinates)
                        }
                    }

                    fetch(Const.urlrest + "/api/cedi/update", {
                            headers: Const.myHeaders,
                            method: "PUT",
                            body: JSON.stringify(datos)
                        })
                        .then(response => response.json())
                        .then(
                            (result) => {
                                console.log(result)
                                alertaGeneral("Registro  Actualizado");
                                window.location.reload(false);
                            },
                            (error) => {
                                console.log(error)
                            }
                        )
                } else {
                    alertaGeneral("Validar La información ingresada");
                }
            } else {
                alertaGeneral("Verifica las coordenadas");
            }

        }
        var el = document.getElementById('btnupdate');
        if (el) {
            el.addEventListener("click", updateForm);
        }
        formEdit(1)

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
                            <h3 className="text-primary">Configuración cedi</h3> </div>
                        <div className="col-md-7 align-self-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#nogp">Home</a></li>
                                <li className="breadcrumb-item active">Listar </li>
                            </ol>
                        </div>
                    </div>
                     <UpdateData />

                </div>
            </div>
      )
  }
}

export default configCedi;