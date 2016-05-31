
export default class LoginForm {
  constructor(form, email) {
    this.form = form;
    this.validCredentials = [
      { user: `aaron@theironyard.com`, password: `password123` },
      { user: `admin@google.com`, password: `pandas` },
      { user: email, password: `honeycrisp` },
    ];

    this.form.addEventListener(`submit`, (ev) => {
      ev.preventDefault();
      this.validateInputs();
    });
  }

  validate(username, password) {
    return this.validCredentials.reduce((guest, guestUser) => {
      if (guestUser.user === username && guestUser.password === password) {
        return true;
      }
      return guest;
    }, false);
  }
  validateInputs() {
    const emailInput = this.form.querySelector(`.login-form__email`).value;
    const passwordInput = this.form.querySelector(`.login-form__password`).value;
    const validationMessage = this.form.querySelector(`.login-form__validation-message`);

    if (this.validate(emailInput, passwordInput)) {
      validationMessage.innerHTML = ``;
    } else {
      validationMessage.innerHTML = `The credentials are invalid`;
    }
  }
}
