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

      this.changeValidLoginStatus = this.changeValidLoginStatus.bind(this);
      this.changeValidPasswordStatus = this.changeValidPasswordStatus.bind(this);
    }

    changeValidLoginStatus(validationStatus) {
      const {isPasswordValid} = this.state;
      const formValid = validationStatus && isPasswordValid;
      this.setState({
        isLoginValid: validationStatus,
        isFormValid: formValid,
      });

    }

    changeValidPasswordStatus(validationStatus) {
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
          onValidLoginChange={this.changeValidLoginStatus}
          onValidPasswordChange={this.changeValidPasswordStatus}
        />
      );
    }
  }

  return WithValidity;
};

export default withValidity;
