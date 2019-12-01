const initialState = {
    books: [{
        id: 1,
        title: "Harry Potter and philosoper's stone",
        author: 'Joan Rowling'
    },
        {
            id: 2,
            title: 'Harry Potter and the chamber of secrets',
            author: 'Joan Rowling'
        }]
};

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }

};

export default reducer;