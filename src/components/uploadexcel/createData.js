import React, {Component} from 'react'
import InputCedis from '../atoms/InputCedis'
import InputFabdist from '../atoms/InputFabdist'
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
                                          
                                                <div className="row p-t-20">
                                                     <InputCedis />
                                                    <InputFabdist />
                                                </div>
                                                <div className="row p-t-20">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Nombre </label>
                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="name" id="crename" required="required"  />
                                                                    </div>
                                                                </div>
                                                                 <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Archivo Csv </label>
                                                                
                                                                        <input type="file" className="form-control" placeholder="" name="name" id="crefile" required="required"  />
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
                        <button type="button" className="btn btn-default btnadd">Ingresar</button>
                    </div>               
            </React.Fragment>          
        )
    }
}

export default createData