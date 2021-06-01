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
class ProductsCedi extends Component {
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
               fetch(Const.urlrest + "/api/productscedi/destroy", {
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
        fetch(Const.urlrest + "/api/productscedi",{
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
              const creimg1 = document.querySelector('#creimg1')
              const creimg2 = document.querySelector('#creimg2')
              const creimg3 = document.querySelector('#creimg3')
              creimg1.addEventListener('change', (event) => {
                  valImagen(creimg1)
              })
              creimg2.addEventListener('change', (event) => {
                  valImagen(creimg2)
              })
              creimg3.addEventListener('change', (event) => {
                  valImagen(creimg3)
              })

              function validURL(str) {
                  var pattern = new RegExp('^(https?:\\/\\/)?' +
                      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                      '((\\d{1,3}\\.){3}\\d{1,3}))' +
                      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                      '(\\?[;&a-z\\d%_.~+=-]*)?' +
                      '(\\#[-a-z\\d_]*)?$', 'i');
                  return !!pattern.test(str);
              }
        $(document).off().on('click', '.btnupdate', function () {
            let name = $("#updname").val();
                let link = $("#updlink").val();
                let valurl = validURL(link)
                let barcode=  $("#updbarcode").val();
                let nameTirilla =  $("#updnameTirilla").val();
                let orderMinTax = $("#updorderMinTax").val();
                let priceTax = $("#updpriceTax").val();
                let priceUmdTax = $("#updpriceUmdTax").val();
                let sku = $("#updsku").val();
                let description = $("#upddescription").val();
                
                    if (
                        name.length >= 4 &&
                            barcode.length >= 3 &&
                            nameTirilla.length >= 3 &&
                            priceTax.length >= 3 &&
                            sku.length >= 2 &&
                            description.length >= 4
                    ) {
                        const data = new FormData(document.getElementById('formularioupdate'))
                        fetch(Const.urlrest + "/api/productscedi/update", {
                                headers: Const.myHeadersPost,
                                method: "PUT",
                                body: data
                            })
                            .then(response => response.json())
                            .then(
                                (result) => {
                                    alertaGeneral("Registro  Actualizado");
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
                        alertaGeneral("Validar La información ingresada");
                    }
                
           });  
   }
  render(){
        

        function formEdit(id) {
            window.scrollTo(0, 0);
            document.querySelector('.formupdate').style.display = 'block'
            fetch(Const.urlrest + "/api/productscedi/read", {
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
                        $("#updbarcode").val(result.data.barcode);
                        $("#updlink").val(result.data.link);
                        $("#updnameTirilla").val(result.data.nameTirilla);
                        $("#updorderMinTax").val(result.data.orderMinTax);
                        $("#updpriceTax").val(result.data.priceTax);
                        $("#updpriceUmdTax").val(result.data.priceUmdTax);
                        $("#updsku").val(result.data.sku);
                        $("#updumd").val(result.data.umd);
                        $("#updidCategory").val(result.data.idCategory);
                        $("#updidCedi").val(result.data.idCedi);
                        $("#updidFabDist").val(result.data.idFabDist);
                        $("#updidSubcategory").val(result.data.idSubcategory);
                        $("#updstatus").val(result.data.status);
                        $("#updtypeOffert").val(result.data.typeOffert);
                        $("#upddescription").val(result.data.description);
                        $('#updorderMinUmd').val(result.data.orderMinUmd);
                         $("#updidCategory option[value=" + result.data.idCategory + "] ").attr('selected', 'selected');
                         $("#updidSubcategory option[value=" + result.data.idSubcategory + "] ").attr('selected', 'selected');
                         $("#updtypeOffert option[value=" + result.data.typeOffert + "] ").attr('selected', 'selected');
                        $("#updfeatured option[value=" + result.data.featured + "] ").attr('selected', 'selected');
                        $("#updStatus option[value=" + result.data.status + "] ").attr('selected', 'selected');
                         document.getElementById("img1show").src = result.data.image1
                        document.getElementById("img2show").src = result.data.image2
                        document.getElementById("img3show").src = result.data.image3
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
                            <h3 className="text-primary">Listar Productos</h3> </div>
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

export default ProductsCedi;