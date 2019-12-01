import React from 'react';
import {withBookstoreService} from "../hoc";
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';
class App extends  React.Component{
    render(){
        /*console.log(this.props.bookStoreService.getBooks());*/
        return <Switch>
            <Route path={"/"} component={HomePage} exact={true}/>
            <Route path={"/cart"} component={CartPage}/>
            <div className={"App"}>App</div>
        </Switch>
    }
}
export default withBookstoreService(App);