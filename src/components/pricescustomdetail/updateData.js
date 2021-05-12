import React, {Component} from 'react'
import InputProducto from '../atoms/InputProducto'
import Inputlistprices from '../atoms/InputListPrices'
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
                                                <input type="hidden" className="form-control" placeholder="" name="id" id="updid" required="required"   />
                                                    
                                                
                                                <div className="row p-t-20">
                                                               <InputProducto />
                                                               <Inputlistprices />
                                                               <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Valor Unidad UMD</label>
                                                                        <input type="number" className="form-control" placeholder="" name="updlink" id="updvalUnidUmd" required="required"  maxlength="30" />
                                                                    </div>                                               
                                                                </div>
                                                                
                                                </div>
                                                <div className="row p-t-20">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Precio Unidad con impuestos</label>
                                                                
                                                                        <input type="number" className="form-control" placeholder="" name="name" id="updpriceTax" required="required"  />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    < div className = "form-group" > 
                                                                           <label className=" control-label">Precio unidad UMD con impuestos </label>
                                                                            <input type="number" className="form-control" placeholder="" name="name" id="updorderMinCant" required="required"  />
                                                                    </div>                                                                                        
                                                                </div>
                                                </div>
                                               <div className="row p-t-20 itemsumd">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className=" control-label">Orden mínima </label>
                                                             <input type="text" className="form-control" placeholder="" name="updlink" id="updorderMinUmd" required="required"  maxlength="30" />
                                                        </div>                                               
                                                    </div>
                                                     <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className=" control-label">Precio Unitario UMD </label>
                                                            <input type="text" className="form-control" placeholder="" name="priceUmdTax" id="updumdTax" required="required"  maxlength="30" />
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="row p-t-20 itemsumd">
                                                    
                                             </div>  
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate">Actualizar</button>
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