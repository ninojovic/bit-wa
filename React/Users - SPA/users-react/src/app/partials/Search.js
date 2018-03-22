import React from "react"
import PropTypes from "prop-types"

import "./Search.css"

class Search extends React.Component {
    state = {
        value: ""
    }

    updateValue = (event) => {
        this.setState({ value: event.target.value });
    }

    componentDidUpdate(prevProps, prevState) {
        const { value: currentValue} = this.state;
        const { value: previousValue} = prevState;

        if (previousValue !== currentValue) {
            this.props.filterUsers(currentValue);
        }
    }
    
    render() {
        return (
            <div className="input-field inline col s6">
                <input type="text" className="validate center-align" placeholder="search for users" onChange={this.updateValue} />
            </div>
        )
    }
}

Search.propTypes = {
    filterUsers: PropTypes.func
}

export default Search

