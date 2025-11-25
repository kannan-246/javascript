
//=============FUNCTION TO EYE OPEN AND ClOSE===========
function openClose(){
    let open=document.getElementById("open");
    let close=document.getElementById("close");
    let passWord=document.getElementById("password")

    if(passWord.type==="password"){
        open.style.display="none";
        passWord.type="text";
        close.style.display="inline"
    }
    else{
        open.style.display="inline";
        passWord.type="password";
        close.style.display="none"
    }
}

//==========FUNCTION FOR PASSWORDVALIDATION=========== 
function passWordValidation(){
    let passWord=document.getElementById("password").value;
    let capital=document.getElementById("capital");
    let special=document.getElementById("special");
    let minimum=document.getElementById("minimum")
    let includesnumber=document.getElementById("includesnumber");

    //CAPITAL
    if(passWord==""){
        capital.innerHTML=""
    }
    else if(passWord.charAt(0)===passWord.charAt(0).toUpperCase()){
        capital.innerHTML="FIRST LETTER SHOULD BE CAPITAL"
        capital.style.color="green";
    }
    else{
        capital.innerHTML="FIRST LETTER SHOULD BE CAPITAL";
        capital.style.color="red"
    }

    //SPECIAL
    let specialChar=["!","@","#","$","%","^","&","*","(",")"];
    let specialCharIncludes=specialChar.some((s)=>{
        return passWord.includes(s);
    })
    if(passWord===""){
        special.innerHTML=""
    }
    else if(specialCharIncludes){
        special.innerHTML="INCLUDES ATLEAST ONE SPECIAL CHARACTER";
        special.style.color="green"
    }
    else{
        special.innerHTML="INCLUDES ATLEAST ONE SPECIAL CHARACTER";
        special.style.color="red"
    }

    // MINIMUM
    if(passWord===""){
        minimum.innerHTML=""
    }
    else if(passWord.length<8){
        minimum.innerHTML="MINIMUM 8 CHARACTERS";
        minimum.style.color="red"
    }
    else{
        minimum.innerHTML="MINIMUM 8 CHARACTERS";
        minimum.style.color="green"
    }

    //NUMBER
    let numb=[1,2,3,4,5,6,7,8,9,0];
    var numbIncludes=numb.some((n)=>{
        return passWord.includes(n)
    })
    if(passWord===""){
        includesnumber.innerHTML=""
    }
    else if(numbIncludes){
        includesnumber.innerHTML="INCLUDES ATLEAST ONE NUMBER";
        includesnumber.style.color="green"
    }
    else{
        includesnumber.innerHTML="INCLUDES ATLEAST ONE NUMBER";
        includesnumber.style.color="red"
    }
}

// ================FORM VALIDATION==============
function fun(event){
    event.preventDefault()
    let userName=document.getElementById("username").value;
    let passWord=document.getElementById("password").value;
    let result=document.getElementById("result");
    if(userName==="KannanAnusha" &&passWord==="Anusha@2027"){
        window.location.href = "./main.html";

    }
    else{
        result.innerHTML=`"PLEASE PROVIDE VALUABLE INPUT"`;
        result.style.color="red"
        }
}




    let data = [
    { id: 1,  img: "./assest/img/idli.jpeg",               name: "idli",               price: 20 },
    { id: 2,  img: "./assest/img/dosa.jpg",                name: "Dosa",               price: 40 },
    { id: 3,  img: "./assest/img/pongal.jpeg",             name: "pongal",             price: 50 },
    { id: 4,  img: "./assest/img/idiyappam.jpeg",          name: "Idiyappam",          price: 50 },
    { id: 5,  img: "./assest/img/chapati.jpeg",            name: "Chappati",           price: 50 },
    { id: 6,  img: "./assest/img/puri.jpeg",               name: "puri",               price: 50 },
    { id: 7,  img: "./assest/img/chola puri.jpeg",         name: "chola puri",         price: 90 },
    { id: 8,  img: "./assest/img/parotta.jpeg",            name: "parotta",            price: 50 },
    { id: 9,  img: "./assest/img/chilli parotta.jpeg",     name: "chilli parotta",     price: 120 },
    { id: 10, img: "./assest/img/kaima parotta.jpeg",      name: "kaima parotta",      price: 120 },
    { id: 11, img: "./assest/img/meals.jpeg",              name: "meals",              price: 150 },
    { id: 12, img: "./assest/img/veg friedrice.jpeg",      name: "veg friedrice",      price: 120 },
    { id: 13, img: "./assest/img/mushroom friedrice.jpeg", name: "mushroom friedrice", price: 150 },
    { id: 14, img: "./assest/img/panner friedrice.jpeg",   name: "paneer friedrice",   price: 150 },
    { id: 15, img: "./assest/img/gopi friedrice.jpeg",     name: "gopi friedrice",     price: 150 },
    { id: 16, img: "./assest/img/veg biriyani.jpeg",       name: "veg Biriyani",       price: 120 },
    { id: 17, img: "./assest/img/mushroom biriyani.jpeg",  name: "mushroom biriyani",  price: 150 },
    { id: 18, img: "./assest/img/panner biriyani.jpeg",    name: "panner biriyani",    price: 150 },
    { id: 19, img: "./assest/img/gopi biriyani.jpeg",      name: "gopi biriyani",      price: 150 },
    { id: 20, img: "./assest/img/apple juice.jpeg",        name: "apple",              price: 50 },
    { id: 21, img: "./assest/img/orange juice.jpeg",       name: "orange",             price: 40 },
    { id: 22, img: "./assest/img/pomogrante juice.jpeg",   name: "pomogrnate",         price: 50 },
    { id: 23, img: "./assest/img/muskmelon juice.jpeg",    name: "musk melon",         price: 30 },
    { id: 24, img: "./assest/img/pine apple juice.jpeg",   name: "pine apple",         price: 30 },
    { id: 25, img: "./assest/img/papaya juice.jpeg",       name: "papaya",             price: 30 },
];

  

  

