import React from 'react';
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";
const HomePage = ()=>{

    return <div>
        <h3>Home Page</h3>
    <BookList/>
        <ShoppingCartTable/>

    </div>
};

export default HomePage;