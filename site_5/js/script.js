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
if (myCarts) {
myCarts.innerHTML = htmlStr;
}
// новости

var news = [
{  imgNewsUrl: "img/image45.png",
   nameNews: "Nikon Z6 II — большой обзор <br> беззеркальной <br> фотокамеры"},
   {  imgNewsUrl: "img/image46.png",
   nameNews: "Zhiyun Crane 2S — новая легенда или незначительное обновление?"},
   {  imgNewsUrl: "img/image47.png",
   nameNews: "6 лучших объективов Canon RF для видеосъемки"},
];

var MyNews = document.querySelector('.news');
var htmlNews = '';
for (var i=0; i<news.length; i++){
   htmlNews += `
   <li class="onenews">
        <ul>
            <li> <img src="${news[i].imgNewsUrl}" alt=""> </li>
            <li>${news[i].nameNews}</li>
        </ul>
   </li>
   `
}
if (MyNews) {
   MyNews.innerHTML = htmlNews;
   }


   
//heaer + footer

   var MyHeader = document.querySelector('header');
   var htmlHeader = '';
   for (var i=0; i<1; i++){
      htmlHeader += `
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Фон с прокруткой</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
        </div>
        <div class="offcanvas-body">
          <ul>
              <li>
                  <ul class="structura">
                  <li><img src="img/1001.png" alt=""></li>
                  <li>Фотоаппарат
                      <ul class="submenu_link">
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                      </ul>
                   </li>
                  </ul>
              </li>
              <li>
                  <ul class="structura">
                  <li><img src="img/1001.png" alt=""></li>
                  <li>Фотоаппарат
                  <ul class="submenu_link">
                      <li><a href="cards.html">Фотоаппарат</a></li>
                      <li><a href="cards.html">Фотоаппарат</a></li>
                      <li><a href="cards.html">Фотоаппарат</a></li>
                      <li><a href="cards.html">Фотоаппарат</a></li>
                      <li><a href="cards.html">Фотоаппарат</a></li>
                      <li><a href="cards.html">Фотоаппарат</a></li>
                      <li><a href="cards.html">Фотоаппарат</a></li>
                  </ul>
               </li>
                  </ul>
              </li>
              <li>
                  <ul class="structura">
                  <li><img src="img/1001.png" alt=""></li>
                  <li>Фотоаппарат
                      <ul class="submenu_link">
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                      </ul>
                   </li>
                  </ul>
              </li>
              <li>
                  <ul class="structura">
                  <li><img src="img/1001.png" alt=""></li>
                  <li>Фотоаппарат
                      <ul class="submenu_link">
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                      </ul>
                   </li>
                  </ul>
              </li>
              <li>
                  <ul class="structura">
                  <li><img src="img/1001.png" alt=""></li>
                  <li>Фотоаппарат
                      <ul class="submenu_link">
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                          <li><a href="cards.html">Фотоаппарат</a></li>
                      </ul>
                   </li>
                  </ul>
              </li>
          </ul>
        </div>
      </div>
      
              
              </div>
      <div class="containerr">
          
      <ul class="top">
          <li>Минск <img src="img/Rectangle 29.png" alt=""></li>
          <li>+375 (29) 7072788</li>
          <li>+375 (33) 7072788</li>
          <li>Фотомагазин</li>
          <li>Доставка и оплата</li>
          <li>Трейд-ин</li>
      </ul>
      <ul class="catalog">
          <li class="categ">
              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" 
              data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><ul><li> <img src="img/Line 17.png" alt="">
                  <img src="img/Line 17.png" alt="">
                  <img src="img/Line 17.png" alt=""> </li>
                  <li> Категории</li>
              </ul></button>
      
              
          </li>
          <li class="Photomarket">Photomarket</li>
          <li> <ul class="search">
              <li>Я ищу..</li>
              <li> <img src="img/search.png" alt=""> </li>
          </ul> </li>
          <li class="map-pin"><ul class="trig">
              <li><img src="img/map pin.png" alt=""></li>
              <li>Адрес</li>
          </ul></li>
          <li><ul class="trig">
              <li><img src="img/user.png" alt=""></li>
              <li>Войти</li>
          </ul></li>
          <li><ul class="trig">
              <li><img src="img/shopping cart.png" alt=""></li>
              <li>Корзина</li>
          </ul></li>
      </ul>
      </div>
      `
   }

   if (MyHeader) {
      MyHeader.innerHTML = htmlHeader;
      }




      var MyFooter = document.querySelector('footer');
      var htmlFooter = '';
      for (var i=0; i<1; i++){
         htmlFooter += `
    <div class="menu-bottom">
        <ul>
            <li> <a href="/site4/"><img src="img/home.png" alt=""></a></li>
            <li><button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><img src="img/menu.png" alt=""></button></li>
            <li><a href="/"><img src="img/shoppingcart.png" alt=""></a></li>
            <li><a href="/"><img src="img/user1.png" alt=""></a></li>
        </ul>
    </div>
    <div class="containerr">
        <ul class="bottommenu">
            <li>
                <ul>
                <li>фотоаппараты</li>
                <li>Объективы</li>
                <li>студийный свет</li>
                <li>аксессуары</li>
                <li>вспышки</li>
                <li>сумки</li>
                <li>печать</li>
                <li>гаджеты</li>
                </ul>
            </li>
            <li>
                <ul>
                <li>фотомагазин</li>
                <li>фотопрокат</li>
                <li>трейд-ин</li>
                <li>доставка</li>
                <li>как купить?</li>
                <li>способы оплаты</li>
                <li>гарантия и возврат</li>
                <li>сертификаты</li>
                <li>скидки</li>
                </ul>
            </li>
            <li>
                <ul>
                <li>о компании</li>
                <li>новости</li>
                <li>акции</li>
                <li>обзоры</li>
                <li>контакты</li>
                <li>вакансии</li>
                <li>партнеры</li>
                <li>отзывы</li>
                <li>карта сайта</li>
                </ul>
            </li>
            <li>
                <ul>
                <li>Контактная информация</li>
                <li>+375(29)10001010</li>
                <li>г.Минск ул. Победителей д 3 пом 41</li>
                <li>goto@gmail.com</li>
                <li class="pay">способы оплаты</li>
                <li><img src="img/Group15.png" alt=""></li>
                </ul>
            </li>
        </ul>
    </div>
         `
      }
   
      if (MyFooter) {
         MyFooter.innerHTML = htmlFooter;
         }
