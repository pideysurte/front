import React, {Component} from 'react'
import $ from 'jquery';

class Sidebar extends Component{
    componentDidMount() {
        $(".itemparent").click(function () {
            $(this).next("ul").toggle();
        });
        $(".itemSubparent").click(function () {
            $(this).next("ul").toggle();
        });
    }
    render(){
        return  (
            <React.Fragment>
                <div  className="left-sidebar">
                    <div  className="scroll-sidebar">
                        <nav  className="sidebar-nav">
                            <ul id="sidebarnav">
                                <li  className="nav-devider"></li>
                                <li> <a  className="  " href="./dashboard" aria-expanded="false"><i  className="fa fa-desktop"></i><span  className="hide-menu"> Escritorio</span></a>
                                </li>
                                <li><a href="./cediconfig"><i  className="fa fa-book"></i> Cedi Configuración</a></li>
                                <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false"> Comerciales</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./comerciallist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./comercial">Crear</a></li>
                                                    </ul>
                                </li>
                                <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false"> Rutas cedi</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./routescedilist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./routescedi">Crear</a></li>
                                                    </ul>
                                </li>
                                <li>
                                    <a  className="has-arrow itemparent " href="#" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu"> Taxonomías  </span></a>
                                    <ul aria-expanded="false"  className="collapse">
                                        <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false"> Categorias</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./categorylist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./category">Crear</a></li>
                                                    </ul>
                                       </li>
                                        <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false"> Subcategorias</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./subcategorylist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./subcategory">Crear</a></li>
                                                    </ul>
                                       </li>
                                    </ul>
                                </li>
                                <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false"> Imagenes publicitarias</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./advertisinglist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./advertising">Crear</a></li>
                                                    </ul>
                                </li>
                                <li>
                                    <a  className="has-arrow  itemparent" href="#" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Productos</span></a>
                                    <ul aria-expanded="false"  className="collapse">
                                        <li><a href="./productslist">Listar</a></li>
                                        <li><a href="./productscreate">Crear</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a  className="has-arrow itemparent " href="#" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Precios</span></a>
                                    <ul aria-expanded="false"  className="collapse">
                                        <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Precios Personalizados</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./pricescustomlist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./pricescustom">Crear</a></li>
                                                    </ul>
                                        </li>
                                        <li id="ModUsuarioMp"><a  className="has-arrow itemSubparent " href="#nogo" aria-expanded="false">Precios Detalles</a>
                                                    <ul aria-expanded="false"  className="collapse">  
                                                        <li id="ModUsuarioMpl"><a href="./pricescustomdetaillist">Listar</a></li>
                                                        <li id="ModUsuarioMpC"><a href="./pricescustomdetail">Crear</a></li>
                                                    </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a  className="has-arrow  itemparent" href="#" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu"> Establecimientos</span></a>
                                    <ul aria-expanded="false"  className="collapse">
                                        <li><a href="./establishmentslist">Listar</a></li>
                                        <li><a href="./establishments">Crear</a></li>
                                    </ul>
                                </li>
                                <li><a href="./orders"><i  className="fa fa-book"></i> Descargar Pedidos</a></li>
                                <li>
                                    <a  className="has-arrow  itemparent" href="#" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu"> Notificaciones</span></a>
                                    <ul aria-expanded="false"  className="collapse">
                                        <li><a href="./notifications">Crear</a></li>
                                    </ul>
                                </li>
                                <li id="ModUsuario" style={{display:'none'}}> <a  className="has-arrow itemparent " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Usuarios</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li id="ModUsuarioUserl"><a href="./userlist">Listar</a></li>
                                                <li id="ModUsuarioUserc"><a href="./usercreate">Crear</a></li>
                                                
                                            </ul>
                                </li>     
                            </ul>
                        </nav>
                    </div>
                </div>                
            </React.Fragment>          
        )
    }
}

export default Sidebar