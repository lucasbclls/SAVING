let meuVetor=[
    {nome: 'ana', idade: 20},
    {nome: 'bia', idade: 120},
    {nome: 'maria', idade: 220},
    {nome: 'jose', idade: 320},
    {nome: 'ana', idade: 20},
    {nome: 'ana', idade: 20},
    {nome: 'ana', idade: 20},
    {nome: 'ana', idade: 20},
    {nome: 'ana', idade: 20},
    {nome: 'ana', idade: 20}
]


meuVetor.sort(function(a,b) {
   if(a.nome < b.nome){
       return -1;
   } else {
      return true
   }
})


meuVetor.sort(function(a,b) {
   if(a.idade < b.idade){
       return -1;
   } else {
      return true
   }
});


for (let i = 0; i < min; i++) {
 console.log(i);
}