import Img from "/modules/img/img.js";
import Isometric from "/modules/grid/grid.js";

const img = new Img();
const grid = new Isometric(5,5,
    [
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Farmhouse),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
    ]);
document.getElementById("hero").children[0].appendChild(grid.render());
