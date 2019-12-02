import React from 'react';
import {withBookstoreService} from "../hoc";
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';
import ShopHeader from "../shop-header";

class App extends  React.Component{
    render(){
        /*console.log(this.props.bookStoreService.getBooks());*/
        return  <main role={"main"} className={"container"}>
            <ShopHeader numItems={2} total={"32$"}/>
            <Switch>
                <Route path={"/"} component={HomePage} exact={true}/>
                <Route path={"/cart"} component={CartPage}/>
                <div className={"App"}>App</div>
            </Switch>
        </main>
    }
}
export default withBookstoreService()(App);