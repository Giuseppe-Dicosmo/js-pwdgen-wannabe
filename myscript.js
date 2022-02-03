const userName = prompt('Ciao, puoi dirmi il tuo nome?')
console.log(userName)

const userSurname = prompt('È il tuo cognome?')
console.log(userSurname)

const favoriteColor = prompt('Qual è il tuo colore preferito?')
console.log(favoriteColor)

document.getElementById('saluto').innerHTML = 'Ciao ' + userName + ' ' + userSurname + ' anche il mio colore preferito è il ' + favoriteColor;