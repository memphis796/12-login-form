
export default class LoginForm {
  constructor(form, email) {
    this.form = form;
    this.validCredentials = [
      { username: `aaron@theironyard.com`, password: `password123` },
      { username: `admin@google.com`, password: `pandas` },
      { username: email, password: `honeycrisp` },
    ];

    this.form.addEventListener(`submit`, (ev) => {
      ev.preventDefault();
      this.validateInputs();
    });
  }

  validate(username, password) {
    return this.validCredentials.reduce((guest, current) => {
      if (current.username === username && current.password === password) {
        return true;
      }
      return guest;
    }, false);
  }

  validateInputs() {
    const emailInput = this.form.querySelector(`.login-form__email`);
    const passwordInput = this.form.querySelector(`.login-form__password`);
    const validationMessage = this.form.querySelector(`.login-form__validation-message`);

    if (this.validate(emailInput.value, passwordInput.value)) {
      validationMessage.innerHTML = ``;
    } else {
      validationMessage.innerHTML = `The credentials are invalid`;
    }
  }
}
