import React, {Component} from 'react'
import {appendScript} from '../utils/appendScript'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
import UpdateData from './updateData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
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

       function formDelete(id) {
           if (id >= 1) {
               var datos = {
                   id: id
               }
               fetch(Const.urlrest + "/api/notifications/destroy", {
                       headers: Const.myHeaders,
                       method: "DELETE",
                       body: JSON.stringify(datos)
                   })
                   .then(response => response.json())
                   .then(
                       (result) => {
                           console.log(result)
                           alertaGeneral("Registro  Eliminado");
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
               alertaGeneral("Validar La información ingresada");
           }
       }
        fetch(Const.urlrest + "/api/notifications",{
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
                $(document).off().on('click', '.btnupdate', function () {
                    let id = $("#updid").val();
                    let idFabDist = $("#updidFabDist").val();
                    let data = $("#upddata").val();
                    let cri1 = 0;
                    let cri2 = 0;
                    let cri3 = 0;
                    let cri4 = 0;
                    let cri5 = 0;
                    if ($("#updcri1").val() != "") {
                        cri1 = $("#updcri1").val();
                    }
                    if ($("#updcri2").val() != "") {
                        cri2 = $("#updcri2").val();
                    }
                    if ($("#updcri3").val() != "") {
                        cri3 = $("#updcri3").val();
                    }
                    if ($("#updcri4").val() != "") {
                        cri4 = $("#updcri4").val();
                    }
                    if ($("#updcri5").val() != "") {
                        cri5 = $("#updcri5").val();
                    }
                    if (data.length >= 4) {
                        var datos = {
                            id:id,
                            idFabDist: idFabDist,
                            data: data,
                            cri1: cri1,
                            cri2: cri2,
                            cri3: cri3,
                            cri4: cri4,
                            cri5: cri5
                        }
                                   fetch(Const.urlrest + "/api/notifications/update", { 
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
                            alertaGeneral("Por favor revisa, todos los campos son obligatorios ");
                        }
                               
                });

   }

  render(){
    

    function formEdit(id) {
        window.scrollTo(0, 0);
        document.querySelector('.formupdate').style.display = 'block'
        fetch(Const.urlrest + "/api/notifications/read", {
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
                    $("#updid").val(result.data.id)
                    $("#upddata").val(result.data.data)
                    $("#updcri2").val(result.data.cri2)
                    $("#updcri3").val(result.data.cri3)
                    $("#updcri4").val(result.data.cri4)
                    $("#updcri5").val(result.data.cri5)
                    $("#updidFabDist option[value=" + result.data.idFabDist + "] ").attr('selected', 'selected');
                    $("#updcri1 option[value=" + result.data.cri1 + "] ").attr('selected', 'selected');

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
                                <h3 className="text-primary">Notificaciones</h3> </div>
                            <div className="col-md-7 align-self-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active">Listar </li>
                                </ol>
                            </div>
                        </div>
                         <UpdateData  />
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
                                                        { title: 'Mensaje', field: 'data' }
                                                    ]}
                                                    data = {
                                                        items
                                                    }
                                                    options={{
                                                        //exportButton: true,
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
                                                        tooltip: 'Save User',
                                                        onClick: (event, rowData) => formEdit(rowData.id)
                                                        },
                                                        rowData => ({
                                                            icon: 'delete',
                                                            iconProps: { style: { color: "#ff5722" } },
                                                            tooltip: 'Delete User',
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

export default avertisingcedi;