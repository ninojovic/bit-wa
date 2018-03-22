import axios from "axios"
import { endpointURL, singleSearchURL, searchByValueURL } from "./../shared/constants"
import { createShow } from "./../shared/utils"

class ShowService {

    fetchTop50Shows = async () => {
        const response = await axios.get(endpointURL);
        const topShows = response.data.filter(show => parseFloat(show.rating.average) > 8.3).slice(0, 50);

        return topShows;
    }

    fetchSingleShow = async (showID) => {
        const response = await axios.get(`http://api.tvmaze.com/shows/${showID}?embed[]=seasons&embed[]=cast`);
        const { id, name, image, _embedded, summary } = response.data
        const showInstance = createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary)

        return showInstance;
    }

}

const showService = new ShowService()

export default showService