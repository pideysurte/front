import React from 'react';
import '../../assets/css/Admin.css'
import Headerdashboard from '../header/Header'
import Sidebar from '../sidebar/Sidebar'


document.body.classList.add('fix-sidebar');
//import { getUser, removeUserSession } from '../../Utils/Common';

function Dashboard(props) {
 // const user = getUser();

  // handle click event of logout button
 /* const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
*/

  return (
    <div>
      <Headerdashboard/>
      <Sidebar />

      <div  className="page-wrapper">
                    <div  className="row page-titles">
                        <div  className="col-md-8 align-self-center">
                            <h3  className="text-primary">Escritorio</h3>
                        </div>
                        <div  className="col-md-4 align-self-center">
                            <ol  className="breadcrumb">
                                <li  className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li  className="breadcrumb-item active">Escritorio</li>
                            </ol>
                        </div>
                    </div>
                    <div  className="container-fluid homeicons">
                        <div  className="row">
                            <h2></h2>
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default Dashboard;
