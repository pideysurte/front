import React, {Component} from 'react'
import InputCedis from '../atoms/InputCedis'
import InputListPrices from '../atoms/InputListPrices'
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
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Link </label>                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="link" id="crelink" required="required"  />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Fecha limite de Publicación </label>                                                                
                                                                        <input type="date" className="form-control" placeholder="" name="schedule" id="creschedule" required="required"  />
                                                                    </div>
                                                                </div>
                                                </div>
                                                <div className="row p-t-20">
                                                            <InputListPrices />
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label className=" control-label">Visible en</label>
                                                                        <select className="form-control" id="updapps" name="persAsoAll">      
                                                                            <option value="0" >Marca Propia</option>   
                                                                            <option value="1" >Asociativa</option> 
                                                                            <option value="2" >Todas</option>                                                                         
                                                                        </select>                                                              
                                                                </div>
                                                            </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen </label>
                                                                        <input type="file" className="form-control" placeholder="" name="img" id="creimg" required="required"  />
                                                                    </div>
                                                                </div>
                                                </div>
                                               <div className="row p-t-20">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Descripción</label>    
                                                                        <textarea name="description"  className="form-control"   ></textarea>                                                         
                                                                       
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
                        <button type="button" className="btn btn-default btnadd">Ingresar publicidad</button>
                    </div>               
            </React.Fragment>          
        )
    }
}

export default createData