import React, {Fragment} from 'react';
import "./book-list-item.css";
const BookListItem = ({book})=>{
    const {title, author} = book;
    return <Fragment>
        <span>title: {title}</span>
        <span>author: {author}</span>
    </Fragment>
};

export default BookListItem;