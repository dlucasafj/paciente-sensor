class Paciente {

  constructor(id,nome, connection) {
    this.id = Math.floor(Math.random()*9999);
    this.equi = [];
    this.name = nome;
    this.connection = connection;
    this.sistolica =0;
    this.diastolica=0;
    this.temperatura=0;
  }


  setNome(nome){
    this.name = nome;
  }
  setSistolica(sistolica){
    this.sistolica=sistolica
  }
  setDiastolica(diastolica){
    this.diastolica=diastolica;
  }
  setTemperatura(temperatura){
    this.temperatura=temperatura;
  }
  setEquip(equi){
    this.equi = equi
  }
  equipamentos(equipa) {
    this.equi.push(equipa);
  }

  setConection(conection){
    this.connection=conection
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }

  getQtdEquipa() {
    return this.equi.length;
  }

  getLeitura() {
    for (var i = 0; i < this.getQtdEquipa(); i++) {
      this.leituraRec(i);
    }
  }

  leituraRec(i) {
    let ws = this.connection;
    let set = this.equi[i].start();


    let time = setInterval(() => {
      if (ws.readyState === 3) {
        this.equi[i].parar(set); // parada do equipamentp
        clearInterval(time); // parada do paciente
      }
      //Envia dados ao Servidor
      ws.send(
        JSON.stringify({
          id: this.id,
          name: this.name,
          sistolica:this.sistolica,
          diastolica:this.diastolica,
          temperatura: this.temperatura,
          equipamento: this.equi[i],
        })
      );
    }, 3000);
  }
}

module.exports = Paciente;
