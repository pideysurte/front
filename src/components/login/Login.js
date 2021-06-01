import React, {Component} from 'react'
import LogologinHome from '../atoms/LogologinHome'
import '../../assets/css/Login.css';
import {
  sha256
} from 'js-sha256';
import $ from 'jquery';
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('homelogin');
class Login extends Component {
  
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
                alertaGeneral("La dirección de email es incorrecta!.");
                return 0
              }
            }
            function userCedis() {
              let email = document.getElementById("username").value
              let emailvalido = validarEmail(email)
              if (emailvalido == "1" ) {
                  var datos = {
                    email: email
                  }

                fetch(Const.urlrest + "api/useradmin/emailcedis", {
                  headers: Const.myHeaders,
                  method: "POST",
                  body: JSON.stringify(datos)
                })
                .then(response => response.json())
                .then(
                  (result) => {
                    if (result.data != null) {
                        console.log(result.data)
                        var misCedis = result.data
                        var option ="";
                        if(result.data[0].idCedi){
                          localStorage.setItem("is", 1);
                          misCedis.forEach( function(valor, indice, array) {
                            option +="<option value='"+valor['idCedi']+"' data-img='"+valor['b2bCedi.img']+"' >"+valor['b2bCedi.name']+"</option>";                          
                          })   
                        }else{
                          localStorage.setItem("is", 0);
                          misCedis.forEach( function(valor, indice, array) {
                            option +="<option value='"+valor['id']+"' data-img='"+valor['img']+"' >"+valor['name']+"</option>";                          
                          })   
                        }                                             
                        document.getElementById("cedilist").innerHTML = option;
                        $(".conselectorcedi").show()
                        $("#btngeneralEmail").hide()
                        
                    } else {
                      alertaGeneral("Por favor revisa los datos")

                    }
                  },
                  (error) => {
                    console.log(error)
                  }
                )
              } else {
                alertaGeneral("Verifica el email")
              }
            }
            function userLogin() {
              let idCedi =$( "#cedilist" ).val();
              localStorage.setItem("img", $( "#cedilist" ).data("img") );
              localStorage.setItem("idCedi",idCedi)
              let email = document.getElementById("username").value
              let emailvalido = validarEmail(email)
              let pass = document.getElementById("password").value            
              
              localStorage.setItem("idCedi", $("#cedilist option:selected").val());
              localStorage.setItem("img", $("#cedilist option:selected").data("img"));
              if (emailvalido == "1" && pass.length >= 5 && pass.length <= 30) {
                let password = sha256(pass)
                var datos = {
                    email: email,
                    password: password,
                    idCedi:  idCedi,
                    isAdmin: localStorage.getItem("is")
                }

                fetch(Const.urlrest + "api/useradmin/logincedis", {
                    headers: Const.myHeaders,
                    method: "POST",
                    body: JSON.stringify(datos)
                  })
                  .then(response => response.json())
                  .then(
                    (result) => {
                      if (result.data != null) {   
                        localStorage.setItem("id", result.data.id);
                        localStorage.setItem("email", result.data.email);
                        localStorage.setItem("name", result.data.name);
                        localStorage.setItem("token", result.data.token);
                        
                      window.location.href = "/dashboard";

                      } else {
                        alertaGeneral("Por favor revisa los datos")

                      }
                    },
                    (error) => {
                      console.log(error)
                    }
                  )
              } else {
                alertaGeneral("Verifica los datos de acceso")
              }
              return false
            }
            var el = document.getElementById('btngeneral');
            if (el) {
              el.addEventListener("click", userLogin);
            }

            var el = document.getElementById('btngeneralEmail');
            if (el) {
              el.addEventListener("click", userCedis);
            }
             return false
     }


   render() {

       const {
         items
       } = this.state;
       return ( 
       <div>
          <AlertGeneral />  
            <div className="makeStyles-session-2 makeStyles-background-3">
                <div className="makeStyles-content-4">
                    <div className="makeStyles-wrapper-5">
                        <div className="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded">
                            <div className="MuiCardContent-root">
                                 
                                    <div className="text-xs-center pb-xs">
                                          <LogologinHome  />
                                          <span
                                            className="MuiTypography-root MuiTypography-caption">Ingrese sus datos para
                                            continuar</span></div>
                                    <div
                                        className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                        
                                        <div
                                            className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                             <input type="text" placeholder="Email" id="username" className="MuiInputBase-input MuiInput-input"  name="username"   />
                                                </div>
                                    </div>
                                    <div
                                        className="conselectorcedi  MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                       
                                        <div
                                            className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                           
                                            <input id="password"  placeholder="Password" type="password" className="MuiInputBase-input MuiInput-input"     />

                                                
                                                </div>
                                    </div>
                                    <div
                                        className="conselectorcedi MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                       
                                        <div
                                            className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                           
                                             <select name="cedilist" id="cedilist"  className="MuiInputBase-input MuiInput-input" >
                                               <option value="">Cedi</option>
                                             </select>
                                        </div>
                                    </div>
                                    <button
                                        className="MuiButtonBase-root MuiButton-root MuiButton-contained btngeneral MuiButton-containedPrimary MuiButton-fullWidth"
                                          type="text" id="btngeneralEmail" >
                                            <span className="MuiButton-label">Ingresar</span><span
                                            className="MuiTouchRipple-root"></span></button>
                                       <button
                                        className="conselectorcedi MuiButtonBase-root MuiButton-root MuiButton-contained btngeneral MuiButton-containedPrimary MuiButton-fullWidth"
                                          type="text" id="btngeneral" >
                                            <span className="MuiButton-label">Ingresar</span><span
                                            className="MuiTouchRipple-root"></span></button>
                                                  <div className="pt-1 text-md-center">
                                                    <a href="./forgot">
                                                    <button
                                                className="MuiButtonBase-root MuiButton-root MuiButton-text btnrecover"
                                                 
                                                type="button">
                                                  <span className="MuiButton-label">Recuperar
                                                    contraseña?</span>
                                                  
                                                    </button></a>
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


export default Login;