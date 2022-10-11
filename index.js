import Img from "/modules/img/img.js";
import Isometric from "/modules/grid/grid.js";

const img = new Img();
const grid = new Isometric(5,5,
    [
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(img.Calendar), click: ()=>{ window.location.href = "google.com"; }},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
        { img: img.render(), click: ()=>{}},
    ]);
document.getElementById("hero").children[0].appendChild(grid.render());
