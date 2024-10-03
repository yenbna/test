document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Очистка предыдущих фидбэков
    document.getElementById('feedback').textContent = '';

    // Получаем значения полей
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Проверяем, заполнены ли все поля
    if (!fullName || !email || !password) {
        document.getElementById('feedback').textContent = 'Please fill in all the fields';
        isValid = false;
    }

    // Проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('feedback').textContent = 'You entered your email incorrectly';
        isValid = false;
    }

    // Проверка длины пароля
    if (password.length < 6) {
        document.getElementById('feedback').textContent = 'The password must be at least 6 characters long';
        isValid = false;
    }

    // Если все валидно
    if (isValid) {
        document.getElementById('feedback').textContent = 'Registered successfully!';
    }
});
