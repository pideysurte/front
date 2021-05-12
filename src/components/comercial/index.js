import React, {Component} from 'react'

import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

import CreateData from './createData'
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'



document.body.classList.add('fix-sidebar');
class comerciales extends Component {
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
           
       function valImagen(img){
            var sizeByte = img.files[0].size;
            if (img.files[0].type == "image/jpeg" || img.files[0].type == "image/png") {
                if (sizeByte >= 500000) {
                    alertaGeneral("La imagen supera los 500Kb permitidos")
                    img.value = ""
                }                
            } else {
                alertaGeneral("Solo se permite imagen jpg y png")
                img.value = ""
            }
       }
       const selectElement = document.querySelector('#creimg');
       selectElement.addEventListener('change', (event) => {
            valImagen(selectElement)           
       });

       function isValidEmail(email) {
           var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(email);
       }
       var email = document.querySelector("#creemail");
       const resultado = document.querySelector('.labelEmailcre')
       email.addEventListener("keyup", function (event) {
           if (isValidEmail(this.value)) {
               resultado.textContent = "";
           } else {
               resultado.textContent = "Email Incorrecto";
           }
       })

      
            

            function addForm() {
                let name = document.getElementById("crename").value
                let phone = document.getElementById("crephone").value
                let email = document.getElementById("creemail").value
                let valEmail = isValidEmail(email)
                    if (valEmail){                
                        if (name.length >= 4 && phone.length >= 6) {
                            const data = new FormData(document.getElementById('formulario'));

                            fetch(Const.urlrest + "/api/comercialcedi/", {
                                    headers: Const.myHeadersPost,
                                    method: "POST",
                                    body: data
                                })
                                .then(response => response.json())
                                .then(
                                    (result) => {
                                        console.log(result)
                                        if (result.data != null) {
                                            alertaGeneral("Registro Ingresado");
                                            window.location.reload(false);
                                        } else {
                                            alertaGeneral("Verifica los campos");
                                        }

                                    },
                                    (error) => {
                                        console.log(error)
                                    }
                                )
                        } else {
                            alertaGeneral("Validar La información ingresada");
                        }
                    } else {
                        alertaGeneral("Por favor valida el email");
                    }
            }
            var el = document.getElementById('btnadd');
            if (el) {
                el.addEventListener("click", addForm);
            }
            


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
                            <h3 className="text-primary">Comerciales</h3> </div>
                        <div className="col-md-7 align-self-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#nogp">Home</a></li>
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

export default comerciales;