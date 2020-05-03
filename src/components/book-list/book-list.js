import React, {Component} from 'react';
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookstoreService} from "../hoc";
import {fetchBooks, bookAddedToCart} from "../../actions";
import {compose} from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddToCart})=>{
    return <ul className={"book-list"}>
        {books.map((book)=>{
            return(<li key={book.id}>
                    <BookListItem
                        onAddToCart={()=>{onAddToCart(book.id)}}
                        book={book}
                    />
                </li>)
        })}
    </ul>
};

class BookListContainer extends Component{

    componentDidMount() {
        //1.receive data from service (аля апи fetch)
        /*const {BookStoreService, booksLoaded, booksRequested, booksError} = this.props;*/
        /*const data = BookStoreService.getBooks(); //аля вызов апи*/
       /* booksRequested();
        BookStoreService.getBooks()
            .then((data)=>{
                booksLoaded(data)
            })
            .catch((err)=>{
                booksError(err)
            })*/
        //2. dispatch actions to store

        this.props.fetchBooks();
    }
    render(){
        const {books, loading, error, onAddToCart} = this.props;
        if (loading) return <Spinner/>;
        if (error) return <ErrorIndicator/>;
        return <BookList
                    books={books}
                    onAddToCart={onAddToCart}>
               </BookList>


    }
}


const mapStateToProps=(state)=>{
    return{
        books: state.bookList.books,
        loading: state.bookList.loading,
        error: state.bookList.error
    }
};
const mapDispatchToProps = (dispatch, ownProps)=>{
    const {BookStoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(BookStoreService, dispatch),
        fetchBooks2: ()=>dispatch( fetchBooks(BookStoreService)() ),
        onAddToCart: (id)=>{dispatch(bookAddedToCart(id))}

        /*fetchBooks: ()=>{
            dispatch(booksRequested());
            BookStoreService.getBooks()
                .then((data)=>{
                    dispatch(booksLoaded(data))
                })
                .catch((err)=>{
                    dispatch(booksError(err))
                })
        }*/
       /* booksLoaded: (newBooks)=>{
            dispatch( booksLoaded(newBooks));
        },
        booksRequested: ()=>{
            dispatch(booksRequested())
        },
        booksError: (err)=>{
            dispatch(booksError(err))
        }*/
    }
};
export default compose(
        withBookstoreService(),
        connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);

//export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
