(function() {

   // Criando classe com numero de andares podendo alterar número de andares
   function criarClasse() {
      qtdAndares = 6
      const colunas = document.querySelectorAll('div.coluna')
      colunas.forEach(incluiAndares => {
         incluiAndares.setAttribute('numero-de-andares', qtdAndares)
      })
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
      terreo.setAttribute('numero-do-andar', 't')

      terreo.appendChild(janela)

      return terreo
   }

   // Criar o Térreo e os andares
   function criarAndares() {
      const valorNumeroDeAndares = document.querySelectorAll(['[numero-de-andares]'])

      valorNumeroDeAndares.forEach(andares => {
         const qtdDeAndares = +andares.getAttribute('numero-de-andares')
         for(i = qtdDeAndares; i > 0; i--) {
            andares.appendChild(criarAndar(i))
         }
         andares.appendChild(criarTerreo())
      })
   }

   criarClasse()
   criarAndares()
})()