import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updatestate = event => {
    this.setState({searchInput: event.target.value})
  }

  fun = (id, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const updatedList = suggestionsList.filter(eachItem => {
      const text = eachItem.suggestion.toLowerCase()
      return text.includes(searchInput)
    })

    return (
      <div className="mainDiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleimg"
        />
        <div className="submaindiv">
          <div className="SearchCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searchimg"
              alt="search icon"
            />
            <input
              type="search"
              className="inoutele"
              value={searchInput}
              onChange={this.updatestate}
            />
          </div>
          <ul>
            {updatedList.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                fun={this.fun}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
