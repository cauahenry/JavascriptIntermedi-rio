let usuario = {
    nome: 'Caua',
    excluir: function () {
       console.log(`O usuário, ` + this.nome + ` foi excluido!`) 
    }
 }

 usuario.excluir()