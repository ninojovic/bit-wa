import React from "react"

class Search extends React.Component {
    state = {
        
    }

    onChangeValue = (params) => {
        const textInput = params.target.value
        this.setState
    }

    render() {
        return (
            <div className="input-field inline col s6 offset-s3">
                <input id="search" onChange={updateValue} onKeyUp={filterUsers} type="text" value={value} className="validate center-align" />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            </div>
        )
    }
}

export default Search

