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
        img.render(img.Barn),
        img.render(img.Wheat_Scarecrow),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Farmhouse),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Grass),
        img.render(img.Farmhouse),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Farmhouse),
        img.render(img.Wheat),
        img.render(img.Wheat),
        img.render(img.Wheat),
    ]);
document.getElementById("hero").appendChild(grid.render());
