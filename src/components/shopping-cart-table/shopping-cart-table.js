import React from 'react';

const ShoppingCartTable = ()=>{
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
                <tr>
                    <td>1</td>
                    <td>Harry Potter and philosoper's stone</td>
                    <td>2</td>
                    <td>32$</td>
                    <td>
                        <button className={"btn btn-outline-danger btn-small"}><i className={"fa fa-trash-o"}></i></button>
                        <button className={"btn btn-outline-success btn-small"}><i className={"fa fa-plus-circle"}></i></button>
                        <button className={"btn btn-outline-warning btn-small"}><i className={"fa fa-minus-circle"}></i></button>

                    </td>
                </tr>
                </tbody>

            </table>
            <div className="total">Total: 32$</div>

        </div>
    )
};

export default ShoppingCartTable;