import React, {Component} from 'react'
import InputCedis from '../atoms/InputCedis'
import InputFabdist from '../atoms/InputFabdist'
import InputStatus from '../atoms/InputStatus'
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
                                                <input type="hidden" className="form-control" placeholder="" value="1" name="idCedi" id="updcedis" required="required"   />
                                                <div className="hide">
                                                  <InputFabdist />
                                                </div>
                                                <div className="row p-t-20">
                                                                <InputStatus />
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Nombre </label>
                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="name" id="crename" required="required" maxLength="45" />
                                                                        <label className="msglabel">M??nimo 4 caracteres</label>
                                                                    </div>
                                                                </div>                                                   
                                                </div>
                                                <div className="row p-t-20">                                                              

                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                           <label className=" control-label">Nota </label>
                                                                            <textarea className="form-control" id="crenotas">
                                                                            </textarea>
                                                                    </div>                                                                                        
                                                                </div>
                                                </div>

                                                <div className="form-group">
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default btnadd">Ingresar Categor??a</button>
                    </div>               
            </React.Fragment>          
        )
    }
}

export default createData