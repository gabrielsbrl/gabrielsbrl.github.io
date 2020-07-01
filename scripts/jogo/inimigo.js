class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay, ajusteColisao) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade;
        this.delay = delay;
        this.x = width + this.delay;
        this.ajusteColisao = ajusteColisao;
    }

    move() {
        this.x = this.x - this.velocidade
        if (this.x < (-this.largura) - this.delay) {
            this.x = width
        }
    }
}