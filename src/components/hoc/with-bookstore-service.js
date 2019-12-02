import React from 'react';
import {BookStoreServiceConsumer} from "../bookstore-service-context";

const withBookstoreService = ()=> (WrappedComponent)=>{

    return (props)=>{
        return <BookStoreServiceConsumer>
            {(BookStoreService) =>{
                return <WrappedComponent {...props} BookStoreService={BookStoreService}/>
            }}
        </BookStoreServiceConsumer>
    }
};

export {withBookstoreService}