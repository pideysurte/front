import React, {Component} from 'react'
import InputStatus from '../atoms/InputStatus'
import InputFabdist from '../atoms/InputFabdist'

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
                                                    <input type="hidden" className="form-control" placeholder="" value="1" name="idCedi" id="updcedis" required="required"   />
                                              <div class="hide"> <InputFabdist /></div>
                                                <div className="row p-t-20">                                                   
                                                    <InputStatus  />
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Nombre </label>
                                                                
                                                                        <input type="text" className="form-control" placeholder="" name="name" id="updname" required="required"  />
                                                                    </div>
                                                                </div>
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