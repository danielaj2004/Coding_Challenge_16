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

// Task 4 Display the Products
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clears prior content
  
    products.slice(0, 5).forEach((product) => {
      const { name, price, image } = product.fields; // product fields
  
      const productCards = document.createElement('div'); // Creating the product Cards
      productCards.setAttribute('class','product-card');
  
      const productName = document.createElement('h2'); // creating product name
      productName.setAttribute('class', 'product-name');
      productName.textContent = product.fields.name;
  
      const productPrice = document.createElement('p'); // creating product price
      productPrice.setAttribute('class', 'product-price' );
      productPrice.textContent = `$${(price/100).toFixed(2)}`;
  
      const productImage = document.createElement('img'); // creating product image
      productImage.src = image[0].url;
      productImage.alt = name;
  
      productCards.appendChild(productName); // appending product name
      productCards.appendChild(productPrice); // appending price
      productCards.appendChild(productImage); // // appending image

      container.appendChild(productCards); // appending product cards to a container
    });
  }

  // Task 5 Reusable Error Handler
  function handleError(error) {
    console.error('Error Occurred:', error.message); // resuable error message
  }

  //Task 6 Call Your Fetch Functions
  fetchProductsThen();
  fetchProductsAsync();