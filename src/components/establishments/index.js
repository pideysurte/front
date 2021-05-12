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
class establishments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
   componentDidMount() { 
        const input = document.querySelector('#updtypeFreight');
        input.addEventListener('change', updateValue);
        document.querySelector('.porfleteVar').style.display = 'none'
        
        function updateValue(e) {
            if (e.target.value == "2") {               
                document.querySelector('.porfleteVar').style.display = 'block'
                document.querySelector('.varFijoflete').style.display = 'none'
            } else {               
                document.querySelector('.porfleteVar').style.display = 'none'
                document.querySelector('.varFijoflete').style.display = 'block'
            }
        }
        function isValidEmail(email) {
         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(email);
        }
        var el = document.getElementById('mggAlert');
        if (el) {
            el.addEventListener("click", closeAlertGeneral);
        }
                 $(document).on('click', '.btnadd', function () {
                          let idCedi = $("#updcedis").val();
                          let pricesFreigh = 0;
                          let percentageFreightVar = 0;
                          let status = $("#updStatus").val();
                          let idUserapp = $("#updidUserapp").val();
                          let address = $("#updaddress").val();
                          let typeDocument = $("#updtypeDocument").val();
                          let numberDocument = $("#updnumberDocument").val();
                          let nameBilling = $("#updnameBilling").val();
                          let phone = $("#updphone").val();
                          let name = $("#updname").val();
                          let nameContac = $("#updnameContac").val();
                          let lat = $("#updlat").val();
                          let lng = $("#updlng").val();
                          let radio = $("#updradio").val();
                          let paymentMethods = $("#updpaymentmethods").val();
                          let idRoute = $("#updidRoute").val();
                          let idCommercial = $("#updidComercial").val();
                          let idListPrices = $("#updidListPrices").val();
                          let typeTaxes = $("#updtypeFreight").val();                          
                          let orderMinAllTax = $("#updorderMinAllTax").val();
                          let typeShipping = $("#updtypeShipping").val();
                          let officeUnit = $("#updofficeUnit").val();
                          let attentionXpersonsAsocAll = $("#updattentionXpersonsAsocAll").val();
                          let ticketNoFreigh = $("#updticketNoFreigh").val();
                          let commetsRoute = $("#updcommetsRoute").val();
                          let emailUser = $("#updemailUser").val();
                          if ($("#updpercentageFreightVar").val() != "") {
                              percentageFreightVar = $("#updpercentageFreightVar").val();
                          }
                          if ($("#updpricesFreigh").val() != "") {
                              pricesFreigh = $("#updpricesFreigh").val();
                          }
                           let valEmail = isValidEmail(emailUser);
                           if (valEmail) {
                             if (lat != "" && lng != "" && radio != "") {
                               let coordinates = {
                                 lat: lat,
                                 lng: lng,
                                 radio: radio,
                               };
                               if (
                                 nameContac.length >= 4 &&
                                 name.length >= 4 &&
                                 nameBilling.length >= 4
                               ) {
                                 var datos = {
                                   idCedi: idCedi,
                                   status: status,
                                   name: name,
                                   idUserapp: idUserapp,
                                   address: address,
                                   typeDocument: typeDocument,
                                   numberDocument: numberDocument,
                                   nameBilling: nameBilling,
                                   phone: phone,
                                   officeUnit: officeUnit,
                                   nameContac: nameContac,
                                   coordinates: JSON.stringify(coordinates),
                                   paymentMethods: paymentMethods,
                                   idRoute: idRoute,
                                   idCommercial: idCommercial,
                                   idListPrices: idListPrices,
                                   orderMinAllTax: orderMinAllTax,
                                   typeShipping: typeShipping,
                                   attentionXpersonsAsocAll: attentionXpersonsAsocAll,
                                   typeTaxes: typeTaxes,
                                   percentageFreightVar: percentageFreightVar,
                                   pricesFreigh: pricesFreigh,
                                   ticketNoFreigh: ticketNoFreigh,
                                   commetsRoute: commetsRoute,
                                   emailUser: emailUser,
                                   idUserapp:10
                                 };

                                 fetch(
                                   Const.urlrest +
                                     "/api/establishmentsclientcedi",
                                   {
                                     headers: Const.myHeaders,
                                     method: "POST",
                                     body: JSON.stringify(datos),
                                   }
                                 )
                                   .then((response) => response.json())
                                   .then(
                                     (result) => {
                                       console.log(result.data);
                                       if (result.data) {
                                         alertaGeneral("Registro Ingresado");
                                         window.location.reload(false);
                                       } else {
                                         alertaGeneral(
                                           "Por favor revisa la información ingresada, todos los campos son obligatorios"
                                         );
                                       }
                                     },
                                     (error) => {
                                       this.setState({
                                         isLoaded: true,
                                         error,
                                       });
                                     }
                                   );
                               } else {
                                 alertaGeneral(
                                   "Verifica los datos ingresados, Todos son obligatorios"
                                 );
                               }
                             } else {
                               alertaGeneral("Verifica las coordenadas");
                             }
                           } else {
                             alertaGeneral("Verifica el email");
                           }
                        });
                       
                      
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
                            <h3 className="text-primary">Establecimientos</h3> </div>
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

export default establishments;