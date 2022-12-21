function alreadyUse(button) { //fonction qui vérifie si la case est déjà utilisé par un joueur
    return button.innerHTML.length == 0
}

function setSymbol(btn, symbole) { //fonction qui permet de définir le symbole (X ou O)
    btn.innerHTML = symbole
}

function patternWinner(pions, players, tour) { //fonction qui calcule le pattern pour gagner la partie
    if (
        pions[0].innerHTML == players[tour] &&
        pions[1].innerHTML == players[tour] &&
        pions[2].innerHTML == players[tour]
    ) {
        pions[0].style.backgroundColor = "green"
        pions[1].style.backgroundColor = "green"
        pions[2].style.backgroundColor = "green"
        return true
    }

    if (
        pions[3].innerHTML == players[tour] &&
        pions[4].innerHTML == players[tour] &&
        pions[5].innerHTML == players[tour]
    ) {
        pions[3].style.backgroundColor = "green"
        pions[4].style.backgroundColor = "green"
        pions[5].style.backgroundColor = "green"
        return true
    }

    if (
        pions[6].innerHTML == players[tour] &&
        pions[7].innerHTML == players[tour] &&
        pions[8].innerHTML == players[tour]
    ) {
        pions[6].style.backgroundColor = "green"
        pions[7].style.backgroundColor = "green"
        pions[8].style.backgroundColor = "green"
        return true
    }

    if (
        pions[0].innerHTML == players[tour] &&
        pions[3].innerHTML == players[tour] &&
        pions[6].innerHTML == players[tour]
    ) {
        pions[0].style.backgroundColor = "green"
        pions[3].style.backgroundColor = "green"
        pions[6].style.backgroundColor = "green"
        return true
    }

    if (
        pions[1].innerHTML == players[tour] &&
        pions[4].innerHTML == players[tour] &&
        pions[7].innerHTML == players[tour]
    ) {
        pions[1].style.backgroundColor = "green"
        pions[4].style.backgroundColor = "green"
        pions[7].style.backgroundColor = "green"
        return true
    }

    if (
        pions[2].innerHTML == players[tour] &&
        pions[5].innerHTML == players[tour] &&
        pions[8].innerHTML == players[tour]
    ) {
        pions[2].style.backgroundColor = "green"
        pions[5].style.backgroundColor = "green"
        pions[8].style.backgroundColor = "green"
        return true
    }

    if (
        pions[0].innerHTML == players[tour] &&
        pions[4].innerHTML == players[tour] &&
        pions[8].innerHTML == players[tour]
    ) {
        pions[0].style.backgroundColor = "green"
        pions[4].style.backgroundColor = "green"
        pions[8].style.backgroundColor = "green"
        return true
    }

    if (
        pions[2].innerHTML == players[tour] &&
        pions[4].innerHTML == players[tour] &&
        pions[6].innerHTML == players[tour]
    ) {
        pions[2].style.backgroundColor = "green"
        pions[4].style.backgroundColor = "green"
        pions[6].style.backgroundColor = "green"
        return true
    }
}

function matchNul(pions) { //fonction qui permet de vérifier si ya match nul ou non
    for (let i = 0; i < pions.length; i++) {
        if (pions[i].innerHTML.length == 0) return false
    }
    return true
}

function restartGame() { //fonction crée pour le boutton qui va reset la partie
    location.reload()
}

function winPlayerOne() { //fonction pour la victoire du joueur 1
    var boxP1 = document.querySelector('#box-j1')
    var winP1Msg = document.querySelector('#j1-wins_status')

    boxP1.style.backgroundColor = "green"
    boxP1.style.color = "white"

    winP1Msg.innerHTML = "WINNER !"
}

function winPlayerTwo() { //fonction pour la victoire du joueur 2
    var boxP2 = document.querySelector('#box-j2')
    var winP2Msg = document.querySelector('#j2-wins_status')

    boxP2.style.backgroundColor = "green"
    boxP2.style.color = "white"

    winP2Msg.innerHTML = "WINNER !"
}

function morpionGame() { //fonction qui permet de faire fonctionner le jeus
    const p1 = document.querySelector('#symbole-j1').innerHTML = "X"
    const p2 = document.querySelector('#symbole-j2').innerHTML = "O"

    var pions = document.querySelectorAll("#morpion button")
    var players = [p1, p2]
    var tour = 0
    var endGame = false

    var msg = document.querySelector('#infos-msg')

    for (let i = 0; i < pions.length; i++) {
        pions[i].addEventListener('click', function () {
            if (endGame) return //vérifie si c'est la fin de partie

            if (!alreadyUse(this)) { //Si la case cliqué est déjà utiliser, alors on retourne un message à l'utilisateur
                msg.innerHTML = "Case déjà occupé ! <br/>Joueur " + players[tour] + " c'est toujours votre tour !"
            } else { //sinon on met le symbole du joueur sur la case cliqué
                setSymbol(this, players[tour])
                endGame = patternWinner(pions, players, tour)

                if (endGame) { //si la partie est finit, on définit le message selon le joueur gagnant
                    msg.innerHTML = "Bravo " + players[tour] + " tu as gagner la partie !";
                    if (players[tour] == p1) {
                        winPlayerOne()
                        return
                    } else {
                        winPlayerTwo()
                        return
                    }
                }

                if (matchNul(pions)) { //Si c'est match nul, on indique au joueur qu'il faut relancer une nouvelle partie
                    msg.innerHTML = "Match nul! <br>Relancer une partie !"
                    document.querySelector('#j1-wins_status').innerHTML = ""
                    document.querySelector('#j2-wins_status').innerHTML = ""
                    endGame = true
                    return
                }
                tour++
                tour = tour % 2

                msg.innerHTML = "Joueur " + players[tour] + " c'est à vous de jouer !"
            }
        })
    }
}

morpionGame() //on appelle la fonction du jeu, afin de le mettre en route