function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    if (hora >= 0 && hora <12) {
        img.src = 'morning2.png'
        msg.innerHTML = `Bom dia! <p> Agora são ${hora} horas.`
        document.body.style.background = '#a04801'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'lunch2.png'
        msg.innerHTML = `Boa tarde! <p> Agora são ${hora} horas.`
        document.body.style.background = '#dec3b0'
    } else {
        img.src = 'dinner2.png'
        msg.innerHTML = `Boa noite! <p> Agora são ${hora} horas.`
        document.body.style.background = '#56361d'
    }
}
