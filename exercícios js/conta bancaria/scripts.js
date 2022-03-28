class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        // toda vez que se usa get e set, é boa prática
        // colocar o _ na frente da declaração da variável
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}
// Diferente do Csharp, que você herda classes com ":", no 
// JS, precisa escrever "extends".
class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupança extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return "operação negada"
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}