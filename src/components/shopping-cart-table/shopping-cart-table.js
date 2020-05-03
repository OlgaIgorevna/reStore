import React from 'react';
import {connect} from 'react-redux';
import {bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from "../../actions";


const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete })=>{


    const renderRow=(item, idx)=>{
        const {id, title, count, total} = item;
        return <tr key={id}>
            <td>{idx +1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
                <button
                    onClick={()=>onDecrease(id)}
                    className={"btn btn-outline-warning btn-small"}>
                    <i className={"fa fa-minus-circle"}></i>
                </button>
                <button
                    onClick={()=>onIncrease(id)}
                    className={"btn btn-outline-success btn-small"}>
                    <i className={"fa fa-plus-circle"}></i>
                </button>
                <button
                    onClick={()=>onDelete(id)}
                    className={"btn  btn-outline-danger  btn-small"}>
                    <i className={"fa fa-trash-o"}></i>
                </button>

            </td>
        </tr>
    }


    return(
        <div className={"shopping-cart-table"}>
            <h3>Your order</h3>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                {
                    items.map((item, idx)=>{
                        return renderRow(item,idx)
                    })

                }

                    {/*<tr>
                        <td>1</td>
                        <td>Harry Potter and philosoper's stone</td>
                        <td>2</td>
                        <td>32$</td>
                        <td>
                            <button className={"btn btn-outline-danger btn-small"}><i className={"fa fa-trash-o"}></i></button>
                            <button className={"btn btn-outline-success btn-small"}><i className={"fa fa-plus-circle"}></i></button>
                            <button className={"btn btn-outline-warning btn-small"}><i className={"fa fa-minus-circle"}></i></button>

                        </td>
                    </tr>*/}
                </tbody>

            </table>
            <div className="total">Total: {total}</div>

        </div>
    )
};
const mapStateToProps=(state)=>{
    return {
       items: state.shoppingCart.cartItems,
       total: state.shoppingCart.orderTotal
    }
}
const mapDispatchToProps=(dispatch, ownProps)=>{
    return{
        onIncrease: (id)=>{
            dispatch(bookAddedToCart(id));
        },
        onDecrease: (id)=>{
           dispatch(bookRemovedFromCart(id))
        },
        onDelete: (id)=>{
            dispatch(allBooksRemovedFromCart(id))
        },
    }
};
const mapDispatchToProps2= {
        onIncrease: bookAddedToCart,

        onDecrease: bookRemovedFromCart,

        onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);