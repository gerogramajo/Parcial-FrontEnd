import React from 'react';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.input1, this.state.input2);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="input1"
          value={this.state.input1}
          placeholder="Indica tu nombre"
          onChange={(e) => this.setState({ input1: e.target.value })}
        /><br /><br />

        <input
          type="text"
          id="input2"
          value={this.state.input2}
          placeholder="Ingresa tu color favorito"
          onChange={(e) => this.setState({ input2: e.target.value })}
        /><br /><br />

        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default Formulario;