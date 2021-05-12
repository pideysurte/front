import React, {Component} from 'react'
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
                                            <form id="formulario">
                                                <input type="hidden" className="form-control" placeholder="" value="1" name="idCedi" id="creidCedi" required="required"   />                                                   

                                                <div className="row p-t-20">                                                    
                                                                 <InputStatus />
                                                                 <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Nombre </label>                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="name" id="crename" required="required"  />
                                                                        <label className="msglabel">Mínimo 4 caracteres</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                           <label className=" control-label">Email </label>
                                                                           <input type="text" className="form-control" placeholder="" name="email" id="creemail" required="required"  />
                                                                           <label className="labelEmailcre labelEmail"></label>
                                                                    </div>                                                                                        
                                                                </div>  
                                                </div>
                                                <div className="row p-t-20">                                                                  
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Celular </label>                                                                
                                                                        <input type="number" className="form-control" placeholder=""  maxLength="22" name="phone" id="crephone" required="required"  />
                                                                    </div>
                                                                </div>
                                                               <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen </label>
                                                                        <input type="file" className="form-control" placeholder="" name="img" id="creimg" required="required"  />
                                                                        <label className="resultado"></label>
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
                        <button type="button" className="btn btn-default btnadd" id="btnadd">Crear Comercial</button>
                    </div>               
            </React.Fragment>          
        )
    }
}

export default createData