
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') 
    { 
        // $(".slider").append(Card("head","title","text"));
        // $(".slider").append(Card("head","title","text"));
        // $(".slider").append(Card("head","title","text"));


        $('.slick').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
                {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                }
            ]
            });
    }});



function Card(header,title,text){

    return `<div class="card slick-slide text-dark bg-light mb-3" style="width: 18rem;">
            <div class="card-header">${header}</div>
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            </div></div>`
}