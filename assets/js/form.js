const form = document.getElementById("form");
const inputOne = document.getElementById("inpOne");
const inputTwo = document.getElementById("inpTwo");
const inputThree = document.getElementById("inpThree");
const inputFour = document.getElementById("inpFour");


function postForm(e) {
    e.preventDefault()

    axios.post("https://655c3039ab37729791aa01f6.mockapi.io/username/basket", {
        title: inputOne.value,
        description: inputTwo.value,
        price: inputThree.value,
        image: inputFour.value,
    })

        .then(res => {
            console.log(res);
            form.reset()
        })

}

form.addEventListener("submit", postForm)








const products=document.getElementById("products")

function getProducts(){
    
    axios.get(`https://655c3039ab37729791aa01f6.mockapi.io/username/basket`)
    .then(res=>{
        const data=res.data
        db=data;
        db.forEach(item=>{
            const box=document.createElement("div");
            box.className="col-4 content";
            box.innerHTML= `<img src="${item.image}" alt="img">
            <h2>${item.title}</h2>
            <h3>${item.description}</h3>
            <p>${item.price} $</p>
            <div class="basket"><button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
            <i class="fa-solid fa-heart" onclick="wishlist(${item.id})"></i></div>`
products.appendChild(box)

        })

    })
}
getProducts()



//localst
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
}


//local storage
function wishlist(id) {
    let heart = JSON.parse(localStorage.getItem("heart")) || []
    heart.push(db.find(item => item.id == id))
    localStorage.setItem("heart", JSON.stringify(heart))
}