class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, ajusteColisao) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.yInicial = height - this.altura - variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 2.8;

        this.quantidadePulo = 0;
        this.alturaPulo = -35;
        this.ajusteColisao = ajusteColisao;
    }

    pula() {
        this.velocidadeDoPulo = this.alturaPulo;
        this.quantidadePulo++;
    }

    podePular() {
        return this.quantidadePulo < 2;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.y > this.yInicial) { // quer dizer pés no chão
            this.y = this.yInicial;
            this.velocidadeDoPulo = 0;
            this.quantidadePulo = 0;
        }
    }

    estaColidindo(inimigo) {
        
        const precisao = .7;

        noFill();
        rect(
            this.x + this.ajusteColisao.largura,
            this.y + this.ajusteColisao.altura,
            this.largura * (precisao + this.ajusteColisao.precisaoLargura),
            this.altura * (precisao + this.ajusteColisao.precisaoAltura)
        );
        rect(
            inimigo.x + inimigo.ajusteColisao.largura,
            inimigo.y + inimigo.ajusteColisao.altura,
            inimigo.largura * (precisao + inimigo.ajusteColisao.precisaoLargura),
            inimigo.altura * (precisao + inimigo.ajusteColisao.precisaoAltura)
        );

        const colisao = collideRectRect(
            this.x + this.ajusteColisao.largura,
            this.y + this.ajusteColisao.altura,
            this.largura * (precisao + this.ajusteColisao.precisaoLargura),
            this.altura * (precisao + this.ajusteColisao.precisaoAltura),
            inimigo.x + inimigo.ajusteColisao.largura,
            inimigo.y + inimigo.ajusteColisao.altura,
            inimigo.largura * (precisao + inimigo.ajusteColisao.precisaoLargura),
            inimigo.altura * (precisao + inimigo.ajusteColisao.precisaoAltura)
        );

        return colisao;
    }

}