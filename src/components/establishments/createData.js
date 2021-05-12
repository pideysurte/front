import React, {Component} from 'react'
import InputTypeDocument from '../atoms/InputTypeDocument'
import InputStatus from '../atoms/InputStatus'
import InputPaymentMethods from '../atoms/InputPaymentMethods'
import InputRoutes from '../atoms/InputRoutes'
import InputListPrices from '../atoms/InputListPrices'
import InputComercial from '../atoms/InputComercial'
import TypeFreight from '../atoms/InputTaxes'
class createData extends Component{    
   componentDidMount() {
       
   }
    render(){
 
        return (
          <React.Fragment>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-title">
                      <h4>Crear </h4>
                    </div>
                    <div className="card-body">
                      <div className="horizontal-form">
                        <div className="form-horizontal" id="formcreate">
                          <form id="formulario">
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
                                    maxlength="90"
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
                                    maxlength="90"
                                  />
                                </div>
                              </div>
                              <InputPaymentMethods />
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
                              <InputComercial />
                              <InputRoutes />
                            </div>

                            <div className="row p-t-20 itemsumd">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Pedido Minimo Total Establecimiento Incl
                                    IVA($)
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
                              <div className="col-md-6">
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
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className=" control-label">
                                    Valor Ticket No Cobrar Flete($)
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
                              <div className="col-md-4">
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
                              <InputListPrices />
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
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="button"
                className="btn btn-default btnadd"
                id="btnadd"
              >
                Ingresar Establecimiento
              </button>
            </div>
          </React.Fragment>
        );
    }
}

export default createData