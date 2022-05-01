//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.drinks[0].strImageSource)

        
     document.querySelector('h2').innerText=data.drinks[0].strDrink 
     document.querySelector('h3').innerText=data.drinks[0].strInstructions 
     document.querySelector('img').src=data.drinks[0].strDrinkThumb
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}