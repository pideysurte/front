import React, {Component} from 'react'
import {appendScript} from '../utils/appendScript'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CreateData from './createData'

import Const from '../utils/defaultConstant'
import $ from 'jquery';

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
        fetch(Const.urlrest + "/api/listpricescustom")
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
      function formEdit(id) {
           window.scrollTo(0, 0);
           document.querySelector('.formupdate').style.display = 'block'
            fetch(Const.urlrest + "/api/listpricescustom/read",{
                headers: Const.myHeaders,
                method: "POST",
                body: JSON.stringify({
                    id: id
                })
            })
            .then(response => response.json())
            .then(
                (result) => {
                    console.log(result)
                    $("#updid").val(result.data.id)
                    $("#updname").val(result.data.name)
                    $('#formupdate #updcedis  option[value="' + result.data.idCedi + '"]').attr("selected", "selected");
                    $('#formupdate #updidFabDist option[value="' + result.data.idFabDist + '"]').attr("selected", "selected");
                    
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

            $(document).off().on('click', '.btnupdate', function () {
                let id = $("#updid").val();
                let name = $("#updname").val();
                let idCedi = $("#formupdate #updcedis").val();
                let idFabDist = $("#formupdate #updidFabDist").val(); 
                if(name.length >= 4 ){
                   
                    var datos = {
                            id: id,
                            name: name,
                            idCedi:idCedi,
                            idFabDist:idFabDist
                        }

                        fetch(Const.urlrest + "/api/listpricescustom/update", {
                            headers: Const.myHeaders,
                            method: "PUT",
                            body: JSON.stringify(datos)
                        })
                        .then(response => response.json())
                        .then(
                            (result) => {
                                console.log(result)
                                alert("Registro  Actualizado");
                                window.location.reload();
                            },
                            (error) => {
                                this.setState({
                                    isLoaded: true,
                                    error
                                });
                            }
                        )
                }else{
                    alert("Validar La información ingresada");
                }
            });

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
                        alert("Asignar directorio")
                } else {
                    alert("Validar La información ingresada");
                }
            });


            
      }
      const { error, isLoaded, items } = this.state;
      return (          
            <div>
                <Headerdashboard/>
                <Sidebar />  
                
                <div className="page-wrapper">
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3 className="text-primary">Subir lista de precios</h3> </div>
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