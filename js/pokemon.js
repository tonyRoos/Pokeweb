class Pokemon {
    constructor( objDaApi ) {
      this._id = objDaApi.id;
      this._nome = objDaApi.name;
      this._imagem = objDaApi.sprites.front_default;
      this._altura = objDaApi.height;
      this._peso = objDaApi.weight;
      this._hp = objDaApi.stats[0].base_stat;
      this._atk = objDaApi.stats[1].base_stat;
      this._def = objDaApi.stats[2].base_stat;
      this._spAtk = objDaApi.stats[3].base_stat;
      this._spDef = objDaApi.stats[4].base_stat;
      this._spd = objDaApi.stats[5].base_stat;
      this._typeList = objDaApi.types;
      this._totalPokes = objDaApi.count;
    }
  
    get totalPokes() {
      return this._totalPokes;
    }

    get id() {
      return this._id;
    }

    get nome() {
      let code;
      if( this._id < 10 ) { code = "00" + this._id; }
      if( this._id < 100 && this._id >= 10 ) { code = "0" + this._id; }
      if( this._id >= 100 ) { code = this._id; }
      return "#" + code + " - " + this._nome;
    }
  
    get imagem() {
      return this._imagem;
    }
  
    get altura() {
      return `Altura : ${ this._altura * 10 } cm`;
    }

    get peso() {
      return `Peso : ${ this._peso / 10 } kg`;
    }

    get hp() {
      return this._hp;
    }

    get atk() {
      return this._atk;
    }

    get def() {
      return this._def;
    }

    get spAtk() {
      return this._spAtk;
    }

    get spDef() {
      return this._spDef;
    }

    get spd() {
      return this._spd;
    }

     get typeList() {
      return this._typeList;
    }
  }