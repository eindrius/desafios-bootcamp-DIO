const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];


console.log('this-> maçã', mapComThis(nums, maca));

console.log('this-> laranja', mapComThis(nums, laranja));

//sem this

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums2 = [2, 4, 6, 8, 10];

console.log('array * 2', mapSemThis(nums2));


//filtrar

function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0
}




const filtroArray = [1, 4, 5, 6, 7, 8, 9, 13, 14, 16, 17, 19, 23, 24, 27, 31];

console.log('filtro numero par', filtraPares(filtroArray));

//reduce

function somaNumeros(arr) {
    //geralmente você chama só o currentValue e o previousValue
    //mas há casos em que usa os outros parâmetros.
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

const arr = [1, 2, 3];

console.log('reduce', somaNumeros(arr));

const lista = [{
        name: 'sabao em po',
        preco: 18
    },
    {
        name: 'cereal',
        preco: 10,
    },
    {
        name: 'toalha',
        preco: 20,
    },
    {
        name: 'detergente',
        preco: 12,
    },
];

const saldoDisponivel = 80;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
            console.log({ prev })
            console.log({ current })
            return prev - current.preco;
        }, saldoDisponivel) //inicializa à partir do saldo disponível
}

console.log(calculaSaldo(saldoDisponivel, lista));