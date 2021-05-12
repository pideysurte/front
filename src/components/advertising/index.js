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

class avertisingcedi extends Component {
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
          function validURL(str) {
              var pattern = new RegExp('^(https?:\\/\\/)?' +
                  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                  '((\\d{1,3}\\.){3}\\d{1,3}))' +
                  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                  '(\\?[;&a-z\\d%_.~+=-]*)?' +
                  '(\\#[-a-z\\d_]*)?$', 'i');
              return !!pattern.test(str);
          }
       var dtToday = new Date();
       var month = dtToday.getMonth() + 1;
       var day = dtToday.getDate();
       var year = dtToday.getFullYear();
       if (month < 10)
           month = '0' + month.toString();
       if (day < 10)
           day = '0' + day.toString();
       var minDate = year + '-' + month + '-' + day;
       var creschedule = document.getElementById('creschedule');
       creschedule.setAttribute("min", minDate);



       function valImagen(img) {
           var sizeByte = img.files[0].size;
           if (img.files[0].type == "image/jpeg" || img.files[0].type == "image/png") {
               if (sizeByte >= 1000000) {
                   alertaGeneral("La imagen supera los 1Mg permitidos")
                   img.value = ""
               }
           } else {
               alertaGeneral("Solo se permite imagen jpg y png")
               img.value = ""
           }
       }         
       const selectElement = document.querySelector('#creimg');


       selectElement.addEventListener('change', (event) => {
           valImagen(selectElement)
       });
    
      
               

                $(document).on('click', '.btnadd', function () {
                    let link = $("#crelink").val()
                    let schedule = $("#creimg").val()
                    let valurl = validURL(link)
                    if (valurl){
                            if (schedule.length >= 4 ) {
                                const data = new FormData(document.getElementById('formulario'));
                                
                                fetch(Const.urlrest + "/api/advertisingcedi", {  
                                        headers: Const.myHeaders,           
                                        method: "POST",
                                        body: data
                                    })
                                    .then(response => response.json())
                                    .then(
                                        (result) => {
                                         console.log(result)
                                            alertaGeneral("Registro Ingresado");
                                           window.location.reload();
                                        },
                                        (error) => {
                                            console.log(error)
                                        }
                                    )
                            } else {
                                alertaGeneral("Validar La información ingresada");
                            }
                    }else {
                        alertaGeneral("El link ingresado no es valido");
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
                                <h3 className="text-primary">Imagenes Publicitarias</h3> </div>
                            <div className="col-md-7 align-self-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active">Listar </li>
                                </ol>
                            </div>
                        </div>                        
                      <CreateData  />
                </div>
            </div>
      )
  }
}

export default avertisingcedi;