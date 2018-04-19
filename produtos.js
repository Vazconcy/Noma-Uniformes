var Produto = (function () {
    function Produto(_id, _nome, _categoria, _imagem, _preco) {
        this._id = _id;
        this._nome = _nome;
        this._categoria = _categoria;
        this._imagem = _imagem;
        this._preco = _preco;
    }
    ;
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (valor) {
            this._id = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            this._nome = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "categoria", {
        get: function () {
            return this._categoria;
        },
        set: function (valor) {
            this._categoria = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "imagem", {
        get: function () {
            return this._imagem;
        },
        set: function (valor) {
            this._imagem = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (valor) {
            this._preco = valor;
        },
        enumerable: true,
        configurable: true
    });
    return Produto;
}());
var Produtos = (function () {
    function Produtos() {
        this._listaProdutos = [];
        this._listaCategorias = [];
        this._id = 0;
        this._filterCategoria = "Todas";
    }
    Produtos.prototype.insereCard = function (produto) {
        var listaCards = document.getElementById('listaProdutosView');
        if (produto == null) {
            listaCards.innerHTML = '';
        }
        else {
            listaCards.innerHTML += "\n                      <div class=\"col-sm-3\">\n                        <div class=\"card\">\n                        <img class=\"card-img-top img-fluid\" src=\"" + produto.imagem + "\" alt=\"" + produto.nome + "\">\n                        <div class=\"card-body\">\n                          <h4 class=\"card-title\">" + produto.nome + "</h4>\n                          <p class=\"card-text\">" + produto.categoria + "</p>\n                        </div>\n                        <div class=\"card-footer text-right bg-primary \">\n                          <small class=\"text-white font-weight-bold h2\"><em>R$ " + produto.preco + "</em></small>\n                        </div>\n                        </div>\n                      </div>\n        ";
        }
    };
    Produtos.prototype.insereOption = function (nomeCategoria) {
        var select = document.getElementById('selectCategoria');
        select.add(new Option(nomeCategoria, nomeCategoria));
    };
    Produtos.prototype.adicionar = function (form) {
        var produto = new Produto(++this._id, form.elements.nome.value, form.elements.categoria.value, form.elements.imagem.value, parseFloat(form.elements.preco.value));
        this._listaProdutos.push(produto);
        this.insereCard(produto);
        if (this._listaCategorias.indexOf(produto.categoria) < 0) {
            this._listaCategorias.push(produto.categoria);
            this.insereOption(produto.categoria);
        }
    };
    Produtos.prototype.selecaoCategoria = function (select) {
        this._filterCategoria = select.value;
        this.pesquisar(document.getElementById('pesquisar'));
    };
    Produtos.prototype.pesquisar = function (input) {
        //Limpar a tela
        this.insereCard(null);
        for (var _i = 0, _a = this._listaProdutos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (this._filterCategoria == "Todas") {
                if (parseInt(input.value) == produto.id || produto.nome.indexOf(input.value) >= 0 || produto.categoria.indexOf(input.value) >= 0) {
                    this.insereCard(produto);
                }
            }
            else {
                if ((parseInt(input.value) == produto.id || produto.nome.indexOf(input.value) >= 0) && produto.categoria.indexOf(this._filterCategoria) >= 0) {
                    this.insereCard(produto);
                }
            }
        }
    };
    return Produtos;
}());
var listaProdutos = new Produtos();
