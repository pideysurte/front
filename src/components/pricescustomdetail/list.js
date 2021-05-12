import React, {Component} from 'react'
import {appendScript} from '../utils/appendScript'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CreateData from './createData'
import UpdateData from './updateData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

class detaillistpricescustom extends Component {
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
        fetch(Const.urlrest + "/api/detaillistpricescustom",{
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

                function formDelete(id) {
                    if (id >= 1) {
                        var datos = {
                            id: id
                        }
                        fetch(Const.urlrest + "/api/detaillistpricescustom/destroy", {
                                headers: Const.myHeaders,
                                method: "DELETE",
                                body: JSON.stringify(datos)
                            })
                            .then(response => response.json())
                            .then(
                                (result) => {
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
                $(document).off().on('click', '.btnupdate', function () {
                    let id = $("#updid").val();
                    let idProduct = $("#formupdate #idProduct").val();
                    let priceTax = $("#updpriceTax").val();
                    let orderMinCant = $("#updorderMinCant").val();
                    let umdTax = $("#updumdTax").val();
                    let orderMinUmd = $("#updorderMinUmd").val();
                    let valUnidUmd = $("#updvalUnidUmd").val();
                    let idListPrices = $("#formcreate #updidListPrices").val();

                    if (priceTax.length >= 1) {
                        var datos = {
                            id: id,
                            idProduct: idProduct,
                            priceTax: priceTax,
                            orderMinCant: orderMinCant,
                            orderMinUmd: orderMinUmd,
                            umdTax: umdTax,
                            valUnidUmd: valUnidUmd,
                            idListPrices: idListPrices
                        }

                        fetch(Const.urlrest + "/api/detaillistpricescustom/update", {
                                headers: Const.myHeaders,
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
                       alertaGeneral("Validar La información ingresada");
                    }
                });
   }

  render(){  
                        function formEdit(id) {
                        window.scrollTo(0, 0);
                        document.querySelector('.formupdate').style.display = 'block'
                            fetch(Const.urlrest + "/api/detaillistpricescustom/read",{
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
                                    $("#updpriceTax").val(result.data.priceTax)
                                    $("#updorderMinCant").val(result.data.orderMinCant)
                                    $("#updvalUnidUmd").val(result.data.valUnidUmd)
                                    $("#updorderMinUmd").val(result.data.orderMinUmd)
                                    $("#updumdTax").val(result.data.umdTax)   
                                     $("#idProduct option[value=" + result.data.idProduct + "] ").attr('selected', 'selected');
                                     $("#updidListPrices option[value=" + result.data.idListPrices + "] ").attr('selected', 'selected');
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
                                <h3 className="text-primary">Precios Personalizados</h3> </div>
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
                                                        { title: 'Id Producto', field: 'idProduct' }
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

export default detaillistpricescustom;