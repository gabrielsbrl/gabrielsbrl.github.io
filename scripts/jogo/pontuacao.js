class Pontuacao {

    constructor() {
        this.pontos = 0;
    }

    exibe() {
        fill('#fff');
        textSize(50);
        text(parseInt(this.pontos), 100, 50);
    }

    adicionarPonto() {
        this.pontos = this.pontos + .2;
    }

}