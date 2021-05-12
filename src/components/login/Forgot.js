import React, {Component} from 'react'
import Logologin from '../atoms/Logologin'
import '../../assets/css/Login.css';
import {
  sha256
} from 'js-sha256';
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('homelogin');

class Forgot extends Component {
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
              function validarEmail(valor) {
                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
                  return 1
                } else {

                  alert("La dirección de email es incorrecta!.");
                  return 0
                }
              }
              function userLogin() {
                let email = document.getElementById("username").value
                let emailvalido = validarEmail(email)
             
                 if (emailvalido == "1" ) {
      
                
                                          var datos = {
                                            email: email,
                                            idMarketplace:1
                                          }
                                   
                                          fetch(Const.urlrest + "/api/useradmin/reset", {
                                              headers: Const.myHeaders,
                                              method: "POST",
                                              body: JSON.stringify(datos)
                                            })
                                            .then(response => response.json())
                                            .then(
                                              (result) => {
                                                console.log(result)
                                                  if (result.data != null) {
                                                    alert("Su contraseña fue enviada al correo electronico")
                                                     window.location.href = "./";
                                                  }else{
                                                    alert("Por favor revisa los datos")

                                                  }
                                              },
                                              (error) => {
                                                console.log(error)
                                              }
                                            )
               }else{
                  alert("Verifica los datos de acceso")
               }
               return false
            }
                                    var el = document.getElementById('btngeneral');
                                    if (el) {
                                      el.addEventListener("click", userLogin);
                                    }
      }
   render() {
        const {
          items
        } = this.state;
        return (
                <div><AlertGeneral /> 
                        <div className="makeStyles-session-2 makeStyles-background-3">
                            <div className="makeStyles-content-4">
                                <div className="makeStyles-wrapper-5">
                                    <div className="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded">
                                        <div className="MuiCardContent-root">
                                              
                                                <div className="text-xs-center pb-xs">
                                                      <Logologin />
                                                      <span
                                                        className="MuiTypography-root MuiTypography-caption">Ingrese sus datos para
                                                        continuar</span></div>
                                                <div
                                                    className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                                    <label
                                                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                                                    data-shrink="false" for="username" id="username-label">Email</label>
                                                <div
                                                    class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                                                                                <input type="text" id="username" className="MuiInputBase-input MuiInput-input"  name="username"   />
                                                        </div>
                                                </div>
                                                  <button
                                                    className="MuiButtonBase-root MuiButton-root MuiButton-contained btngeneral MuiButton-containedPrimary MuiButton-fullWidth"
                                                      type="submit" id="btngeneral"><span className="MuiButton-label">Recuperar</span><span
                                                        className="MuiTouchRipple-root"></span></button>
                                                              
                                                      < div class = "pt-1 text-md-center" > < a href = "./" >
                                                            <button class="MuiButtonBase-root MuiButton-root MuiButton-text btnrecover" tabindex="0" type="button"><span class="MuiButton-label">Volver
                                                            </span><span class="MuiTouchRipple-root"></span></button></a>
                                            </div>
                                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </div>)
   }
}



export default Forgot;