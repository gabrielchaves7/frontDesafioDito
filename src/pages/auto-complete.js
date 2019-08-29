import Autosuggest from 'react-autosuggest';
import React from 'react';

const theme = {
  container: {
    position: 'relative',
  },
  input: {
    height: '40px',
    width: '100%',
    borderRadius: '.25rem',
    color: '#495057',
    lineHeight: '1.5',
    fontWeight: '400',
    backgroundClip: 'padding-box',
    padding: '.375rem .75rem'
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none',
  },
  suggestionsContainerOpen: {
    display: 'block',
    width: '100%',
    top: 51,
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    maxHeight: '200px',
    overflowY: 'auto'
  },
  suggestion: {
    cursor: 'pointer',
    padding: '.75rem 1.25rem',
    marginBottom: '-1px',
    border: '1px solid rgba(0,0,0,.125)'
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
};


const getSuggestions = async value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  var eventData = await getEvents(inputValue, inputLength);

  return eventData.filter(it =>
    it.event.toLowerCase().slice(0, inputLength) === inputValue
  );
};


const getSuggestionValue = suggestion => suggestion.event;

const renderSuggestion = suggestion => (
  <div >
    {suggestion.event}
  </div>
);

const getEvents = async (inputValue, inputLength) => {
  var listaEventos;
  if (inputLength < 2) {
    listaEventos = [];
  } else {
    const response = await fetch('http://localhost:3001/?evento=' + inputValue);
    listaEventos = await response.json();
  }


  return listaEventos;
};

class AutoComplete extends React.Component {
  constructor() {
    super();

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

  onSuggestionsFetchRequested = async ({ value }) => {
    this.setState({
      suggestions: await getSuggestions(value)
    });
  };

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
      <Autosuggest theme={theme} 
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

export default AutoComplete;