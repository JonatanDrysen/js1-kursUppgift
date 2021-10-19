const url = 'https://mock-data-api.firebaseio.com/webb21/products.json';
const productsContainerElement = document.getElementById('products-container');
const totalSpent = document.getElementById('total-spent');
let sum = 0;

function renderProductList(productData) {
  productData.forEach((productItem) => {
    renderProductItem(productItem);
  });
}

function renderProductItem(productItem) {
  const productItemElement = document.createElement('div');

  productItemElement.append(
    renderItemName(productItem),
    renderItemImage(productItem),
    renderItemDescription(productItem),
    renderItemPrice(productItem),
    renderItemRating(productItem),
    renderItemStock(productItem)
  );

  productsContainerElement.appendChild(productItemElement);
}

function renderItemName(productItem) {
  const productNameElement = document.createElement('h1');
  productNameElement.innerText = productItem.name;
  return productNameElement;
}

function renderItemImage(productItem) {
  const productImageElement = document.createElement('img');
  productImageElement.src = productItem.images[0].src.small;
  productImageElement.alt = productItem.images[0].alt;
  productImageElement.addEventListener('click', function () {
    buyItem(productItem);
  });

  return productImageElement;
}

function renderItemDescription(productItem) {
  const productDescriptionElement = document.createElement('p');
  productDescriptionElement.innerText = productItem.description;
  return productDescriptionElement;
}

function renderItemPrice(productItem) {
  const productPriceElement = document.createElement('p');
  productPriceElement.innerText = `Price: ${productItem.price} dabloons`;
  return productPriceElement;
}

function renderItemRating(productItem) {
  const productRatingElement = document.createElement('p');
  productRatingElement.innerText = `Rating: ${productItem.rating} stars`;
  return productRatingElement;
}

function renderItemStock(productItem) {
  const productStockElement = document.createElement('p');
  productStockElement.innerText = `Stock: ${productItem.stock} in stock`;
  return productStockElement;
}

function buyItem(productItem) {
  let itemPrice = productItem.price;
  sum += itemPrice;
  totalSpent.innerText = `Total: ${sum} dabloons`;
}

fetch(url)
  .then((res) => res.json())
  .then((productData) => renderProductList(productData));
