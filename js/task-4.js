const loginForm = document.querySelector('.login-form');

if (!loginForm) {
  console.error('Login form not found');
  throw new Error('Login form not found');
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email')?.value.trim();
    const password = document.getElementById('password')?.value.trim();

    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }

    const userData = { email, password };
    console.log(userData);

    loginForm.reset();
  });
});
