import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    updateValue = (event) => {
        this.setState({ value: event.target.value });
    }

    searchUser = () => {
        this.props.filterUsers(this.state.value);
    }
    
    render() {
        return (
            <div className="input-field inline col s6">
                <input type="text" className="validate center-align" placeholder="search for users"
                    onChange={this.updateValue}
                    onKeyUp={this.searchUser}
                    value={this.value}
                />
            </div>
        )
    }
}

Search.propTypes = {
    filterUsers: PropTypes.func
}

export default Search

