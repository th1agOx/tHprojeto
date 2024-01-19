function toggleMode(){
    const html = document.documentElement     
    html.classList.toggle('light')

    const avatar = document.querySelector("#profile img ")   //seletor CSS

    if( html.classList.contains('light')) {
        avatar.setAttribute('src', './assets/avatarLight.png') &
        avatar.setAttribute('alt', 'Foto do perfil de Thiago Rocha, no fundo marrom, com cabelos pintas de loiro')
    } else {
       avatar.setAttribute( 'src', './assets/avatar-dark.png') &
       avatar.setAttribute('alt', 'Foto de Thiago Rocha, olhando para o lado, com cabelo pintado de loiro, com camisa branca e cordão, e fundo com luzes brancas')
    }
    
}




/*
document ( minha aplicação toda )
classList é um objeto com propriedade inseridas nele, sendo elas funções
classList.contains se contém 
Se o meu documento conter o light mode remova ele, se não conter, adcione ele
o toggle por si só faz o passo a passo de conferir a existencia do mode, ou não, add ou excluir
querySelector, é um seletor de tag ( como no css ), mas no js, usado para referenciar uma URL
setAtribute, modifica um atributo
*/