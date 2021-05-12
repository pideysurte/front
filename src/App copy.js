import React from 'react';
import { BrowserRouter, Switch, Route,Link} from 'react-router-dom';
import Login from './components/login/Login';
import Forgot from './components/login/Forgot';
import Dashboard from './components/dashboard/Dashboard';
import PublicRoute from './Utils/PublicRoute';
import Category from './components/category';
import CategoryList from './components/category/list';
import SubCategory from './components/subcategory';
import SubCategoryList from './components/subcategory/list';
import Orders from './components/orders'
import Routes from './components/routescedy'
import RoutesList from './components/routescedy/list'
import PricesCustomdetail from './components/pricescustomdetail'
import PricesCustomdetailList from './components/pricescustomdetail/list'
import PricesCustom from './components/pricescustom'
import PricesCustomList from './components/pricescustom/list'
//import Notifications from './components/notification'
import UploadExcel from './components/uploadexcel'
import Advertising from './components/advertising'
import AdvertisingList from './components/advertising/list'
import ProductsCreate from './components/productscedi'
import ProductsList from './components/productscedilist'
import Comercial from './components/comercial'
import ComercialList from './components/comercial/list'
import Cediconfig from './components/configcedi'
import Establishments from './components/establishments/index'
import Establishmentslist from './components/establishments/list'
import Notifications from './components/notifications'
import Notificationslist from './components/notifications/list'
import user from './components/user/index'
import userlist from './components/user/list'
function App() {
  return (
    <div >
      <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <PublicRoute path="/forgot" component={Forgot} />
              <PublicRoute path="/dashboard" component={Dashboard} />
              <PublicRoute path="/category" component={Category} />  
              <PublicRoute path="/categorylist" component={CategoryList} />  
              <PublicRoute path="/subcategory" component={SubCategory} /> 
              <PublicRoute path="/subcategorylist" component={SubCategoryList} /> 
              <PublicRoute path="/orders" component={Orders} /> 
              <PublicRoute path="/routescedi" component={Routes} /> 
              <PublicRoute path="/routescedilist" component={RoutesList} /> 
              <PublicRoute path="/pricescustomdetail" component={PricesCustomdetail} /> 
              <PublicRoute path="/pricescustomdetaillist" component={PricesCustomdetailList} /> 
              <PublicRoute path="/pricescustom" component={PricesCustom} /> 
              <PublicRoute path="/pricescustomlist" component={PricesCustomList} /> 
              <PublicRoute path="/pricesload" component={PricesCustom} /> 
              <PublicRoute path="/notifications" component={Notifications} /> 
              <PublicRoute path="/uploadexcel" component={UploadExcel} /> 
              <PublicRoute path="/advertising" component={Advertising} /> 
              <PublicRoute path="/advertisinglist" component={AdvertisingList} /> 
              <PublicRoute path="/productscreate" component={ProductsCreate} /> 
              <PublicRoute path="/productslist" component={ProductsList} /> 
              <PublicRoute path="/comercial" component={Comercial} /> 
              <PublicRoute path="/comerciallist" component={ComercialList} /> 
              <PublicRoute path="/cediconfig" component={Cediconfig} />
              <PublicRoute path="/stablishmentslist" component={Establishmentslist} />  
              <PublicRoute path="/establishments" component={Establishments} />  
              <PublicRoute path="/orders" component={Orders} /> 
              <PublicRoute path="/notifications" component={Notifications} />  
              <PublicRoute path="/notificationslist" component={Notificationslist} /> 
              <PublicRoute path="/usercreate" component={user} /> 
              <PublicRoute path="/userlist" component={userlist} />                
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
