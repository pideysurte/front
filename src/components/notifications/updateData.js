import React, {Component} from 'react'
import InputFaddist from '../atoms/InputFabdist'

class updateData extends Component {
    render(){
        return  (
            <React.Fragment>                   
                   <div className="container-fluid formupdate" id="formupdate">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-title">
                                        <h4>Actualizar </h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="horizontal-form">
                                            <div className="form-horizontal" id="formcreate" >
                                                    <form id="formulario">
                                                    <input type="hidden" className="form-control" placeholder="" name="name" id="updid" required="required"   />
                                                                                                     
                                                        <div className="row p-t-20">
                                                            <InputFaddist />
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className=" control-label">Mensaje </label>                                                                
                                                                    <input type="text" className="form-control" placeholder="" name="data" id="upddata" required="required" maxLength="110"  />
                                                                    <label className="msglabel">Mínimo 3 caracteres máximo 110</label>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row p-t-20">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                        <label className=" control-label">A todos los clientes</label>    
                                                                        <select className="form-control" id="updcri1"  name="cri1">       
                                                                            <option value="0" >Ningún Cliente</option>   
                                                                            <option value="1" >Todos los clientes</option>                                                                
                                                                        </select>
                                                                </div>
                                                            </div>  
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                        <label className=" control-label">A clientes que hayan comprado un producto</label>    
                                                                        <input type="number" className="form-control" placeholder="" name="cri2" id="updcri2" required="required"   />
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                        <label className=" control-label">A clientes que no hayan comprado un producto</label>    
                                                                        <input type="number" className="form-control" placeholder="" name="cri3" id="updcri3" required="required"  />
                                                                </div>
                                                            </div> 

                                                        </div>
                                                    <div className="row p-t-20">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                        <label className=" control-label">A clientes que no hayan comprado un producto de una categoría /subcategoría</label>    
                                                                        <input type="number" className="form-control" placeholder="" name="cri4" id="updcri4" required="required"  />
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                        <label className=" control-label">A Clientes que no hayan comprado hace tantos días</label>    
                                                                        <input type="number" className="form-control" placeholder="" name="cri5" id="updcri5" required="required"  />
                                                                </div>
                                                            </div>                                                             
                                                        </div>
                                                    </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="button" className="btn btn-default btnupdate">Actualizar Notificación</button>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>          
        )
    }
}

export default updateData