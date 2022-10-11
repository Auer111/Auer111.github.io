export class Img {
    
    constructor(){
        this.Barn = 'Barn.png';
        this.Farmhouse = 'Farmhouse.png';
        this.Grass = 'Grass.png';
        this.Water = 'Water.png';
        this.Wheat_Scarecrow = 'Wheat_Scarecrow.png';
        this.Wheat = 'Wheat.png';
    }

    url(name){
        return `/modules/img/${name}`;
    }

    render(name){
        let img = document.createElement('img');
        img.src = `/modules/img/${name}`;
        return img;
    }
    
}

export default Img;