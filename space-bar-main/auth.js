document.addEventListener('DOMContentLoaded', function() {
    // 회원가입 처리 함수
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;

            // 사용자 정보를 localStorage에 저장
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.username === username);

            if (userExists) {
                alert('이미 존재하는 사용자입니다.');
            } else {
                users.push({ username: username, password: password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('회원가입이 완료되었습니다.');
                window.location.href = 'login.html'; // 회원가입 후 로그인 페이지로 이동
            }

            signupForm.reset();
        });
    }

    // 로그인 처리 함수
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const validUser = users.find(user => user.username === username && user.password === password);

            if (validUser) {
                alert('로그인 성공!');
                localStorage.setItem('loggedInUser', username); // 로그인 성공 시 사용자 정보 저장
                window.location.href = 'welcome.html'; // 로그인 성공 시 환영 페이지로 이동
            } else {
                alert('사용자 이름 또는 비밀번호가 잘못되었습니다.');
            }

            loginForm.reset();
        });
    }
});
