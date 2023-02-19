function toggleMode () {

  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img

  const img = document.querySelector("#profile img")
  
  if (html.classList.contains('light')) {
    //se tiver light mode, mudar imagem

    img.setAttribute(
      'alt', 'Foto de Mayk Brito sorrindo, usando óculos escuros e camisa preta com fundo colorido'
    )

    img.setAttribute('src', './assets/avatar-light.png')
    

  } else {
    //se não tiver light mode, manter imagem

    img.setAttribute ('src', './assets/avatar.png')
  
  }


}