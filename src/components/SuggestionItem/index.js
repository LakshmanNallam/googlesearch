import './index.css'

const SuggestionItem = props => {
  const {eachItem, fun} = props
  const {suggestion, id} = eachItem

  const funcall = () => {
    fun(id, suggestion)
  }

  return (
    <li className="SuggestionItem">
      <p className="para">{suggestion}</p>
      <button type="button" className="buttonstty" onClick={funcall}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrowsty"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