function DisplayPrdct(){
    let Row1=document.getElementById("Row1");
    let content=''
    data.map((v)=>{
    content+=`
     <div class="col-lg-4 col-12">
        <div class="card mt-3" id="card-mobile" data-aos="fade-down" data-aos-duration="2000">
        <img src="${v.img}" alt="" height="220px" >
        <div class="card-body">
        <h5 class="text-center">${v.name}</h5>
        <p><b>PRICE:</b> ${v.price}</p>
        <button class="btn btn-primary w-100" onclick="AddToCart(${v.id})">ADD TO CART</button>
        </div>
        </div>
         </div>
    `
    
})
Row1.innerHTML=content
}
DisplayPrdct()




let cart=[];
let count=0;
let total=0;

// cartcount

function CartCount(){
    let cartCount=document.getElementById("count");
    if(cart.length==0){
        cartCount.innerHTML=0
    }
    else{
        cartCount.innerHTML=count;
    }   
}

// add to cart
function AddToCart(productID){
    var product = data.find(a => a.id === productID)
    var existingProduct = cart.find(a => a.id === productID)

    if(existingProduct){
        product.quantity++
    }
    else{
        product.quantity = 1
        cart.push(product)
    }

    alert(`${product.name} "SUCCESSFULLY ADDED TO CART"`)
    DisplayCart(cart)

    count++
    CartCount()
    total=total+ Number(product.price);
    document.getElementById("totalprice").innerHTML=`TotalPrice: ${total}`
}


//  FUNCTION TO DISPLAY CARTITEMS


function DisplayCart(gettingCart){
    let result=document.getElementById
    ("addedCarts")
    let content3="";
    if(cart.length==0){
        content3=`<td colspan="7" class="text-center">YOUR CART IS EMPTY</td>`
    }
    else{
            gettingCart.map((c)=>{
            content3+=`<tr id="modal-image">
              <td><img src="${c.img}" alt="" height="60px"></td>
              <td>${c.name}</td>
              <td>${c.price}</td>
              <td>${c.quantity}</td>
              <td><button class="btn btn-danger" onclick="RemoveCart(${c.id})" id="removeId">REMOVE CART</button></td>
            </tr>`
        
       
    })
    }
    
    result.innerHTML=content3;
}
DisplayCart(cart)


// removeItems

function RemoveCart(removeId){
    let sameQuantity = cart.find((s) => {
        return s.id == removeId
    });

    if (sameQuantity.quantity > 1) {
        sameQuantity.quantity--;
        total = total - Number(sameQuantity.price);
        count--; 
    } else {
        total = total - Number(sameQuantity.price);
        cart = cart.filter((r) => {
            return r.id != removeId
        });
        count--;  
    }
    DisplayCart(cart);
    CartCount();
    document.getElementById("totalprice").innerHTML = `TotalPrice: ${total}`;
}
    
// searching filter

function SearchFilter(){
    let userInput=document.getElementById("search").value.toLowerCase();
    let foods=data.filter((d)=>{
        return d.name.toLowerCase().includes(userInput);
    })
      DisplaySearch(foods)   
}

//  FUNCTION TO DISPLAY FILTER SEARCH
function DisplaySearch(products){
    let content4="";
    let searchResult=document.getElementById("searchDisplay");
    products.map((p)=>{
        content4+=`
        <div class="col-lg-4 col-12">
        <div class="card mt-3" data-aos="fade-down" data-aos-duration="2000">
        <img src="${p.img}" alt="" height="220px" >
        <div class="card-body">
        <h5 class="text-center">${p.name}</h5>
        <p><b>PRICE:</b> ${p.price}</p>
        <button class="btn btn-primary w-100" onclick="AddToCart(data,${p.id})">ADD TO CART</button>
        </div>
        </div>
         </div>
    `
    })
    searchResult.innerHTML=content4;

}








