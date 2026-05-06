/**
 * @jest-environment jsdom
 */

function montarDOM() {
  document.body.innerHTML = `
    <form id="form">
      <div class="form-control">
        <input type="text" id="username" />
        <small>Error message</small>
      </div>

      <div class="form-control">
        <input type="text" id="email" />
        <small>Error message</small>
      </div>

      <div class="form-control">
        <input type="password" id="password" />
        <small>Error message</small>
      </div>

      <div class="form-control">
        <input type="password" id="password2" />
        <small>Error message</small>
      </div>

      <button type="submit">Submit</button>
    </form>
  `;
}

describe('Testes do formulário', () => {
  let validator;
  let username;
  let email;
  let password;
  let password2;

  beforeEach(() => {
    jest.resetModules();
    montarDOM();

    validator = require('../script');

    username = document.getElementById('username');
    email = document.getElementById('email');
    password = document.getElementById('password');
    password2 = document.getElementById('password2');
  });

  test('deve mostrar erro quando campos obrigatórios estiverem vazios', () => {
    const resultado = validator.checkRequired([
      username,
      email,
      password,
      password2
    ]);

    expect(resultado).toBe(true);
    expect(username.parentElement.className).toBe('form-control error');
    expect(email.parentElement.className).toBe('form-control error');
    expect(password.parentElement.className).toBe('form-control error');
    expect(password2.parentElement.className).toBe('form-control error');
  });

  test('deve validar campos obrigatórios preenchidos', () => {
    username.value = 'Arthur';
    email.value = 'arthur@email.com';
    password.value = '123456';
    password2.value = '123456';

    const resultado = validator.checkRequired([
      username,
      email,
      password,
      password2
    ]);

    expect(resultado).toBe(false);
    expect(username.parentElement.className).toBe('form-control success');
    expect(email.parentElement.className).toBe('form-control success');
    expect(password.parentElement.className).toBe('form-control success');
    expect(password2.parentElement.className).toBe('form-control success');
  });

  test('deve mostrar erro quando username tiver menos que 3 caracteres', () => {
    username.value = 'Ar';

    validator.checkLength(username, 3, 15);

    expect(username.parentElement.className).toBe('form-control error');
    expect(username.parentElement.querySelector('small').innerText)
      .toBe('Username must be at least 3 characters');
  });

  test('deve mostrar erro quando username tiver mais que 15 caracteres', () => {
    username.value = 'ArthurSouzaDevTeste';

    validator.checkLength(username, 3, 15);

    expect(username.parentElement.className).toBe('form-control error');
    expect(username.parentElement.querySelector('small').innerText)
      .toBe('Username must be less than 15 characters');
  });

  test('deve validar username com tamanho correto', () => {
    username.value = 'Arthur';

    validator.checkLength(username, 3, 15);

    expect(username.parentElement.className).toBe('form-control success');
  });

  test('deve mostrar erro para e-mail inválido', () => {
    email.value = 'email-invalido';

    validator.checkEmail(email);

    expect(email.parentElement.className).toBe('form-control error');
    expect(email.parentElement.querySelector('small').innerText)
      .toBe('Email is not valid');
  });

  test('deve validar e-mail correto', () => {
    email.value = 'arthur@email.com';

    validator.checkEmail(email);

    expect(email.parentElement.className).toBe('form-control success');
  });

  test('deve mostrar erro quando as senhas forem diferentes', () => {
    password.value = '123456';
    password2.value = '654321';

    validator.checkPasswordsMatch(password, password2);

    expect(password2.parentElement.className).toBe('form-control error');
    expect(password2.parentElement.querySelector('small').innerText)
      .toBe('Passwords do not match');
  });

  test('deve mostrar mensagem de erro no DOM', () => {
    validator.showError(username, 'Campo inválido');

    expect(username.parentElement.className).toBe('form-control error');
    expect(username.parentElement.querySelector('small').innerText)
      .toBe('Campo inválido');
  });

  test('deve mostrar sucesso no DOM', () => {
    validator.showSuccess(username);

    expect(username.parentElement.className).toBe('form-control success');
  });
});