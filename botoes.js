let dia = ""

buttons.segunda.addEventListener("click", function() {
    dia = "segunda"

    for (v in treinos) {
        treinos[v].style.display = "none"
    }

    for (v in buttons) {
        buttons[v].style.border = "none"

    }

    buttons[dia].style = "border-bottom: 2px solid white"

    treinos[dia].style.display = "block"
    save.style.display = "block"

    if (up === false) {
        treino_div.style.top = "0px"
        up = true

    } else {
        treino_div.style.top = "180px"
        
        setTimeout(function() {
            treino_div.style.top = "0px"
        }, 200)
    }
})

buttons.terca.addEventListener("click", function() {
    dia = "terca"

    for (v in treinos) {
        treinos[v].style.display = "none"
    }

    for (v in buttons) {
        buttons[v].style.border = "none"
    }

    buttons[dia].style = "border-bottom: 2px solid white"

    treinos[dia].style.display = "block"
    save.style.display = "block"

    if (up === false) {
        treino_div.style.top = "0px"
        up = true

    } else {
        treino_div.style.top = "180px"
        
        setTimeout(function() {
            treino_div.style.top = "0px"
        }, 200)

    }
})

buttons.quarta.addEventListener("click", function() {
    dia = "quarta"

    for (v in treinos) {
        treinos[v].style.display = "none"
    }

    for (v in buttons) {
        buttons[v].style.border = "none"
    }

    buttons[dia].style = "border-bottom: 2px solid white"

    treinos[dia].style.display = "block"
    save.style.display = "block"

    if (up === false) {
        treino_div.style.top = "0px"
        up = true

    } else {
        treino_div.style.top = "180px"
        
        setTimeout(function() {
            treino_div.style.top = "0px"
            
        }, 200)

    }
})

buttons.quinta.addEventListener("click", function() {
    dia = "quinta"

    for (v in treinos) {
        treinos[v].style.display = "none"
    }

    for (v in buttons) {
        buttons[v].style.border = "none"
    }

    buttons[dia].style = "border-bottom: 2px solid white"

    treinos[dia].style.display = "block"
    save.style.display = "block"

    if (up === false) {
        treino_div.style.top = "0px"
        up = true

    } else {
        treino_div.style.top = "180px"
        
        setTimeout(function() {
            treino_div.style.top = "0px"
        }, 200)

    }
})

buttons.sexta.addEventListener("click", function() {
    dia = "sexta"

    for (v in treinos) {
        treinos[v].style.display = "none"
    }

    for (v in buttons) {
        buttons[v].style.border = "none"
    }

    buttons[dia].style = "border-bottom: 2px solid white"

    treinos[dia].style.display = "block"
    save.style.display = "block"

    if (up === false) {
        treino_div.style.top = "0px"
        up = true

    } else {
        treino_div.style.top = "180px"
        
        setTimeout(function() {
            treino_div.style.top = "0px"
        }, 200)

    }
})