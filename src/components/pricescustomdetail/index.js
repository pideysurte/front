import React, {Component} from 'react'
import {appendScript} from '../utils/appendScript'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CreateData from './createData'
import UpdateData from './updateData'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'
document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

class detaillistpricescustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

   componentDidMount() { 
        $(document).on('click', '.btnadd', function () {

            let idProduct = $("#formcreate #idProduct").val();
            let priceTax = $("#crepriceTax").val();
            let orderMinCant = $("#creorderMinCant").val();
            let umdTax = $("#creumdTax").val();
            let orderMinUmd = $("#creorderMinUmd ").val();
            let valUnidUmd = $("#crevalUnidUmd ").val();
            let idListPrices = $("#formcreate #updidListPrices").val();

            if (priceTax.length >= 1) {
                var datos = {
                    idProduct: idProduct,
                    priceTax: priceTax,
                    orderMinCant: orderMinCant,
                    orderMinUmd: orderMinUmd,
                    umdTax: umdTax,
                    valUnidUmd: valUnidUmd,
                    idListPrices: idListPrices
                }
                fetch(Const.urlrest + "/api/detaillistpricescustom", {
                        headers: Const.myHeaders,
                        method: "POST",
                        body: JSON.stringify(datos)
                    })
                    .then(response => response.json())
                    .then(
                        (result) => {
                            console.log(result)
                            alertaGeneral("Registro Ingresado");
                            window.location.reload();
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
        })
             
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
                                <h3 className="text-primary">Precios Personalizados</h3> </div>
                            <div className="col-md-7 align-self-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
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

export default detaillistpricescustom;