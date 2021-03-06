import React, {Component} from 'react'
import InputFeatured from '../atoms/InputFeatured'
import InputFabdist from '../atoms/InputFabdist'
import InputCategory from '../atoms/InputCategory'
import InputSubcategory from '../atoms/InputSubcategory'
import InputStatus from '../atoms/InputStatus'

class updateData extends Component {
       componentDidMount() {
           const input = document.querySelector('#updtypeOffert');
           input.addEventListener('change', updateValue);
           document.querySelector('.itemsumd').style.display = 'none'
           function updateValue(e) {
               if (e.target.value == "1") {                   
                   document.querySelector('.itemsunidades').style.display = 'block'
                   document.querySelector('.itemsumd').style.display = 'none'
               } else {
                   document.querySelector('.itemsunidades').style.display = 'none'
                   document.querySelector('.itemsumd').style.display = 'block'
               }
           }
       }
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
                                              < form id = "formularioupdate">

                                                <input type="hidden" className="form-control" placeholder="" name="id" id="updid" required="required"   />
                                                    <input type="hidden" className="form-control" placeholder="" value="1" name="idCedi" id="updcedis" required="required"   />
                                                  
                                               <div class="hide"> <InputFabdist /></div>
                                                <div className="row p-t-20">
                                                    <InputFeatured />
                                                </div> 
                                                <div className="row p-t-20">
                                                    <InputCategory />
                                                    <InputSubcategory />
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">Nombre </label>                                                        
                                                            <input type="text" className="form-control" placeholder="" name="name" id="updname" required="required"  maxlength="60" />                                                      
                                                            <label className="msglabel">M??nimo 4 caracteres</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="row p-t-20">
                                                     <div className="col-md-12">
                                                        <div className="form-group">
                                                             <label className=" control-label">Descripci??n </label>
                                                             <textarea className="form-control" placeholder="" maxlength="255" name="description" id="upddescription"></textarea>
                                                               <label className="msglabel">M??nimo 4 caracteres</label>
                                                        </div> 
                                                    </div>                                                       
                                                </div>

                                            <div className="row p-t-20">                                                
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Nombre Tirilla</label>
                                                                <input type="text" className="form-control" placeholder="" name="nameTirilla" id="updnameTirilla" required="required"  maxlength="30" />
                                                                 <label className="msglabel">M??nimo 3 caracteres</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                 <label className="control-label">Link </label>                                                        
                                                                <input type="text" className="form-control" placeholder="" name="link" id="updlink" required="required"  maxlength="30" />
                                                             </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                             <div className="form-group">
                                                                    <label className=" control-label">Tipo oferta</label>
                                                                    <select name="typeOffert" className="form-control" id="updtypeOffert"> 
                                                                        <option value="1">Unidades</option> 
                                                                        <option value="2">UMD</option>                                                                     
                                                                    </select>  
                                                              </div>                                                                                        
                                                        </div>
                                                    </div>
                                            <div className="row p-t-20 itemsumd">
                                                    <div className="col-md-4 fleft">
                                                        <div className="form-group">
                                                            <label className=" control-label">Unidad Producto UMD </label>
                                                             <input type="number" className="form-control" placeholder="" name="umd" id="updumd" required="required"  maxlength="30" />
                                                        </div>                                               
                                                    </div>
                                                     <div className="col-md-4 fleft">
                                                        <div className="form-group">
                                                            <label className=" control-label">Precio Unitario UMD Incluido IVA  ($) </label>
                                                            <input type="number" className="form-control" placeholder="" name="priceUmdTax" id="updpriceUmdTax" required="required"  maxlength="30" />
                                                        </div>
                                                    </div>                                                    
                                                    
                                                    <div className="col-md-4 fleft">
                                                        <div className="form-group">
                                                            <label className=" control-label">Cantidad m??nima UMD  </label>
                                                            <input type="number" className="form-control" placeholder="" name="orderMinUmd" id="updorderMinUmd" required="required"  maxlength="30" value="0" />
                                                        </div>
                                                    </div>
                                             </div> 
                                                <div className="row p-t-20  itemsunidades">
                                                   <div className="col-md-6  fleft">
                                                        <div className="form-group">
                                                        <label className=" control-label">Precio Incluido IVA  ($)</label>
                                                        <input type="number" className="form-control" placeholder="" name="priceTax" id="updpriceTax" required="required"  maxlength="30" />
                                                        </div>
                                                    </div>
                                                     <div className="col-md-6  fleft">
                                                        <div className="form-group">
                                                             <label className=" control-label">Cantidad m??nima unidades  </label>
                                                            <input type="number" className="form-control" placeholder="" name="orderMinTax" id="updorderMinTax" required="required"  maxlength="60" value="0" />

                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className="row p-t-20">
                                                    <InputStatus />
                                                     <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">sku </label>
                                                            <input type="text" className="form-control" placeholder="" name="sku" id="updsku" required="required"  maxlength="30" />
                                                             <label className="msglabel">M??nimo 2 caracteres</label>
                                                        </div>
                                                    </div>
                                                     <div className="col-md-4">
                                                        <div className="form-group">
                                                             <label className=" control-label">C??digo de Barras </label>
                                                            <input type="text" className="form-control" placeholder="" name="barcode" id="updbarcode" required="required"  maxlength="60" />
                                                             <label className="msglabel">M??nimo 3 caracteres</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div className="row p-t-20">
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen 1</label>
                                                                         <img src="" id="img1show" height="50" />
                                                                        <input type="file" className="form-control" placeholder="" name="imagen1" id="creimg1" required="required"  />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen 2 </label>
                                                                         <img src="" id="img2show" height="50" />
                                                                        <input type="file" className="form-control" placeholder="" name="image2" id="creimg2" required="required"  />
                                                                    </div>
                                                                </div>  
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen 3 </label>
                                                                         <img src="" id="img3show" height="50" />
                                                                        <input type="file" className="form-control" placeholder="" name="image3" id="creimg3" required="required"  />
                                                                    </div>
                                                                </div>                                                           
                                                </div> 
                                                
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="button" className="btn btn-default btnupdate">Actualizar</button>
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