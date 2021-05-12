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
class listpricescustom extends Component {
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
               let name = $("#crename").val();
               let idCedi = $("#formcreate #updcedis").val();
               let idFabDist = $("#formcreate #updidFabDist").val();

               if (name.length >= 4) {
                   var datos = {
                       name: name,
                       idCedi: idCedi,
                       idFabDist: idFabDist
                   }
                   fetch(Const.urlrest + "/api/listpricescustom", {
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

export default listpricescustom;