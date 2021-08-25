const apiURL: string = 'https://hp-api.herokuapp.com/api/characters';
const charactersDiv = <HTMLDivElement>document.getElementById('characters');
const getDataButton = <HTMLButtonElement>document.getElementById('getData_button');
const houses = <HTMLSelectElement>document.getElementById('houses');

async function getData () {
  const response = await fetch(apiURL);
  const data = await response.json();

  function fillData() {
    for (let index = 0; index < data.length; index++) {
      const characterCard = `
        <div class="character ${houses.value}">
          <h2>${data[index].name}</h2>
          <img src="${data[index].image}" />
          <p>Ancestry: ${data[index].ancestry}</p>
          <p>Date of birth: ${data[index].dateOfBirth}</p>
        </div>
      `
      if (data[index].house === houses.value) {
        charactersDiv.innerHTML += characterCard;
      } else if (houses.value === 'none') {
        charactersDiv.innerHTML = `<h2>Please select a Hogwart's House.</h2>`;
      }
    }
  }

  if (charactersDiv.innerHTML === '') {
    fillData();
  } else {
    charactersDiv.innerHTML = '';
    fillData();
  }

}

getDataButton?.addEventListener('click', getData);
