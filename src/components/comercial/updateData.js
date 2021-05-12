import React, {Component} from 'react'
import InputCedis from '../atoms/InputCedis'
import InputStatus from '../atoms/InputStatus'

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
                                                <form id="formularioupdate">
                                                <input type="hidden" className="form-control" placeholder="" name="id" id="updid" required="required"   />
                                                <input type="hidden" className="form-control" placeholder="" value="1" name="idCedi" id="updcedis" required="required"   />
                                                <div className="row p-t-20">
                                                                 <InputStatus />
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Nombre </label>                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="name" id="updname" required="required"  />
                                                                        <label className="msglabel">Mínimo 4 caracteres</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                           <label className=" control-label">Email </label>
                                                                           <input type="text" className="form-control" placeholder="" name="email" id="updemail" required="required"  />
                                                                           <label className="labelEmailupd labelEmail"></label>
                                                                    </div>                                                                                        
                                                                </div>                                                                                                                           
                                                </div>
                                                <div className="row p-t-20">
                                                                
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Celular </label>
                                                                
                                                                        <input type="number" className="form-control" placeholder="" name="phone" id="updphone" required="required" maxLength="22" />
                                                                    </div>
                                                                </div>
                                                               <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen </label>
                                                                        <img src="" id="imgshow" height="50" /> 
                                                                        <input type="file" className="form-control" placeholder="" name="img" id="updimg" required="required"  />
                                                                        <label className="resultadoupd"></label>
                                                                  </div>
                                                                </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate" id="btnupdate">Actualizar Comercial</button>
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
            </React.Fragment>          
        )
    }
}

export default updateData