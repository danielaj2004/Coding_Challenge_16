// Task 2 Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
.then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching Products'); // error input
    }
    return response.json(); // change data to a response or effect
    })
    .then((products) => {
        products.forEach((product) => console.log(product.fields.name)); // logging products by name
    })
    .catch((error) => {
        console.error('Error Fetching Products:', error); // catching error of products
    });
}