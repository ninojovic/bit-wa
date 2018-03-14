import {Show, Season, Actor} from "./entities.js";

export const baseEndpoint = `http://api.tvmaze.com/shows`;

export const fetchShows = (path, successCallback, errorCallback) => {
    $.get(path)
        .done(successCallback)
        .fail(errorCallback);
//         fetch(path)
//         .then(successCalback)
//         .catch(errorCallback)
}

export const createShow = (id, name, posterURL, listOfSeasons, listOfActors, details) => {

    let seasonsList = listOfSeasons.map(season => new Season(season.premiereDate, season.endDate));
    let actorsList = listOfActors.map(actor => new Actor(actor.person.name));
    let newShow = new Show(id, name, posterURL, seasonsList, actorsList, details);

    localStorage.setItem(id, JSON.stringify(newShow));

    return newShow;
}