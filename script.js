function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        // bom dia!
        img.src = 'morning2.png'
        document.body.style.background = '#a04801'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde!
        img.src = 'lunch2.png'
        document.body.style.background = '#dec3b0'
    } else {
        // boa noite
        img.src = 'dinner2.png'
        document.body.style.background = '#56361d'
    }
}
