import React, {Component} from 'react'
import $ from 'jquery';
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import {sha256} from 'js-sha256';
import UpdateData from './updateData'
import CreateData from './createData'
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
import MaterialTable from 'material-table';

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
        var close = document.querySelector(".closeConfirm")
        var btnAlertConfirm = document.querySelector("#btnAlertConfirm")

        function formConfirmDelete() {
            var nid = document.getElementById("btnAlertConfirm").getAttribute("data-nid")
            if (nid >= 1) {
                document.querySelector('#mggAlertConfirm').style.display = 'none'
                formDelete(nid)
            }
        }
        if (el) {
            el.addEventListener("click", closeAlertGeneral);
        }
        if (close) {
            close.addEventListener("click", closeAlertGeneral);
        }
        if (btnAlertConfirm) {
            btnAlertConfirm.addEventListener("click", formConfirmDelete);
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
       
        function formDelete(id) {
            if (id >= 1) {
                var datos = {
                    id: id
                }
                fetch(Const.urlrest + "api/comercialcedi/destroy", {
                        headers: Const.myHeaders,
                        method: "DELETE",
                        body: JSON.stringify(datos)
                    })
                    .then(response => response.json())
                    .then(
                        (result) => {
                            alertaGeneral("Registro  Eliminado");
                            window.location.reload(false);
                        },
                        (error) => {
                            console.log(error)
                        }
                    )
            } else {
                alertaGeneral("Validar La información ingresada");
            }
        }



       const selectElementupf = document.querySelector('#updimg');
       
       selectElementupf.addEventListener('change', (event) => {
           valImagen(selectElementupf)
       });

       
       function isValidEmail(email) {
           var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(email);
       }

       var btnupdate = document.querySelector("#btnupdate");
       var emailupd = document.querySelector("#updemail");
       const resultadoupd = document.querySelector('.labelEmailupd')
       
       emailupd.addEventListener("keyup", function (event) {
           if (isValidEmail(this.value)) {
               resultadoupd.textContent = "";
               btnupdate.style.display = "block";
           } else {
               resultadoupd.textContent = "Email Incorrecto";
               btnupdate.style.display = "none";
           }
       })
        let idCedi = localStorage.getItem("idCedi");
        fetch(Const.urlrest + "api/comercialcedi/"+idCedi,{
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
            function updateForm() {
                let id = document.getElementById("updid").value
                let name = document.getElementById("updname").value
                let status = document.querySelector("#formupdate #updStatus ").value
                let idCedi = document.querySelector("#formupdate #updcedis ").value
                let phone = document.querySelector("#formupdate #updphone ").value
                let email = document.getElementById("updemail").value
                let valEmail = isValidEmail(email)
                if (valEmail) {
                        if (name.length >= 4 && phone.length >= 4) {
                            const data = new FormData(document.getElementById('formularioupdate'));
                            fetch(Const.urlrest + "api/comercialcedi/update", {
                                    headers: Const.myHeadersPost,
                                    method: "PUT",
                                    body: data
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
                    alertaGeneral("Por favor valida el email");
                }
            }

            var el = document.getElementById('btnupdate');
            if (el) {
                el.addEventListener("click", updateForm);
            }
   }
  render(){
 
       
      function formEdit(id) {
           window.scrollTo(0, 0);
           document.querySelector('.formupdate').style.display = 'block'
            fetch(Const.urlrest + "api/comercialcedi/read",{
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
                    document.getElementById("updphone").value = result.data.phone
                    document.getElementById("updemail").value = result.data.email
                    document.getElementById("imgshow").src = result.data.img
                    document.getElementById("updname").value = result.data.name                       
                    $("#updStatus option[value=" + result.data.status + "] ").attr('selected', 'selected');
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )           
      }

            


      const { error, isLoaded, items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                <AlertGeneral /> 
                <AlertConfirmation />
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
                     <UpdateData />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                    
                                        <div className="table-responsive m-t-40">                                            
                                            <MaterialTable
                                                    title="Datos"
                                                    columns={[
                                                        { title: 'id', field: 'id' },
                                                        { title: 'Nombre', field: 'name' }
                                                    ]}
                                                    data = {
                                                        items
                                                    }
                                                    options={{
                                                       // exportButton: true,
                                                        headerStyle: {
                                                            backgroundColor: '#01579b',
                                                            color: '#FFF'
                                                        },
                                                        actionsColumnIndex: -1,
                                                        filtering: true,
                                                        search: false
                                                    }}
                                                    actions={[
                                                        {
                                                        icon: 'edit',
                                                        iconProps: { style: { color: "#00569b" } },
                                                        tooltip: 'Editar',
                                                        onClick: (event, rowData) => formEdit(rowData.id)
                                                        },
                                                        rowData => ({
                                                            icon: 'delete',
                                                            iconProps: { style: { color: "#ff5722" } },
                                                            onClick: (event, rowData) => alertaConfirm(rowData.id)
                                                        })
                                                    ]}
                                                    />
                                        </div>
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

export default comerciales;