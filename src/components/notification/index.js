import React, {Component} from 'react'
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Const from '../utils/defaultConstant'
import $ from 'jquery';
import MaterialTable from 'material-table';
document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

class subCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

   componentDidMount() {          

        fetch(Const.urlrest + "/api/orders",{
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
        function formEdit(id) {
           window.scrollTo(0, 0);
           document.querySelector('.formupdate').style.display = 'block'
            fetch(Const.urlrest + "/api/subcategory/read",{
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
                if(name.length >= 4 ){
                   
                    var datos = {
                            id: id,
                            name: name,
                            idCedi:idCedi
                        }

                        fetch(Const.urlrest + "/api/subcategory/update", {
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

                if (name.length >= 4) {
                    var datos = {
                        name: name,
                        idCedi: idCedi
                    }
                        fetch(Const.urlrest + "/api/subcategory", {
                            headers: Const.myHeaders,
                            method: "POST",
                            body: JSON.stringify(datos)
                        })
                        .then(response => response.json())
                        .then(
                            (result) => {
                                console.log(result)
                                alert("Registro Ingresado");
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
                                <h3 className="text-primary">Notificaciones</h3> </div>
                            <div className="col-md-7 align-self-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active">Listar </li>
                                </ol>
                            </div>
                        </div>
                       
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title"> </h4>
                                        
                                            <div className="table-responsive m-t-40">
                                                                                                 
                                            <MaterialTable
                                                    title="Datos"
                                                    columns={[
                                                        { title: 'Orden', field: 'data' }
                                                    ]}
                                                    data = {
                                                        items
                                                    }
                                                    options={{
                                                       // exportButton: true,
                                                        headerStyle: {
                                                            backgroundColor: '#01579b',
                                                            color: '#FFF'
                                                        },
                                                        actionsColumnIndex: -1,
                                                        filtering: true,
                                                        search: false
                                                    }}
                                                    />
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>          
                        </div>
              

                </div>
            </div>
      )
  }
}

export default subCategory;