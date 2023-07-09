const personagens = document.querySelectorAll(".personagem") //seleciona todos os elementos presentes dentro da classe "personagem"

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", function () {
    if (window.innerWidth < 450) {
      scrollTo({ top: 0, behavior: "smooth" })
    }

    const personagemSelecionado = document.querySelector(".selecionado")
    personagemSelecionado.classList.remove("selecionado")
    personagem.classList.add("selecionado") //adiciona a classe "selecionado"

    const imagemPersonagemGrande = document.querySelector(".personagemGrande")
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`

    const nomePersonagem = document.querySelector("#nomePersonagem")
    nomePersonagem.innerText = personagem.getAttribute("data-name")

    const descricaoPersonagem = document.querySelector("#descricaoPersonagem")
    descricaoPersonagem.innerText = personagem.getAttribute("data-description")
  })
}) //o forEach vai percorrer 8 vezes e para cada uma das vezes ele vai percorrer um item da lista
