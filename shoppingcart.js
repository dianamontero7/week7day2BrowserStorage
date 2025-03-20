console.log(JSON.parse(localStorage.getItem("cartItems")));


document.getElementById('bookList').innerHTML = JSON.parse(localStorage.getItem("cartItems"))
