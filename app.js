
       

const getData = async () =>{

    let getProductData = document.querySelector('.productInfo')
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    
    getProductData.addEventListener('submit', async (event) => {event.preventDefault()

    let response= await fetch(url, { 
      method: "POST",
    headers: {
       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2Mzg5NzExNjAsImV4cCI6MTY0MDE4MDc2MH0.3SKwQ-G9SnWsRu2xchG_dvAv8ZSkK4A6drgTORblK5E"
      , 'Content-Type': 'application/json',
    },

    body : JSON.stringify({
        name: `${event.target.name.value}`,
        description: `${event.target.description.value}`,
        brand: `${event.target.brand.value}`,
        imageUrl: `${event.target.imageUrl.value}`,
        price: `${event.target.price.value}`
    })
})
     
  let data = await response.json()
  console.log(data)
    
    })
   



}

window.onload = () => {
    getData()
}



// console.log(response)


