(function () {
   function criarFaixas() {
      const valorNumeroDeFaixas = document.querySelectorAll('[numeroDeFaixas]')

      valorNumeroDeFaixas.forEach(faixas => {
         const qtdDeFaixas = +faixas.getAttribute('numeroDeFaixas')

         for (i = 0; i <= qtdDeFaixas; i++) {
            const criarFaixa = document.createElement('div')

            criarFaixa.classList.add('faixa')

            faixas.appendChild(criarFaixa)
         }
      })
   }

   criarFaixas()
})()