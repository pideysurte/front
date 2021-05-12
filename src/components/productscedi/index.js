import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CreateData from './createData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
class ProductsCedi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
   componentDidMount() { 
       var el = document.getElementById('mggAlert');
       if (el) {
           el.addEventListener("click", closeAlertGeneral);
       }
              function valImagen(img) {
                  var sizeByte = img.files[0].size;
                  if (img.files[0].type == "image/jpeg" || img.files[0].type == "image/png") {
                      if (sizeByte >= 500000) {
                          alertaGeneral("La imagen supera los 500Kb permitidos")
                          img.value = ""
                      }
                  } else {
                      alertaGeneral("Solo se permite imagen jpg y png")
                      img.value = ""
                  }
              }
        const creimg1 = document.querySelector('#creimg1')
        const creimg2 = document.querySelector('#creimg2')
        const creimg3 = document.querySelector('#creimg3')
        creimg1.addEventListener('change', (event) => {
            valImagen(creimg1)
        })
        creimg2.addEventListener('change', (event) => {
            valImagen(creimg2)
        })
        creimg3.addEventListener('change', (event) => {
            valImagen(creimg3)
        })
        function validURL(str) {
            var pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i');
            return !!pattern.test(str);
        }

            $(document).on('click', '.btnadd', function () {                
                let name = $("#updname").val();
                let link = $("#updlink").val();
                let barcode=  $("#updbarcode").val();
                let nameTirilla =  $("#updnameTirilla").val();
                let orderMinTax = $("#updorderMinTax").val();
                let priceTax = $("#updpriceTax").val();
                let priceUmdTax = $("#updpriceUmdTax").val();
                let sku = $("#updsku").val();
                let description = $("#upddescription").val(); 
                        if(
                            name.length >= 4 &&
                            barcode.length >= 3 &&
                            nameTirilla.length >= 3 &&
                            priceTax.length >= 3 &&
                            sku.length >= 2 &&
                            description.length >=4                        
                            ){
                            const data = new FormData(document.getElementById('formulario'));
                                fetch(Const.urlrest + "/api/productscedi", {
                                    headers: Const.myHeadersPost,
                                    method: "POST",
                                    body: data
                                })
                                .then(response => response.json())
                                .then(
                                    (result) => {
                                        alertaGeneral("Registro Ingresado");
                                        window.location.reload(false);
                                    },
                                    (error) => {
                                        this.setState({
                                            isLoaded: true,
                                            error
                                        });
                                    }
                                )
                        } else {
                            alertaGeneral("Validar La información ingresada");
                        }
                
            });
        fetch(Const.urlrest + "/api/productscedi",{
            headers: Const.myHeaders,
        })
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )            
   }
  render(){            
      
      const { error, isLoaded, items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar /> 
                 <AlertGeneral /> 
                
                <div className="page-wrapper">
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3 className="text-primary">Productos</h3> </div>
                        <div className="col-md-7 align-self-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#nogp">Home</a></li>
                                <li className="breadcrumb-item active">Listar </li>
                            </ol>
                        </div>
                    </div>
                    <CreateData />  

                </div>
            </div>
      )
  }
}

export default ProductsCedi;