import React from 'react';
import Formulario from './Formulario';
import Card from './Card';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      cardInfo: null,
    };
  }

  handleFormSubmit = (input1, input2) => {
    if (input1.length < 3 || input1.trim() !== input1 || input2.length < 6) {
      this.setState({ errorMessage: 'Por favor chequea que la información sea correcta.', cardInfo: null });
    } else {
      this.setState({
        errorMessage: '',
        cardInfo: <Card input1={input1} input2={input2} />,
      });
    }
  };

  render() {
    return (
      <div>
        <Formulario handleFormSubmit={this.handleFormSubmit} />
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        {this.state.cardInfo}
      </div>
    );
  }
}

export default App;