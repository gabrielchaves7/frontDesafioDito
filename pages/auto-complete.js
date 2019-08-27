import Autosuggest from 'react-autosuggest';

const getSuggestions = async value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  var eventData = await getEvents();

  return inputLength === 0 ? [] : eventData.filter(it =>
    it.event.toLowerCase().slice(0, inputLength) === inputValue
  );
};
 

const getSuggestionValue = suggestion => suggestion.event;
 
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.event}
  </div>
);

const getEvents = async () => {
  const response = await fetch('http://localhost:3001/?evento=buy');
  const body = await response.json();

  return body;
};
 
class Example extends React.Component {
  constructor() {
    super();
 
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }
 
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
 
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = async ({ value }) => {
    this.setState({
      suggestions: await getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
 
  render() {
    const { value, suggestions } = this.state;
 
    const inputProps = {
      placeholder: 'Digite um evento',
      value,
      onChange: this.onChange
    };
 
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Example;