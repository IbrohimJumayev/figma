const ul = document.querySelector('.container')

init()

async function init(){
  checkToken()

  const products = await showProducts()
  render(products)
  
}

function checkToken(){
  const token = localStorage.getItem('token')
  if (!token) {
    window.location.href = 'http://127.0.0.1:5500/login.html'
  }
}

async function showProducts(){
  const response = await fetch('https://fakestoreapi.com/products?')
  const products = response.json()
  return products
}






async function render(products){
  products.forEach(function(product){
    const li = document.createElement('li')

    const a = document.createElement('a')
    a.href = `http://127.0.0.1:5500/product.html?id=${product.id}`

    const img = document.createElement('img')
    const p = document.createElement('p')
    const price = document.createElement('strong')

    img.src = product.image
    p.textContent = product.title
    price.textContent =` ${product.price} $`

   
    ul.append(li)
    li.append(img)
    a.append(p)
    li.append(a)
    li.append(price)
  })
}



