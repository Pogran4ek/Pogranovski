var carts = [
    {
    imgUrl: "img/a8e639bfb5599eaa6651d39aa3b45f0a1.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 },
 {
    imgUrl: "img/11.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 },
 {
    imgUrl: "img/12.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
 {
    imgUrl: "img/13.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
 {
    imgUrl: "img/14.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
 {
    imgUrl: "img/15.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
 {
    imgUrl: "img/16.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
 {
    imgUrl: "img/17.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
 {
    imgUrl: "img/18.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
 {
    imgUrl: "img/19.png",
    title: "Canon EOS 5D Mark IV Body",
    price: "4 240 р",
    priceOld: "5 400 р"
 }, 
];

var myCarts = document.querySelector('.productsale');
var htmlStr = '';

for(var i=0; i<carts.length; i++){
    htmlStr += `
    <ul class="oneproduct">
    <li class="imageprod"><img src="${carts[i].imgUrl}" alt=""></li>
    <li> <ul>
        <li>${carts[i].price}</li>
        <li>${carts[i].priceOld}</li>
    </ul></li>
    <li>${carts[i].title}</li>
</ul> `

                
}

myCarts.innerHTML = htmlStr;
