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
      terreo.setAttribute('numero-do-andar', '0')

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
   
   // Definir tamanho do elevador
   function tamanhoElevador() {
      const terreo = document.querySelector('.terreo')
      let alturaDoElevador = terreo.offsetHeight
      return alturaDoElevador
   }
   
   // Criar o Elevador
   function criarElevador() {
      const poco = document.querySelector('.poco')
      
      const elevador = document.createElement('div')
      elevador.classList.add('elevador')
      // console.log(typeof tamanhoElevador())
      elevador.style.height = tamanhoElevador() + 'px'
      
      poco.appendChild(elevador)
   }

   // Mover Elevador
   function moverElevador(andar) {
      // const numeroAndar = andar

      const elevador = document.querySelector('.elevador')

      const elevadorIrPara = andar * tamanhoElevador()

      elevador.style.bottom = elevadorIrPara + 'px'

      atualizarMostrador(andar == 0 ? 'Térreo' : `${andar}º andar`)

      const posicaoAtual = andar
      const posicaoFinal = valor

      



      // atualizarMostrador(andar == 0 ? 'Térreo' : `${andar}º andar`)
   }

   // Mudar o nome do mostrador
   function atualizarMostrador(destino) {
      const mostrador = document.querySelector('.mostrador')
      mostrador.innerHTML = destino
   }

   // Escolher Andar
   function escolherAndar() {
      const botoes = document.querySelectorAll('[destino]')
      // console.log(botoes)
      botoes.forEach(botao => {
         const destino = botao.getAttribute('destino')
         botao.onclick = function () {
            moverElevador(destino)
         }
         
      })
   }
   
   criarClasse()
   criarAndares()
   criarElevador()
   escolherAndar()
   
})()