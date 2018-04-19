class Produto{
  constructor (private _id:number, private _nome:string, private _categoria:string, private _imagem:string, private _preco:number){};

  get id():number{
    return this._id;
  }

  set id(valor:number){
    this._id = valor;
  }

  get nome():string{
    return this._nome;
  }

  set nome(valor:string){
    this._nome = valor;
  }

  get categoria():string{
    return this._categoria;
  }

  set categoria(valor:string){
    this._categoria = valor;
  }

  get imagem():string{
    return this._imagem;
  }

  set imagem(valor:string){
    this._imagem = valor;
  }

  get preco():number{
    return this._preco;
  }

  set preco(valor:number){
    this._preco = valor;
  }
}

class Produtos{
    private _listaProdutos:Produto[] = [];
    private _listaCategorias:string[] = [];
    private _id:number = 0;
    private _filterCategoria = "Todas";

    insereCard(produto:Produto){

      let listaCards = document.getElementById('listaProdutosView');

      if(produto==null){
        listaCards.innerHTML = '';
      }else{

        listaCards.innerHTML += `
                      <div class="col-sm-3">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="${produto.imagem}" alt="${produto.nome}">
                        <div class="card-body">
                          <h4 class="card-title">${produto.nome}</h4>
                          <p class="card-text">${produto.categoria}</p>
                        </div>
                        <div class="card-footer text-right bg-primary ">
                          <small class="text-white font-weight-bold h2"><em>R$ ${produto.preco}</em></small>
                        </div>
                        </div>
                      </div>
        `;
      }




    }

    insereOption(nomeCategoria:string){
      let select:HTMLSelectElement = <HTMLSelectElement>document.getElementById('selectCategoria');
      select.add(new Option(nomeCategoria,nomeCategoria));
    }

    adicionar(form){

      let produto:Produto = new Produto(++this._id,form.elements.nome.value,form.elements.categoria.value,form.elements.imagem.value,parseFloat(form.elements.preco.value))
      this._listaProdutos.push(produto);
      this.insereCard(produto);

      if(this._listaCategorias.indexOf(produto.categoria)<0){
        this._listaCategorias.push(produto.categoria);
        this.insereOption(produto.categoria);
      }

    }

    selecaoCategoria(select){
      this._filterCategoria = select.value;
      this.pesquisar(document.getElementById('pesquisar'));
    }

    pesquisar(input){
      //Limpar a tela
      this.insereCard(null);

      for(let produto of this._listaProdutos){
        if(this._filterCategoria == "Todas"){
          if(parseInt(input.value) == produto.id || produto.nome.indexOf(input.value)>=0 || produto.categoria.indexOf(input.value)>=0){
            this.insereCard(produto);
          }
        }else{
          if((parseInt(input.value) == produto.id || produto.nome.indexOf(input.value)>=0) && produto.categoria.indexOf(this._filterCategoria)>=0){
            this.insereCard(produto);
          }
        }

      }

    }

}


let listaProdutos:Produtos = new Produtos();
