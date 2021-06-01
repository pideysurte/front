import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import UpdateData from './updateData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
class Category extends Component {
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
               fetch(Const.urlrest + "/api/category/destroy", {
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
        fetch(Const.urlrest + "/api/category",{
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
                 let name = $("#updname").val();
                 let status = $("#updStatus").val();
                 let idFabDist = $("#updidFabDist").val();
                 let idCedi = $(" #updcedis").val();
                 let nota = $("#updnotas").val();
                 
                 if (name.length >= 4 ) {

                     var datos = {
                         id: id,
                         name: name,
                         idCedi: idCedi,
                         nota: nota,
                         status: status,
                         idFabDist: idFabDist
                     }

                     fetch(Const.urlrest + "/api/category/update", {
                             headers: Const.myHeadersPost,
                             method: "PUT",
                             body: JSON.stringify(datos)
                         })
                         .then(response => response.json())
                         .then(
                             (result) => {
                                 console.log(result)
                                 alertaGeneral("Registro  Actualizado");
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
                     alertaGeneral("Por favor revisa, el nombre es obligatorio");
                 }
             });

   }
  render(){
                         
      function formEdit(id) {
           window.scrollTo(0, 0);
           document.querySelector('.formupdate').style.display = 'block'
            fetch(Const.urlrest + "/api/category/read",{
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
                    $("#updname").val(result.data.name)
                    $("#updnotas").val(result.data.nota)
                    $('#formupdate #updcedis  option[value="' + result.data.idCedi + '"]').attr("selected", "selected");
                    $('#formupdate #updidFabDist option[value="' + result.data.idFabDist + '"]').attr("selected", "selected");
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
                            <h3 className="text-primary">Categoría</h3> </div>
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
                                                        { title: 'Nombre', field: 'name' },
                                                        { title: 'Nombre', field: 'name' }
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

export default Category;