import React, {PureComponent} from "react";

const withValidity = (Component) => {
  class WithValidity extends PureComponent {
    constructor() {
      super();

      this.state = {
        isFormValid: false,
        isLoginValid: true,
        isPasswordValid: true,
      };

      this.handleValidLoginStatusChange = this.handleValidLoginStatusChange.bind(this);
      this.handleValidPasswordStatusChange = this.handleValidPasswordStatusChange.bind(this);
    }

    handleValidLoginStatusChange(validationStatus) {
      const {isPasswordValid} = this.state;
      const formValid = validationStatus && isPasswordValid;
      this.setState({
        isLoginValid: validationStatus,
        isFormValid: formValid,
      });

    }

    handleValidPasswordStatusChange(validationStatus) {
      const {isLoginValid} = this.state;
      const formValid = isLoginValid && validationStatus;
      this.setState({
        isPasswordValid: validationStatus,
        isFormValid: formValid,
      });
    }

    render() {
      return (
        <Component
          isFormValid={this.state.isFormValid}
          isLoginValid={this.state.isLoginValid}
          isPasswordValid={this.state.isPasswordValid}
          onValidLoginChange={this.handleValidLoginStatusChange}
          onValidPasswordChange={this.handleValidPasswordStatusChange}
        />
      );
    }
  }

  return WithValidity;
};

export default withValidity;
