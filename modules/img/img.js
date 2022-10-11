export class Img {
    
    constructor(){
        this.Tile = 'Tile.png';
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