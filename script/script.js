// Add active class to the current button (highlight it)
const header = document.getElementById("myDIV");
let btns = header.querySelectorAll(".btr");

btns.forEach(function(btn){
    btn.addEventListener("click", function (btn) {
      if(btn.target.tagName ==="BUTTON"){
            btns.forEach(function(btn){btn.className = ' btr',
            btn.style.flexGrow='1'})
            btn.target.classList.add('active')}
            btn.target.style.flexGrow='2'
    })
})
// col-2
//produt
let image = ["hotchoc.jpg"]

let hotbar = [
  { title: " اسپرسو دبل", price: "55.000 ", image: "./img/espresso.jpg" },
  { title: "موکا ", price: "75.000 ", image: "./img/cafe-mocha.png" },
  { title: "لاته ", price: "70.000 ", image: "./img/late.jpg" },
  { title: "آمریکانو ", price: "60.000 ", image: "./img/hotemerica.jpg" },
  { title: "هات چاکلت ", price: "70.000 ", image: "./img/hotchoc.jpg" },
  { title: "کارامل ماکیاتو ", price: "75.000 ", image: "./img/MACCHIATO.jpg" },
  { title: "وایت چاکلت ", price: "70.000 ", image: "./img/wihtechoc.jpg" },
  { title: "چای ماسالا ", price: "70.000 ", image: "./img/masala.jpg" },
  { title: "دمنوش ", price: "60.000 ", image: "./img/damnosh.jpg" },
  { title: "کیک شکلاتی ", price: "50.000 ", image: "./img/cake.jpg" },
];
let coldbar = [
  { title: "  آیتمی موجود نمی باشد", },


];
// تابع برای نمایش کالاهای 
function showcoldbar() {
  // پاک کردن محتوای قبلی
  var items = document.getElementById("items");
  items.innerHTML = "";
  // اضافه کردن کالاهای کفش به صفحه
  for (var i = 0; i < coldbar.length; i++) {
    var item = coldbar[i];
    var itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
  <div class="item-title">${item.title}</div>
  <div class="item-price">${item.price}</div>
  <img class="item-image" src="${item.image}">
`;
    items.appendChild(itemDiv);
  }
}
// تابع برای نمایش کالاهای 
function showhotbar() {
  // پاک کردن محتوای قبلی
  let items = document.getElementById("items");
  items.innerHTML = "";
  // اضافه کردن کالاهای لباس به صفحه
  hotbar.forEach(function(item){
    items.insertAdjacentHTML('beforeend',
    '<div class="item">'+
    '<img class="item-image" src="'+item.image+'"></img>'+
    '<div class="item-title">'+
    '<span>'+item.title+'</span>'+
    '<div class="price_svg">'+
    '<div class="item-price">'+item.price+'</div>'+
    '<img src="./img/svg/pricesvg.svg">'+
    '</div>'+
    '</div>'+
    '</div>')
  })

}






