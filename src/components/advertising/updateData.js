import React, {Component} from 'react'
import InputCedis from '../atoms/InputCedis'
import InputListPrices from '../atoms/InputListPrices'

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
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Link </label>                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="link" id="updlink" required="required"  />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Fecha limite de Publicación </label>                                                                
                                                                        <input type="date" className="form-control" placeholder="" name="schedule" id="updschedule" required="required"  />
                                                                    </div>
                                                                </div>
                                                </div>
                                                <div className="row p-t-20">
                                                     <InputListPrices />
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Visible en</label>
                                                                <select className="form-control" id="updapps"  name="persAsoAll">       
                                                                    <option value="0" >Marca Propia</option>   
                                                                    <option value="1" >Asociativa</option> 
                                                                    <option value="2" >Todas</option>                                                                         
                                                                </select>                                                              
                                                            </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen </label> 
                                                                         <img src="" id="imgshow" height="50" />         
                                                                        <input type="file" className="form-control" placeholder="" name="img" id="updimg" required="required"  />
                                                                    </div>
                                                                </div>
                                               </div>
                                                <div className="row p-t-20">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Descripción</label>    
                                                                        <textarea name="description" id="upddescription" className="form-control"   ></textarea>                                                         
                                                                       
                                                                    </div>
                                                                </div>  
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate">Actualizar publicidad</button>
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