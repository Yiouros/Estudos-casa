'use strict';
const nomeProduto = 'Gelo No Espeto'
const precoBase = 31.90;
const precoAdicional = 5;
const quantidade = 1;
const taxaEntrega = 12;

const valorUnitario = precoBase + precoAdicional;
const subtotal = valorUnitario * quantidade;
const total= subtotal + taxaEntrega;

console.log(`Produto: ${nomeProduto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Total previsto:${total}`);