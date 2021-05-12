import React, {Component} from 'react'

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
                                                <input type="hidden" className="form-control" placeholder="" name="name" id="updid" required="required"   />
                                                    
                                                <div className="row p-t-20">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Estado del cedi</label>                                                        
                                                            <select className="form-control" id="updactCedi">      
                                                                <option value="1" >Activo</option>   
                                                                <option value="0" >Inactivo</option>                                                                        
                                                            </select>   
                                                        </div>
                                                    </div>
                                                 </div>
                                                  <div className="row p-t-20">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Teléfono Administrador</label>                                                        
                                                                <input type="number" className="form-control" placeholder="" name="name" id="updphoneAdmin" required="required"   />
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Email Administrador </label>
                                                                <input type="email" className="form-control" placeholder="" name="name" id="updemailAdmin" required="required"  maxlength="30" />
                                                                <label className="labelEmailAdmin labelEmail"></label>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Método de entrega del pedido</label>
                                                                    <select className="form-control" id="updmethodEmail">      
                                                                        <option value="1" >Email</option>   
                                                                        <option value="2" >Webservices</option>                                                                        
                                                                    </select>   
                                                            </div>
                                                        </div>                                                                                                                     
                                                    </div>
                                                    
                                                            <div className="row p-t-20">
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Saldo Notificaciones</label>
                                                                            <input type="number" className="form-control" placeholder=""
                                                                                id="updbalanceNotifications" required="required"
                                                                                maxlength="3" disabled/>
                                                                    </div>
                                                                </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className=" control-label">Password Administrador</label>
                                                                            <input type="password" className="form-control" placeholder="******"
                                                                                name="name" id="updpassword" required="required" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                        <label className=" control-label">Email servicio al Cliente</label>
                                                                        <input type="email" className="form-control" placeholder=""
                                                                            id="updemailServiceClient" required="required"
                                                                            maxlength="45" />
                                                                            <label className="labelEmailClient labelEmail"></label>
                                                                        </div>
                                                                    </div> 
                                                            </div>
                                                   <div className="contBlock">                                                                    
                                                            <div className="row p-t-20">
                                                                <label className="col-md-6 control-label bold">Zona de atención del CEDI</label>
                                                                <div className="separador"></div>
                                                                <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label"> Latitud </label>
                                                                    <div className="clr"></div>
                                                                    <input type="text" step="0.01" className="form-control control-coo" placeholder="Latitud"  id="updlat" required="required"  maxlength="30" />                                                        
                                                                    </div>
                                                                </div>  
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label"> Longitud </label>
                                                                        <div className="clr"></div>
                                                                        <input type="text" step="0.01"className="form-control control-coo" placeholder="Longitud"  id="updlng" required="required"  maxlength="30" />                                                            
                                                                    </div>
                                                                </div> 
                                                                <div className="col-md-4">
                                                                    <div className="form-group">  
                                                                        <label className=" control-label"> Radio /km </label>
                                                                        <div className="clr"></div>
                                                                        <input type="text" step="0.01" className="form-control  control-radio" placeholder="Radio"  id="updradio" required="required"  maxlength="30" />
                                                                    
                                                                    </div>
                                                                </div>                                                
                                                            </div>
                                                    </div>

                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate" id="btnupdate">Actualizar Cedi</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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