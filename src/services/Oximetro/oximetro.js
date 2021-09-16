class Oximetro {

  constructor(name) {
    this.inicialSaturacao = this.saturacao();
    this.name = name;
  }

  getName() {
    return this.name;
  }
  sort() {
    let aux = Math.floor(Math.random() * 2);

    if (aux > 0) {
      // console.log("Sort", aux)
      return true;
    } else {
      // console.log("Sort", aux)
      return false;
    }
  }
  saturacao1() {
    return Math.floor(Math.random() * 2);
  }

  arredonda(value, exp) {
    value = +value;
    exp = +exp;

    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));

    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  saturacao() {
    return 100 * this.arredonda(Math.random() * (1 - 0.9) + 0.9, -1);
  }
  start() {
    return setInterval(() => {
      let v = this.saturacao1();
      if (this.inicialSaturacao <= 100 && this.sort()) {
        this.inicialSaturacao -= v;
        // console.log("Decrementando", this.inicialSaturacao);
      } else if (!this.sort() && this.inicialSaturacao <= 100) {
        if ((this.inicialSaturacao += v > 100)) {
          this.inicialSaturacao = 100;
        } else {
          this.inicialSaturacao += v;
        }
      }
    }, 2000);
  }
  parar(time) {
    clearInterval(time);
  }
}

module.exports = Oximetro;
