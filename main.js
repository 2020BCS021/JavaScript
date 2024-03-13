
// document.querySelector("#open-nav-menu").addEventListener("click",function(){
//      alert("menu button clicked");
// });

const galleryImages=[
    
    {
        src:"./assets/gallery/image1.jpg",
         alt:"Thumbnail Image 1"
    },
    {  
       src:"./assets/gallery/image2.jpg", 
      alt:"Thumbnail Image 2"
    },

    { 
        src:"./assets/gallery/image3.jpg",
       alt:"Thumbnail Image 3"
    }
  
 
  
];

const products=[
    
        {
          title: "AstroFiction",
          author: "John Doe",
          price: 49.9,
          image: "./assets/products/img6.png"
        },
        {
          title: "Space Odissey",
          author: "Marie Anne",
          price: 35,
          image: "./assets/products/img1.png"
        },
        {
          title: "Doomed City",
          author: "Jason Cobert",
          price: 0,
          image: "./assets/products/img2.png"
        },
        {
          title: "Black Dog",
          author: "John Doe",
          price: 85.35,
          image: "./assets/products/img3.png"
        },
        {
          title: "My Little Robot",
          author: "Pedro Paulo",
          price: 0,
          image: "./assets/products/img5.png"
        },
        {
          title: "Garden Girl",
          author: "Ankit Patel",
          price: 45,
          image: "./assets/products/img4.png"
        }
      ]


// Menu Section
function menuHandler()
{
document.querySelector("#open-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});


document.querySelector("#close-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
}
// Temperature conversion

function celsiusToFahr(temperature)
{
  let fahr=(temperature*9/5)+32;
  return fahr;
}

// Greeting section
function greetingHandler()
{
    let currentHour=new Date().getHours();
    let greetingText;
    if(currentHour<12)
    {
        greetingText="Good Morning!";
    }
    else if(currentHour<19)
    {
        greetingText="Good afternoon!";
    }
    else if(currentHour<24)
    {
        greetingText="Good evening!";
    }
    else{
        greetingText="Welcome!";
    }
    
    
    
    const weatherCondition="Sunny";
    const userLocation="Rio de";
    let temperature=25;
    
    let celsiusText=`The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} C outside`;
    let fahrText=`The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} F outside`;
    
    document.querySelector("#greeting").innerHTML=greetingText;
    document.querySelector("p#weather").innerHTML=celsiusText;
    
    document.querySelector(".weather-group").addEventListener("click",function(e){
        if(e.target.id=="fahr")
        {
            document.querySelector("p#weather").innerHTML=fahrText;
        }
        else {
            document.querySelector("p#weather").innerHTML=celsiusText;
        }
    });
}
// Local time section

function clockHandler(){
    setInterval(function(){
        let localTime=new Date();
        
        document.querySelector("span[data-time=hours]").textContent=localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent=localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent=localTime.getSeconds().toString().padStart(2,"0");
        
        },1000);
}

// Gallary section

function galleryHandler()
{
    let mainImage = document.querySelector("#gallery > img");

    let thumbnails=document.querySelector("#gallery .thumbnails");
    
    mainImage.src = galleryImages[0].src;
    mainImage.alt=galleryImages[0].alt;
    
    
    galleryImages.forEach(function(image,index) {
        let thumb=document.createElement("img");
        thumb.src=image.src;
        thumb.alt=image.alt;
        thumb.dataset.arrayIndex=index;
        thumb.dataset.selected=index===1 ? true : false;
        
        thumb.addEventListener("click",function(e)
        {
           let selectedIndex =e.target.dataset.arrayIndex;
           let selectedImage=galleryImages[selectedIndex];
           mainImage.src = selectedImage.src;
           mainImage.alt=selectedIndex.alt;
          thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected=false;
          });
          e.target.dataset.selected=true;
    
        });
        thumbnails.appendChild(thumb);
     
    
    });
    
}

// product section

{/* <div class="product-item">
             <img src="./assets/products/img6.png" alt="AstroFiction">
             <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
             </div>
 </div>

 */}
function populateProducts(productList){

  let productSection=document.querySelector(".products-area");

  productSection.textContent="";
    // Run a loop through the products and create an HTML element (product-item) for each of them
    productList.forEach(function(product,index){
      // Create the Html element for the individual product
      let productElm=document.createElement("div");
      productElm.classList.add("product-item")

      // Create the product image
      let productImage=document.createElement("img");
      productImage.src=product.image;
      productImage.alt="Image for"+ product.title;
      
      // Create the product details section
      let productDetails=document.createElement("div");
       productDetails.classList.add("product-details");

      //  Create product title,author,pricetitle and price
      let productTitle=document.createElement("h3");
      productTitle.classList.add("product-title");
      productTitle.textContent=product.title;

      let productAuthor=document.createElement("p");
      productAuthor.classList.add("product-author");
      productAuthor.textContent=product.author;


      let priceTitle=document.createElement("p");
      priceTitle.classList.add("price-title");
      priceTitle.textContent=product.title;

      let productPrice=document.createElement("p");
      productPrice.classList.add("product-price");
      productPrice.textContent=product.price;

      

      // Append product details
      productDetails.append(productTitle);
      productDetails.append(productAuthor);
      productDetails.append(priceTitle);
      productDetails.append(productPrice);


      // Add all child HTML elements of the product
      productElm.append(productImage);
      productElm.append(productDetails);

      // Add complete individual product to the product section
      productSection.append(productElm);

  });
}

 function productsHandler()
 {
   
    let freeProducts=products.filter((item)=>{
        return !item.price || item.price<=0;
    });

    let paidProducts=products.filter((item)=>{
      return item.price>0;
  });
  populateProducts(products);

document.querySelector(".products-filter label[for=all] span.product-amount").textContent=products.length;
document.querySelector(".products-filter label[for=paid] span.product-amount").textContent=paidProducts.length;
document.querySelector(".products-filter label[for=free] span.product-amount").textContent=freeProducts.length;

let productFilter=document.querySelector(".products-filter");
productFilter.addEventListener("click",function(e){
  if(e.target.id ==="all")
  {
    populateProducts(products);
  }
  else if(e.target.id ==="paid")
  {
    populateProducts(paidProducts);
  }
  else if(e.target.id ==="free"){
    populateProducts(freeProducts);
  }
});
   
 }
 
 function footerHandler()
 {
  let currentYear=new Date().getFullYear();
  document.querySelector("footer").textContent=`${currentYear} - All rights reserved`;
  
 }
   

// page load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();

