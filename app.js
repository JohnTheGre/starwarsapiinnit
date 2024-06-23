/**
 * Example 3
 * Get data from https://swapi.dev/api/people/1/ using Async Await
 */

console.log("JavaScript is working!");

async function init() {
  const domElement = document.getElementById("starwars");

  const characters = [
    { id: 1, img: "assests/luke skywalker.jpeg" },
    { id: 2, img: "assests/c-3PO.jpeg" },
    { id: 3, img: "assests/R2-D2.jpeg" },
    { id: 4, img: "assests/darth vader.jpg" }
  ];

  for (const char of characters) {
    const character = await getSwapiData(`https://swapi.py4e.com/api/people/${char.id}/`);
    console.log(character);
    
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    img.src = char.img; 
    img.alt = character.name;
  

    li.textContent = character.name;
    span.textContent = character.name;
    li.append(img);
    li.append(span);


    ul.append(li);
    domElement.append(ul);
  }

}

/**
 * Async function to get the data from the SWAPI api
 * @returns - returns a promise
 */
async function getSwapiData(url) {
  try {
    let response = await fetch(url);
    let character = await response.json();
    return character;
  } catch (err) {
    console.error("Error: ", err);
  }
}

init();
