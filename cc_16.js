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

// Task 3 Fetch Products with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products'); // fetching the API data
      const products = await response.json(); // converting the data to a response or effect
      displayProducts(products); // calling the function
    } catch (error) {
          handleError(error); // catching error of products
        }
}