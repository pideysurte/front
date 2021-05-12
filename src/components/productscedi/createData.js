import React, {Component} from 'react'
import InputFabdist from '../atoms/InputFabdist'
import InputCategory from '../atoms/InputCategory'
import InputSubcategory from '../atoms/InputSubcategory'
import InputStatus from '../atoms/InputStatus'
import InputFeatured from '../atoms/InputFeatured'
class createData extends Component{    
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
                                                            <input type="text" className="form-control" placeholder="" name="name" id="updname" required="required"  maxlength="30" />                                                      
                                                            <label className="msglabel">Mínimo 4 caracteres</label>
                                                        </div>
                                                    </div>
                                                </div>  
                                                                                           
                                                <div className="row p-t-20">                                                       
                                                     <div className="col-md-12">
                                                        <div className="form-group">
                                                             <label className=" control-label">Descripción </label>
                                                             <textarea className="form-control" placeholder="" name="description" id="upddescription" maxlength="255"></textarea>
                                                               <label className="msglabel">Mínimo 4 caracteres</label>
                                                        </div>
                                                    </div>                                                       
                                                </div>     
                                            <div className="row p-t-20">                                                
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className=" control-label">Nombre Tirilla</label>                                                        
                                                                    <input type="text" className="form-control" placeholder="" name="nameTirilla" id="updnameTirilla" required="required"  maxlength="30" />
                                                                    <label className="msglabel">Mínimo 3 caracteres</label>
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
                                                                    <label className=" control-label"  >Tipo oferta</label>
                                                                    <select name="typeOffert" className="form-control" name="typeOffert" id="updtypeOffert" onchange="inputsUmd()"> 
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
                                                            <label className=" control-label">Precio Unitario UMD Incluido IVA  ($)</label>
                                                            <input type="number" className="form-control" placeholder="" name="priceUmdTax" id="updpriceUmdTax" required="required"  maxlength="30" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 fleft">
                                                        <div className="form-group">
                                                            <label className=" control-label">Cantidad mínima UMD  </label>
                                                            <input type="number" className="form-control" placeholder="" name="orderMinUmd" id="updorderMinUmd" required="required"  maxlength="30" value="0" />
                                                        </div>
                                                    </div>                                                    
                                             </div> 
                                                <div className="row p-t-20  itemsunidades">
                                                   <div className="col-md-6  fleft">
                                                        <div className="form-group">
                                                        <label className=" control-label">Precio Incluido IVA ($)</label>
                                                        <input type="number" className="form-control" placeholder="" name="priceTax" id="updpriceTax" required="required"  maxlength="30" />
                                                        </div>
                                                    </div>
                                                     <div className="col-md-6  fleft">
                                                        <div className="form-group">
                                                             <label className=" control-label">Cantidad mínima unidades </label>
                                                            <input type="number" className="form-control" placeholder="" name="orderMinTax" id="updorderMinTax" required="required"  maxlength="60"  value="0" />

                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className="row p-t-20">
                                                     <InputStatus />
                                                     <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className=" control-label">SKU Interno</label>
                                                            <input type="text" className="form-control" placeholder="" name="sku" id="updsku" required="required"  maxlength="30" />
                                                             <label className="msglabel">Mínimo 2 caracteres</label>
                                                        </div>
                                                    </div>
                                                     <div className="col-md-4">
                                                        <div className="form-group">
                                                             <label className = " control-label" > Código de Barras </label>
                                                            <input type="text" className="form-control" placeholder="" name="barcode" id="updbarcode" required="required"  maxlength="60" />
                                                             <label className="msglabel">Mínimo 3 caracteres</label>   
                                                        </div>
                                                    </div>
                                                </div>   
                                                  
                                                 <div className="row p-t-20">
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen 1</label>
                                                                        <input type="file" className="form-control" placeholder="" name="imagen1" id="creimg1" required="required"  />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen 2 </label>
                                                                        <input type="file" className="form-control" placeholder="" name="image2" id="creimg2" required="required"  />
                                                                    </div>
                                                                </div> 
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className=" control-label">Imagen 3 </label>
                                                                        <input type="file" className="form-control" placeholder="" name="image3" id="creimg3" required="required"  />
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
                        <button type="button" className="btn btn-default btnadd">Ingresar</button>
                    </div>               
            </React.Fragment>          
        )
    }
}

export default createData