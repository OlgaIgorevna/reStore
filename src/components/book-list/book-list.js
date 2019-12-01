import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';

class BookList extends Component{
    componentDidMount() {
    }

    render(){
        const {books} = this.props;
        return(
            <ul>
                {books.map((book)=>{

                    return(<li key={book.id}><BookListItem book={book}/></li>)
                })}

            </ul>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        books: state.books
    }
};
export default connect(mapStateToProps)(BookList);