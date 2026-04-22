(function () {

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
         for (i = qtdDeAndares; i > 0; i--) {
            andares.appendChild(criarAndar(i))
         }
         andares.appendChild(criarTerreo())
      })
   }

   // Criar o Elevador
   function criarElevador() {
      const poco = document.querySelector('.poco')

      const elevador = document.createElement('div')
      elevador.classList.add('elevador')

      elevador.style.height = tamanhoElevador() + 'px'

      poco.appendChild(elevador)
   }

   // Definir tamanho do elevador
   function tamanhoElevador() {
      const terreo = document.querySelector('.terreo')
      let alturaDoElevador = terreo.offsetHeight
      return alturaDoElevador
   }

   // Mover Elevador
   function moverElevador(andar) {
      const elevador = document.querySelector('.elevador')

      const elevadorIrPara = andar * tamanhoElevador()

      elevador.style.bottom = elevadorIrPara + 'px'
   }

   // Mudar o mostrador
   function atualizarMostrador(destino, localizacaoAtual) {
      const mostrador = document.querySelector('.mostrador')

      if (localizacaoAtual < destino) {
         mostrador.innerHTML = "Subindo"
      } else if (localizacaoAtual > destino) {
         mostrador.innerHTML = "Descendo"
      } else {
         mostrador.innerHTML = "Parado"
      }

      let mostrarAndar = setInterval(() => {
         let localizacaoAndar = (destino == 0 ? 'Térreo' : `${destino}º andar`)
         mostrador.innerHTML = localizacaoAndar
         clearInterval(mostrarAndar)
      }, 2000)
   }

   // Escolher Andar
   function escolherAndar() {
      const botoes = document.querySelectorAll('[destino]')

      let localizacaoAtual = 0
      botoes.forEach(botao => {
         const destino = +botao.getAttribute('destino')
         botao.onclick = function () {
            moverElevador(destino)
            atualizarMostrador(destino, localizacaoAtual)
            localizacaoAtual = destino
         }
      })
   }

   criarClasse()
   criarAndares()
   criarElevador()
   escolherAndar()
})()