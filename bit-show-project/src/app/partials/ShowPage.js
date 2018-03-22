import React from 'react';
import showService from './../services/ShowService'
import "./ShowPage.css"

import Header from './Header'
import Footer from './Footer'

class ShowPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {},
        }
    }

    componentDidMount = () => {
        this.getMovie();
      }

    getMovie = async () => {
        const movieInstance = await showService.fetchSingleShow(this.props.match.params.id);
        this.setState({movie: movieInstance})
    }

    render(){
        const {movie} = this.state;

        return (
        <React.Fragment>
            <Header />
            <div className="container">
                <h1>{movie.name}</h1>
                <div className="row">
                    <img src={movie.posterURL} className="col-sm-6"/>
                    <div className="row col-sm-6">
                        <h2 className="col-sm-12">Seasons ({console.log(movie)})</h2>
                        <ul className="col">
                            {}
                        </ul>
                        <h2 className="col-sm-12">Cast:</h2>
                        <ul className="col">
                            {"castlist"}
                        </ul>
                    </div>
                    <div col>
                        <h2 col>Show Details</h2>
                        {movie.details}
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
        )
    }
}

export default ShowPage;