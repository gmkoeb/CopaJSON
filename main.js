let data 

fetch("data.json").then(response =>{
  return response.json();
    }).then(getData => { renderData(getData.data);
        data = getData.data;
})

function renderData(data) {
  const main = window.document.querySelector('#cards')
  main.innerHTML = ''

  data.forEach((date) => {
      
      const container = document.createElement('div') //card-container

      const card = document.createElement('div') //card

      const dayDate = document.createElement('p')

      const day = document.createElement('p')

      container.setAttribute('class', "card-container d-flex flex-column text-center align-items-center")

      container.appendChild(card)

      card.setAttribute('class', "card flex-row d-flex justify-content-center align-items-center border-warning border rounded-3")

      card.appendChild(dayDate)

      card.appendChild(day)

      dayDate.setAttribute('class', "date")
      
      day.setAttribute('class', "align-self-center text-white")

      dayDate.innerHTML = date.date

      day.innerHTML = date.day

      main.appendChild(container)

      date.games.forEach((games) => {
          const gamesCard = document.createElement('ul')
          const game = document.createElement('li')
          const player1 = document.createElement('img')
          const player2 = document.createElement('img')
          const dateTime = document.createElement('p')
          const resultsContainer = document.createElement('div')
          const results1 = document.createElement('input')
          const results2 = document.createElement('input')
          const cross = document.createElement('p')
        

          gamesCard.setAttribute('class', "d-flex flex-column list-inline text-white")

          gamesCard.appendChild(game)

          game.appendChild(player1)
          game.appendChild(dateTime)
          game.appendChild(player2)

          player1.setAttribute('src', `./assets/icon=${games.country1}.svg`)

          player2.setAttribute('src', `./assets/icon=${games.country2}.svg`)

          dateTime.innerHTML = games.hour

          container.appendChild(gamesCard)

          resultsContainer.setAttribute('class', "results")

          results1.setAttribute('type', "text")
          results1.setAttribute('name', `${games.country1}`)
          results1.setAttribute('id', `${games.id}-${games.country1}`) //3-portugal
          results1.setAttribute('onkeyup', "saveToLocalStorage(this)")
          results1.setAttribute('placeholder', "0")
          results1.setAttribute('maxlength', "2")
          results1.setAttribute('onkeypress', "return isNumberKey(event)")

          results2.setAttribute('type', "text")
          results2.setAttribute('name', `${games.country2}`)
          results2.setAttribute('onkeyup', "saveToLocalStorage(this)")
          results2.setAttribute('id', `${games.id}-${games.country2}`) //3-uruguay
          results2.setAttribute('placeholder', "0")
          results2.setAttribute('maxlength', "2")
          results2.setAttribute('onkeypress', "return isNumberKey(event)")

          gamesCard.appendChild(resultsContainer)

          resultsContainer.appendChild(results1)
          resultsContainer.appendChild(cross)
          resultsContainer.appendChild(results2)

          cross.innerHTML = "X"

          results1.value = localStorage.getItem(`${games.id}-${games.country1}`)
          results2.value = localStorage.getItem(`${games.id}-${games.country2}`)
        })
      });
    }
    function saveToLocalStorage(element){
      const id = element.getAttribute('id')
      const result = document.getElementById(id).value
      localStorage.setItem(id, result)
    }

  function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}