// Array of book objects
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction" },
    { title: "Educated", author: "Tara Westover", category: "non-fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "fantasy" },
    { title: "Dune", author: "Frank Herbert", category: "science-fiction" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "fiction" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "non-fiction" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "fantasy" },
    { title: "Foundation", author: "Isaac Asimov", category: "science-fiction" },
    { title: "The Book Thief", author: "Markus Zusak", category: "historical-fiction" },
    { title: "The Da Vinci Code", author: "Dan Brown", category: "mystery" }
];

const categories = ["mystery", "historical-fiction", "science-fiction", "fantasy", "non-fiction", "fiction"]

// Function to render books on the page
function renderBooks(booksToRender) {
    let bookListHTML = document.getElementById('bookList');
    bookListHTML.innerHTML = ''; // Clear existing books
    for (let i = 0; i < booksToRender.length; i++) {
        let book = booksToRender[i];
        let bookHTML = document.createElement('div');
        bookHTML.className = "book";

        let bookTitleHTML = document.createElement("h3");
        bookTitleHTML.innerText = book.title;

        let bookAuthorHTML = document.createElement("p");
        bookAuthorHTML.innerText = "Author: " + book.author;


        let addToCartButtonHTML = document.createElement("button");
        addToCartButtonHTML.className = "add-to-cart";
        addToCartButtonHTML.innerText = "Add to Cart";
        addToCartButtonHTML.addEventListener("click", function() {
            const cartList = document.getElementById('cart-list');
            const newCartItem = document.createElement('li');
            newCartItem.className = "cart-item"
            newCartItem.textContent = book.title;
            cartList.appendChild(newCartItem);
        });

        bookHTML.appendChild(bookTitleHTML);
        bookHTML.appendChild(bookAuthorHTML);
        bookHTML.appendChild(addToCartButtonHTML);
        bookListHTML.appendChild(bookHTML);
    }
}

function renderCategories(categoriesToRender){
    let categoriesListHTML = document.getElementById("categoryList")

    let allCategoryHTML = document.createElement("li")
    allCategoryHTML.className = "category"
    allCategoryHTML.innerText = "ALL"
    allCategoryHTML.addEventListener('click', function() {
        renderBooks(books);
    });
    categoriesListHTML.append(allCategoryHTML)

    for(let i = 0; i < categoriesToRender.length; i++){
        let category = categoriesToRender[i]

        let categoryHTML = document.createElement("li")
        categoryHTML.className = "category"
        categoryHTML.innerText = category.toUpperCase()
        categoryHTML.addEventListener('click', function() {
            renderfilteredBooksByCategory(category, books);
        });

        categoriesListHTML.appendChild(categoryHTML)
    }
}   



// Function to filter books by category then render them on the page
function renderfilteredBooksByCategory(category, booksToRender) {
    let filteredBooks = []

    for (let i = 0; i < booksToRender.length; i++) {
        if (booksToRender[i].category == category) {
            filteredBooks.push(booksToRender[i]);
        }
    }

    //PART 1: create a for-loop that loops through booksToRender. 
            //for each book, if the book's category is equal to the category passed into this function, push it into the filteredBooks Array

    renderBooks(filteredBooks)
}


let clearCartButton =  document.getElementById("clear-cart")
clearCartButton.addEventListener("click", function(){
    let cartItems = document.getElementsByClassName("cart-item");
    
    // Loop through the cart items and remove each one
    // We need to go backwards in the loop because we are removing elements
    for (let i = cartItems.length - 1; i >= 0; i--) {
        cartItems[i].remove();
    }
})


// Initial rendering of categories
renderCategories(categories)

// Initial rendering of all books
renderBooks(books);

