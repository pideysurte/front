import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import InputTypeDocument from '../atoms/InputTypeDocument'
import InputStatus from '../atoms/InputStatus'
import InputPaymentMethods from '../atoms/InputPaymentMethods'
import InputRoutes from '../atoms/InputRoutes'
import InputListPrices from '../atoms/InputListPrices'
import InputComercial from '../atoms/InputComercial'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
import AlertGeneral from '../atoms/AlertGeneral'
import AlertConfirmation from '../atoms/AlertConfirm'
import TypeFreight from '../atoms/InputTaxes'
import {alertaGeneral,closeAlertGeneral,alertaConfirm} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
class establishmentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
   componentDidMount() { 
        const input = document.querySelector('#updtypeFreight');
        input.addEventListener('change', updateValue);        
        function updateValue(e) {
            if (e.target.value == "2") {
                document.querySelector('.porfleteVar').style.display  =  'block'
                document.querySelector('.varFijoflete').style.display =  'none'
            } else {
                document.querySelector('.porfleteVar').style.display  =  'none'
                document.querySelector('.varFijoflete').style.display =  'block'
            }
        }
       function isValidEmail(email) {
         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(email);
       }

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
                fetch(Const.urlrest + "/api/establishmentsclientcedi/destroy", {
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

        fetch(Const.urlrest + "/api/establishmentsclientcedi",{
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
                          let pricesFreigh = 0;
                          let percentageFreightVar = 0;
                          let idCedi = $("#updcedis").val();
                          let status = $("#updStatus").val();
                          let idUserapp = $("#updidUserapp").val();
                          let address = $("#updaddress").val();
                          let typeDocument = $("#updtypeDocument").val();
                          let numberDocument = $("#updnumberDocument").val();
                          let nameBilling = $("#updnameBilling").val();
                          let phone = $("#updphone").val();
                          let name = $("#updname").val();
                          let nameContac = $("#updnameContac").val();
                          let lat = $("#updlat").val();
                          let lng = $("#updlng").val();
                          let radio = $("#updradio").val();
                          let paymentMethods = $("#updpaymentmethods").val();
                          let idRoute = $("#updidRoute").val();
                          let idCommercial = $("#updidComercial").val();
                          let idListPrices = $("#updidListPrices").val();
                          let typeTaxes = $("#updtypeFreight").val();
                          let orderMinAllTax = $("#updorderMinAllTax").val();
                          let typeShipping = $("#updtypeShipping").val();
                          let officeUnit = $("#updofficeUnit").val();
                          let emailUser = $("#updemailUser").val();
                          let attentionXpersonsAsocAll = $("#updattentionXpersonsAsocAll").val();
                          if ($("#updpercentageFreightVar").val()!=""){
                               percentageFreightVar = $("#updpercentageFreightVar").val();
                          }
                          if ($("#updpricesFreigh").val() != "") {
                               pricesFreigh = $("#updpricesFreigh").val();
                          }

                           let valEmail = isValidEmail(emailUser);
                           if (valEmail) {
                             let ticketNoFreigh = $("#updticketNoFreigh").val();
                             let commetsRoute = $("#updcommetsRoute").val();
                             if (lat != "" && lng != "" && radio != "") {
                               let coordinates = {
                                 lat: lat,
                                 lng: lng,
                                 radio: radio,
                               };
                               
                               if (
                                 nameContac.length >= 4 &&
                                 name.length >= 4 &&
                                 nameBilling.length >= 4
                               ) {
                                 var datos = {
                                   id: id,
                                   idCedi: idCedi,
                                   status: status,
                                   name: name,
                                   idUserapp: idUserapp,
                                   address: address,
                                   typeDocument: typeDocument,
                                   numberDocument: numberDocument,
                                   nameBilling: nameBilling,
                                   phone: phone,
                                   officeUnit: officeUnit,
                                   nameContac: nameContac,
                                   coordinates: JSON.stringify(coordinates),
                                   paymentMethods: paymentMethods,
                                   idRoute: idRoute,
                                   idCommercial: idCommercial,
                                   idListPrices: idListPrices,
                                   orderMinAllTax: orderMinAllTax,
                                   typeShipping: typeShipping,
                                   attentionXpersonsAsocAll: attentionXpersonsAsocAll,
                                   typeTaxes: typeTaxes,
                                   percentageFreightVar: percentageFreightVar,
                                   pricesFreigh: pricesFreigh,
                                   ticketNoFreigh: ticketNoFreigh,
                                   commetsRoute: commetsRoute,
                                   emailUser: emailUser
                                 };
                                 console.log(datos);
                                 fetch(
                                   Const.urlrest +
                                     "/api/establishmentsclientcedi/update",
                                   {
                                    headers: Const.myHeaders,
                                     method: "PUT",
                                     body: JSON.stringify(datos),
                                   }
                                 )
                                   .then((response) => response.json())
                                   .then(
                                     (result) => {
                                       if (result.data) {
                                         alertaGeneral("Registro  Actualizado");
                                         window.location.reload(false);
                                       } else {
                                         alertaGeneral(
                                           "Verifica la infomración ingresada"
                                         );
                                       }
                                     },
                                     (error) => {
                                       this.setState({
                                         isLoaded: true,
                                         error,
                                       });
                                     }
                                   );
                               } else {
                                 alertaGeneral("Verifica los datos ingresados");
                               }
                             } else {
                               alertaGeneral("Verifica las coordenadas");
                             }
                          } else {
                             alertaGeneral("Verifica el email");
                           }
           });  
   }
  render(){
        function formEdit(id) {
            window.scrollTo(0, 0);
            document.querySelector('#formupdate').style.display = 'block'
            fetch(Const.urlrest + "/api/establishmentsclientcedi/read", {
                    headers: Const.myHeaders,
                    method: "POST",
                    body: JSON.stringify({
                        id: id
                    })
                })
                .then(response => response.json())
                .then(
                    (result) => {
                      console.log(result);
                      $("#updid").val(result.data.id);
                      //   $("#updStatus").val(result.data.status);
                      $("#updidUserapp").val(result.data.idUserapp);
                      $("#updaddress").val(result.data.address);
                       $("#updemailUser").val(result.data.emailUser);
                      $("#updnumberDocument").val(result.data.numberDocument);
                      $("#updnameBilling").val(result.data.nameBilling);
                      $("#updphone").val(result.data.phone);
                      $("#updname").val(result.data.name);
                      $("#updnameContac").val(result.data.nameContac);
                      $("#updlat").val(result.data.lat);
                      $("#updlng").val(result.data.lng);
                      $("#updradio").val(result.data.radio);
                      $(
                        "#updidListPrices option[value=" +
                          result.data.idListPrices +
                          "] "
                      ).attr("selected", "selected");
                      $(
                        "#updStatus option[value=" + result.data.status + "] "
                      ).attr("selected", "selected");
                      $(
                        "#updtypeDocument option[value=" +
                          result.data.typeDocument +
                          "] "
                      ).attr("selected", "selected");
                      $(
                        "#updidComercial option[value=" +
                          result.data.typeOffert +
                          "] "
                      ).attr("selected", "selected");
                      $(
                        "#updpaymentmethods option[value=" +
                          result.data.paymentmethods +
                          "] "
                      ).attr("selected", "selected");
                      $(
                        "#updidRoute option[value=" + result.data.idRoute + "] "
                      ).attr("selected", "selected");
                      $(
                        "#officeUnit option[value=" +
                          result.data.officeUnit +
                          "] "
                      ).attr("selected", "selected");
                      $(
                        "#updattentionXpersonsAsocAll option[value=" +
                          result.data.attentionXpersonsAsocAll +
                          "] "
                      ).attr("selected", "selected");
                      $(
                        "#updtypeShipping option[value=" +
                          result.data.typeShipping +
                          "] "
                      ).attr("selected", "selected");

                      $(
                        "#updtypeFreight option[value=" +
                          result.data.typeTaxes +
                          "] "
                      ).attr("selected", "selected");
                      if (result.data.typeTaxes == "2") {
                        document.querySelector(".porfleteVar").style.display =
                          "none";
                      } else {
                        document.querySelector(".varFijoflete").style.display =
                          "none";
                      }

                      $("#updorderMinAllTax").val(result.data.orderMinAllTax);
                      $("#updofficeUnit").val(result.data.officeUnit);
                      $("#updattentionXpersonsAsocAll").val(
                        result.data.attentionXpersonsAsocAll
                      );
                      $("#updpercentageFreightVar").val(
                        result.data.percentageFreightVar
                      );
                      $("#updpricesFreigh").val(result.data.pricesFreigh);
                      $("#updticketNoFreigh").val(result.data.ticketNoFreigh);
                      $("#updcommetsRoute").val(result.data.commetsRoute);
                      let coordenadas = JSON.parse(result.data.coordinates);
                      for (var clave in coordenadas) {
                        if (coordenadas.hasOwnProperty(clave)) {
                          document.getElementById("upd" + clave).value =
                            coordenadas[clave];
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
      const { error, isLoaded, items } = this.state;
      return (
        <div>
          <Headerdashboard />
          <Sidebar />
          <AlertGeneral />
          <AlertConfirmation />

          <div className="page-wrapper">
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Listar Establecimientos</h3>{" "}
              </div>
              <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#nogp">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Listar </li>
                </ol>
              </div>
            </div>
            <div className="container-fluid formupdate" id="formupdate">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-title">
                      <h4>Actualizar </h4>
                    </div>
                    <div className="card-body">
                      <div className="horizontal-form">
                        <div className="form-horizontal" id="formcreate">
                          <input
                            type="hidden"
                            className="form-control"
                            placeholder=""
                            name="name"
                            id="updid"
                            required="required"
                          />
                          <input
                            type="hidden"
                            className="form-control"
                            placeholder=""
                            value="1"
                            name="idCedi"
                            id="updcedis"
                            required="required"
                          />
                          <div className="row p-t-20">
                            <InputStatus />
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Nombre Establecimiento{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="name"
                                  id="updname"
                                  required="required"
                                  maxlength="90"
                                />
                                <label className="msglabel">
                                  Mínimo 4 caracteres
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Dirección
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="address"
                                  id="updaddress"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row p-t-20">
                            <InputTypeDocument />
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Documento{" "}
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder=""
                                  name="numberDocument"
                                  id="updnumberDocument"
                                  required="required"
                                  maxlength="90"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Nombre a facturar
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="name"
                                  id="updnameBilling"
                                  required="required"
                                  maxlength="90"
                                />
                                <label className="msglabel">
                                  Mínimo 4 caracteres
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row p-t-20">
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Teléfono
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder=""
                                  name="phone"
                                  id="updphone"
                                  required="required"
                                  maxlength="90"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Nombre contacto{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="nameContac"
                                  id="updnameContac"
                                  required="required"
                                  maxlength="90"
                                />
                                <label className="msglabel">
                                  Mínimo 4 caracteres
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Email usuario{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="emailUser"
                                  id="updemailUser"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="contBlock">
                            <div className="row p-t-20">
                              <label className="col-md-6 control-label bold">
                                Zona de atención del Establecimiento
                              </label>
                              <div className="separador"></div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className=" control-label">
                                    Latitud
                                  </label>
                                  <input
                                    type="text"
                                    min="0"
                                    step="0.01"
                                    className="form-control control-coo"
                                    name="latitud"
                                    placeholder="Latitud"
                                    id="updlat"
                                    required="required"
                                    maxlength="90"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className=" control-label">
                                    Longitud
                                  </label>
                                  <input
                                    type="text"
                                    min="0"
                                    step="0.01"
                                    className="form-control control-coo"
                                    name="longitud"
                                    placeholder="Longitud"
                                    id="updlng"
                                    required="required"
                                    maxlength="90"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className=" control-label">
                                    Radio /km
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control  control-radio"
                                    name="radio"
                                    placeholder="Radio"
                                    id="updradio"
                                    required="required"
                                    maxlength="90"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row p-t-20">
                            <InputComercial />
                            <InputPaymentMethods />
                            <InputRoutes />
                          </div>

                          <div className="row p-t-20 itemsumd">
                            <InputListPrices />
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  {" "}
                                  Pedido Minimo Total Establecimiento Incl IVA
                                  ($){" "}
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder=""
                                  name="orderMinAllTax"
                                  id="updorderMinAllTax"
                                  required="required"
                                  maxlength="90"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className=" control-label">
                                  Unidad de Despacho
                                </label>
                                <select
                                  name="officeUnit"
                                  className="form-control"
                                  id="updofficeUnit"
                                >
                                  <option value="1">Unidades</option>
                                  <option value="2">UMD</option>
                                  <option value="3">Todas</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row p-t-20  itemsunidades">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className=" control-label">
                                  Visible en
                                </label>
                                <select
                                  className="form-control"
                                  id="updattentionXpersonsAsocAll"
                                  name="attentionXpersonsAsocAll"
                                >
                                  <option value="0">Marca Propia</option>
                                  <option value="1">Asociativa</option>
                                  <option value="2">Todas</option>
                                </select>
                              </div>
                            </div>
                            <TypeFreight />
                          </div>
                          <div className="row p-t-20">
                            <div className="col-md-6 porfleteVar">
                              <div className="form-group">
                                <label className=" control-label">
                                  Porcentaje Flete Variable
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="percentageFreightVar"
                                  id="updpercentageFreightVar"
                                  required="required"
                                  maxlength="90"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 varFijoflete">
                              <div className="form-group">
                                <label className=" control-label">
                                  Valor Fijo Flete ($)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="pricesFreigh"
                                  id="updpricesFreigh"
                                  required="required"
                                  maxlength="60"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row p-t-20">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className=" control-label">
                                  Valor Ticket No Cobrar Flete ($)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  name="ticketNoFreigh"
                                  id="updticketNoFreigh"
                                  required="required"
                                  maxlength="60"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className=" control-label">
                                  Entrega Domicilio o Recoge
                                </label>
                                <select
                                  name="typeShipping"
                                  className="form-control"
                                  id="updtypeShipping"
                                >
                                  <option value="1">Domicilio</option>
                                  <option value="2">Recoge</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row p-t-20">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className=" control-label">
                                  Comentarios ruta
                                </label>
                                <textarea
                                  className="form-control"
                                  name="commetsRoute"
                                  id="updcommetsRoute"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                              <button
                                type="button"
                                className="btn btn-default btnupdate"
                                id="btnupdate"
                              >
                                Actualizar Establecimiento
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive m-t-40">
                        <MaterialTable
                          title="Datos"
                          columns={[
                            { title: "id", field: "id" },
                            { title: "Nombre", field: "name" },
                          ]}
                          data={items}
                          options={{
                            // exportButton: true,
                            headerStyle: {
                              backgroundColor: "#01579b",
                              color: "#FFF",
                            },
                            actionsColumnIndex: -1,
                            filtering: true,
                            search: false
                          }}
                          actions={[
                            {
                              icon: "edit",
                              iconProps: { style: { color: "#00569b" } },
                              tooltip: "Save User",
                              onClick: (event, rowData) => formEdit(rowData.id),
                            },
                            (rowData) => ({
                              icon: "delete",
                              iconProps: { style: { color: "#ff5722" } },
                              tooltip: "Delete User",
                              onClick: (event, rowData) =>
                                alertaConfirm(rowData.id),
                            }),
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
      );
  }
}

export default establishmentsList;