import React, {Component} from 'react'
import InputFaddist from '../atoms/InputFabdist'
class createData extends Component{    
    render(){
        return  (
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
                                            <div className="form-horizontal" id="formcreate" >
                                            <form id="formulario">
                                               <input type="hidden" className="form-control" placeholder="" value="1" name="idCedi" id="updcedis" required="required"   />
                                                                                                
                                                <div className="row p-t-20">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Mensaje </label>                                                                
                                                            <input type="text" className="form-control" placeholder="" name="data" id="upddata" required="required" maxLength="110"  />
                                                            <label className="msglabel">Mínimo 3 caracteres máximo 110</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Notificación</label>
                                                            <select className="form-control" id="updcri1" name="cri1">
                                                                <option value="0" >Ningún Cliente</option>
                                                                <option value="1" >Todos los clientes</option>
                                                                <option value="2" >A clientes que hayan comprado un producto</option>
                                                                <option value="3" >A clientes que no hayan comprado un producto</option>
                                                                <option value="4" >A clientes que no hayan comprado un producto de una categoría /subcategoría</option>
                                                                <option value="5" >A Clientes que no hayan comprado hace tanto</option>
                                                            </select>
                                                        </div>
                                                    </div> 
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Valor</label>
                                                            <input type="number" className="form-control" placeholder="" name="cri2" id="updcri2" required="required" value="0" />
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
                        <button type="button" className="btn btn-default btnadd">Ingresar Notificación</button>
                    </div>               
            </React.Fragment>          
        )
    }
}

export default createData