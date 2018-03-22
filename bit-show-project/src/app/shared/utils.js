import Show from './../entities/Show'
import Actor from './../entities/Actor'
import Season from './../entities/Season'


export const createShow = (id, name, posterURL, listOfSeasons, listOfActors, details) => {

    let seasonsList = listOfSeasons.map(season => new Season(season.premiereDate, season.endDate));
    let actorsList = listOfActors.map(actor => new Actor(actor.person.name));
    let newShow = new Show(id, name, posterURL, seasonsList, actorsList, details);
    
    return newShow;
}