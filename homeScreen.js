class HomeScreen{

    constructor(){

        this.button = createButton('Start');
        this.title = createElement('h2','Welcome to ChemXpert! Dazzle us with your Chemistry knowledge!')
        this.options = createButton('Settings');
        this.themes = createButton('Click to view themes')
        this.coins = createButton('Click to show/hide coins')

    }

    hide(){

        this.title.hide();
        this.button.hide();
        this.options.hide();
        this.themes.hide();
        this.coins.hide();

    }

    display(){

        this.title.position(displayWidth/2 - 150, 100);
        this.button.position(displayWidth/2, displayHeight/2);
        this.options.position(displayWidth - 50, 50);

        this.options.mousePressed(()=> {

            this.themes.show();
            this.themes.position(displayWidth - 75, 75);

            this.coins.show();
            this.coins.position(displayWidth - 100, 100);
        });

        this.button.mousePressed(()=> {

            gameState = 1;

        });

    }

}