import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li>${walker.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

