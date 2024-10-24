document.addEventListener('DOMContentLoaded', function() {
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('signupName').value;
            const phone = document.getElementById('signupPhone').value;
            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;

            // 이름: 한글만 허용 (정규표현식)
            const nameRegex = /^[가-힣]+$/;
            if (!nameRegex.test(name)) {
                alert('이름은 한글만 입력 가능합니다.');
                return;
            }

            // 전화번호: 010-****-**** 형식 확인
            const phoneRegex = /^010\d{8}$/;
            if (!phoneRegex.test(phone)) {
                alert('전화번호는 010******** 형식으로 입력해야 합니다.');
                return;
            }

            // 아이디: 한글 포함 불가, 6자 이상
            const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
            if (!usernameRegex.test(username)) {
                alert('아이디는 최소 6자 이상이어야 하며, 한글은 사용할 수 없습니다.');
                return;
            }

            // 비밀번호: 6자 이상
            if (password.length < 6) {
                alert('비밀번호는 최소 6자 이상이어야 합니다.');
                return;
            }

            // 사용자 중복 확인
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.username === username);
            const phoneExists = users.some(user => user.phone === phone); 

            if (userExists) {
                alert('이미 존재하는 사용자입니다.');
            } else if (phoneExists) {
                alert('이미 등록된 핸드폰 번호입니다.');
            } else {
                users.push({ name: name, phone: phone, username: username, password: password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('회원가입이 완료되었습니다.');
                window.location.href = 'login.html'; 
            }

            signupForm.reset();
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            // 관리자 아이디 추가
            const adminUsername = "admin"; // 관리자 아이디
            const adminPassword = "admin123"; // 관리자 비밀번호

            // 일반 사용자 및 관리자 확인
            const validUser = users.find(user => user.username === username && user.password === password);
            if (username === adminUsername && password === adminPassword) {
                alert('관리자 로그인 성공!');
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'admin.html'; // 관리자 페이지로 이동
            } else if (validUser) {
                alert('로그인 성공!');
                localStorage.setItem('loggedInUser', username); 
                window.location.href = 'welcome.html'; 
            } else {
                alert('사용자 이름 또는 비밀번호가 잘못되었습니다.');
            }

            loginForm.reset();
        });
    }
});

// 글자 크기 조절 기능
document.addEventListener("DOMContentLoaded", function(){
    
    var resizableFontSize = 16;
    document.body.style.fontSize = resizableFontSize + "pt";
    document.querySelector("#size-indicator > span").innerText = resizableFontSize;

    document.getElementById("rangeslider").oninput = function(){
        resizeFont(this.value);
    }
});

function resizeFont(value) {
    document.querySelector("#size-indicator > span").innerText = value;
    document.body.style.fontSize = value + "pt";  
}
