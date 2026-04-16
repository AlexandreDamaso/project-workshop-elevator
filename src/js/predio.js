(function() {

   //
   function criarClasse() {
      valNume = 6
      const coluna = document.querySelectorAll('.coluna')
      const numDeAndares = document.createAttribute('numeroandares')
      console.log(numDeAndares)
      // numDeAndares.setAttribute('numeroandares', valNume)
   
      // numDeAndares.classList.add('numero-andares') 
      // numDeAndares.values('6') 

      // return numDeAndares
   }




   // Criar um andar
   function criarAndar(numeroDoAndar) {
      const porta = document.createElement('div')
      porta.classList.add('porta')

      const andar = document.createElement('div')
      andar.classList.add('andar')

      andar.setAttribute('numero-do-andar', numeroDoAndar)

      andar.appendChild(porta)

      return andar
   }

   // Criar o Térreo
   function criarTerreo() {
      const janela = document.createElement('div')
      janela.classList.add('janela')

      const terreo = document.createElement('div')
      terreo.classList.add('terreo')

      terreo.appendChild(janela)

      return terreo

   }

   // Criar o Térreo e os andares
   function criarAndares() {
      const valorNumeroDeAndares = document.querySelectorAll(['[numeroDeAndares]'])
      valorNumeroDeAndares.forEach(andares => {
         const qtdDeAndares = +andares.getAttribute('numeroDeAndares')
         for(i = 0; i < qtdDeAndares; i++) {
            andares.appendChild(criarAndar(i))
         }

         andares.appendChild(criarTerreo())
      })
   }
   criarClasse()
   criarAndares()
})()