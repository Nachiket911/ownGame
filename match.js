class Match{

    constructor(){

        this.mrAtom = createSprite(100, 100, 20, 20);
        this.elements = [];
        this.symbols  = [];

    }

    createElements(){

        var elem, yPos = displayHeight/2 - 100, sym;

        for(var i =0; i<=5; i++){

            elem = createSprite(20, yPos, 20, 20);
            this.elements.push(elem);

            yPos += 30;

        }

        yPos = displayHeight/2 - 100

        for(var i =0; i<=5; i++){

            sym = createSprite(60, yPos, 20, 20);
            this.symbols.push(sym);

            yPos += 30;

        }

    }

}