import Img from "/modules/img/img.js";
import Isometric from "/modules/grid/grid.js";

const img = new Img();
const grid = new Isometric(5,5,
    [
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
        img.render(img.Tile),
    ]);
document.getElementById("hero").children[0].appendChild(grid.render());
