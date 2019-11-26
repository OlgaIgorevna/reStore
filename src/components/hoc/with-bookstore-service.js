import React from 'react';
import {BookStoreServiceConsumer} from "../bookstore-service-context";

const withBookstoreService = (WrappedComponent)=>{

    return (props)=>{
        return <BookStoreServiceConsumer>
            {(bookStoreService) =>{
                return <WrappedComponent {...props} bookStoreService={bookStoreService}/>
            }}
        </BookStoreServiceConsumer>
    }
};

export default withBookstoreService;