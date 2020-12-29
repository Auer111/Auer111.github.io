
var body = document.body;
var slider = document.querySelector(".slider");
var rope = document.querySelector(".rope");
var claw = document.querySelector(".claw");

function showCoords(x,y) {
    var x = x - 40;
    var y = y - 40;
    slider.style.left = x +"px";
    rope.style.left = x +"px";
    rope.style.height = (y -40) +"px";
    claw.style.left = x +"px";
    claw.style.top = y +"px";
}
function clicked(event){
    showCoords(event.clientX,event.clientY);
  }

body.addEventListener('touchmove', function(e) {
    showCoords(e.touches[0].clientX,e.touches[0].clientY);
}, false);


  

// document.addEventListener('readystatechange', event => {
//     if (event.target.readyState === 'complete') 
//     { 
//         // $(".slider").append(Card("head","title","text"));
//         // $(".slider").append(Card("head","title","text"));
//         // $(".slider").append(Card("head","title","text"));


//         $('.slick').slick({
//             centerMode: true,
//             centerPadding: '60px',
//             slidesToShow: 3,
//             responsive: [
//                 {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 3
//                 }
//                 },
//                 {
//                 breakpoint: 480,
//                 settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 1
//                 }
//                 }
//             ]
//             });
//     }});



function Card(header,title,text){

    return `<div class="card slick-slide text-dark bg-light mb-3" style="width: 18rem;">
            <div class="card-header">${header}</div>
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            </div></div>`
}