
  
const id = new URLSearchParams(location.search).get('eventId')
console.log(id)


const getProducts = async () => {

    try{
        const url = 'https://striveschool-api.herokuapp.com/api/product/'
        let response = await fetch(url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2Mzg5NzExNjAsImV4cCI6MTY0MDE4MDc2MH0.3SKwQ-G9SnWsRu2xchG_dvAv8ZSkK4A6drgTORblK5E"
               }
        })

        let products = await response.json()
        showProducts(products)
        console.log(products)
    } catch (error){
        console.log(error)
    }
}

// DOM MANIPULATION _______DISPLAY NEW PRODUCTS

const showProducts = (data) => {

 let newItem = document.querySelector('#products')
 console.log(newItem)

 data.forEach(item => {

    let addItem = document.createElement('div')
    addItem.classList.add('col-sm-12', 'col-md-6', 'col-lg-3', 'mb-5', 'mx-2')

    addItem.innerHTML = `
    <div class="card border-info mb-3" style="width: 18rem; border-radius: 5%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;">
            <img src=${item.imageUrl} class="card-img-top" alt="..." style="width:100%;">
            <div class="card-body">
              <h5 class="card-title font-weight-bold">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Brand : ${item.brand}</li>
              <br>
              <li class="list-group-item">Price : ${item.price}</li>
            </ul>
            <div class="card-body">
                <a class='btn  mr-5' style="background-color:#59d9bf">Add to Cart</a>
                <a class='btn btn-warning'>Buy</a>
                <a href='/details.html?id=${item._id}'>Edit</a>
            </div>
        </div>`

        newItem.appendChild(addItem)
     
 });

}

window.onload = () => {
getProducts()

}
