/* //todo: 3:31pm 9.15.22 (watch these two videos from the lesson)
 Splitting a string in JavaScript:
    https://www.youtube.com/watch?v=u2ZocmM93yU

    Destructuring in JavaScript:
    https://www.youtube.com/watch?v=UgEaJBz3bjY
*/

import { getPets } from "./database.js"

const pets = getPets()

document.addEventListener("click", (clickEvent) => {
    const elementClicked = clickEvent.target;

    if (elementClicked.id.startsWith("pet")) {
        const [, petPrimaryKey] = elementClicked.id.split("--"); 

        for (const pet of pets) {
            if (pet.id === parseInt(petPrimaryKey))
            {
                window.alert(`${pet.name} barks at you!`);
            }
        }
    }
});

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        // *solved: missing "pet--", jessier found it
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

