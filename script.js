// criando um objeto
const estudante={
    nome: "Ana Paula",
    sobrenome: "Gouveia",
    numeroDaMatricula: 4520441,
    notasDoSemestre: [8, 5.5, 10]
}

console.log(estudante);

// criar a propriedade modulo (material que esta sendo estudado no curso)
estudante.modulo= "git e temrinal"
console.log(estudante);

//acessar as propriedades que ja existem 
// 1- imprimir a propriedade nome (com a notaçao de ponto)
console.log("NOME", estudante.nome)

//2- immprimir a segunda nota (com a notaçao de ponto)
console.log("SEGUNDA NOTA", estudante.notasDoSemestre[1])

//3- imprimir o modulo (usando a notaçao de colchetes que tbm é outra forma de acessar a informaçao)
console.log("MODULO", estudante["modulo"])

//copiando e alterando objetos
//1-criando uma copia utilizando o espalhamento
const novoEstudante = {... estudante}

console.log("NOVO ESTUDANTE:", novoEstudante);

//2- alterar o nome para "Astrodev"
novoEstudante.nome="Astrodev"

//3- adicionar a nota 9 no
novoEstudante.notasDoSemestre=[...estudante.notasDoSemestre, 9]

//4- mudar o modulo
novoEstudante["modulo"]="introduçao à Web"

//criar um array estudantesLabenu e adicionar os objetos estudante e copiaEstudante
const estudantesLabenu= []
estudantesLabenu.push(estudante, novoEstudante) //push para adicionar 
console.log(estudantesLabenu);

//EXERCICIO DE FIXAÇÃO
//1- crie um objeto carrinho e deve guardar: nome da pessoa que faz as compas, forma de pagamento e endereço 
const carrinho= {
    nome: "paula",
    formaDePagamento: "cartao",
    endereco: "natal/RN"
}
console.log(carrinho)

//adicione ao objeto carrinho um array de objetos chamado "compras" para guardar as compras, contendo: nome do produto, preço do produto e a quantidade  para serem compradas

carrinho.compras = [{
produto: "cerveja", 
valor: 5.99, 
quantidade: 12},

{produto: "salgadinho",
valor: 2.00,
quantidade: 5}
]

console.log(carrinho.compras.length)

const carrinhoPresente= {...carrinho} 
carrinhoPresente.nome="Karina"
carrinhoPresente.formaDePagamento="cartao presente"
console.log(carrinhoPresente)