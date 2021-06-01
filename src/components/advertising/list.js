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
               fetch(Const.urlrest + "/api/advertisingcedi/destroy", {
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
          function validURL(str) {
              var pattern = new RegExp('^(https?:\\/\\/)?' +
                  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                  '((\\d{1,3}\\.){3}\\d{1,3}))' +
                  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                  '(\\?[;&a-z\\d%_.~+=-]*)?' +
                  '(\\#[-a-z\\d_]*)?$', 'i');
              return !!pattern.test(str);
          }
       var dtToday = new Date();
       var month = dtToday.getMonth() + 1;
       var day = dtToday.getDate();
       var year = dtToday.getFullYear();
       if (month < 10)
           month = '0' + month.toString();
       if (day < 10)
           day = '0' + day.toString();
       var minDate = year + '-' + month + '-' + day;
       var updschedule = document.getElementById('updschedule');
       updschedule.setAttribute("min", minDate);
       function valImagen(img) {
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
       
       
       const selectElementupf = document.querySelector('#updimg');    
       selectElementupf.addEventListener('change', (event) => {
           valImagen(selectElementupf)
       });
        fetch(Const.urlrest + "/api/advertisingcedi",{
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
                    let link = $("#updlink").val()
                    let schedule = $("#updschedule").val()
                    let valurl = validURL(link)
                    if (valurl) {
                        
                        if (schedule.length >= 4) {
                                    const data = new FormData(document.getElementById('formularioupdate'));
                                    fetch(Const.urlrest + "/api/advertisingcedi/update", {     
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
                        alertaGeneral("El link ingresado no es valido");
                    }
                });

   }

  render(){
    

    function formEdit(id) {
        window.scrollTo(0, 0);
        document.querySelector('.formupdate').style.display = 'block'
        fetch(Const.urlrest + "/api/advertisingcedi/read", {
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
                    $("#updlink").val(result.data.link)
                    let set = new Date(result.data.schedule);
                    console.log(set)
                    $("#updschedule").val(result.data.schedule);
                    $("#upddescription").val(result.data.description)
                    $("#updidListPrices option[value=" + result.data.listPrices + "] ").attr('selected', 'selected');
                    $("#updapps option[value=" + result.data.persAsoAll + "] ").attr('selected', 'selected');
                    document.getElementById("imgshow").src = result.data.img

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
                                <h3 className="text-primary">Imagenes Publicitarias</h3> </div>
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
                                                        { title: 'Descripción', field: 'description' },                                                        
                                                        { title: 'Enlace', field: 'link' }
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