import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { personalAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  onsubmit = () => {
    const { handleClick } = this.props;
    handleClick(this.state);
    const { history } = this.props;
    history.push('/carteira');
  };

  // validação por regExp fonte: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const { password, email } = this.state;
      const passwordLength = 6;
      if (this.validateEmail(email) && password.length >= passwordLength) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <div>
        <fieldset>
          <input
            label="Email:"
            type="text"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            label="Password:"
            type="password"
            onChange={ this.handleChange }
            value={ password }
            name="password"
            placeholder="password"
            data-testid="password-input"
          />
          <button
            type="button"
            label="Entrar"
            disabled={ disabled }
            onClick={ this.onsubmit }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleClick: (state) => dispatch(personalAction(state)) });

export default connect(null, mapDispatchToProps)(Login);
