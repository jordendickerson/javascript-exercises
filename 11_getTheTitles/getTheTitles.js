const getTheTitles = function(books) {
    let bookArray = [];
    books.map(book => bookArray.push(book.title));
    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
