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
                                                <input type="hidden" className="form-control" placeholder="" value="1" name="idCedi" id="updidCedi" required="required"   />                                                   

                                                <div className="row p-t-20">
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Nombre </label>                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="name" id="updname" required="required"  />
                                                                        <label className="msglabel">Mínimo 4 caracteres</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <label className=" control-label">Días Atención ruta</label>
                                                                     < div className = "form-group diasruta diasrutaedit" >
                                                                        <label><input type="checkbox" value="lunes"  className="form-control updcheckdias" /> Lunes</label>                                                                                                                                                    
                                                                        <label><input type="checkbox"  value="martes"  className="form-control updcheckdias " />Martes</label>    
                                                                        <label><input type="checkbox"  value="miercoles"  className="form-control  updcheckdias" /> Miércoles</label>                                                                                                                                                    
                                                                        <label><input type="checkbox"  value="jueves"  className="form-control  updcheckdias" />Jueves</label> 
                                                                        <label><input type="checkbox"  value="viernes"  className="form-control  updcheckdias" /> Viernes</label>                                                                                                                                                    
                                                                        <label><input type="checkbox"  value="sabado"  className="form-control  updcheckdias" />Sabado</label>    
                                                                         <label><input type="checkbox"  value="domingo"  className="form-control  updcheckdias" />Domingo</label>                                                                         
                                                                    </div> 
                                                                </div>
                                                                
                                                </div>
                                                <div className="row p-t-20">                                                                
                                                              <div className="col-md-12">
                                                                    <div className="form-group">
                                                                           <label className=" control-label"> Politica de ruta</label>
                                                                            <textarea className="form-control" id="updtextPr">
                                                                            </textarea>
                                                                            <label className="msglabel">Mínimo 4 caracteres</label>
                                                                    </div>                                                                                        
                                                                </div>  
                                                            </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate">Actualizar Ruta</button>
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