document.addEventListener('DOMContentLoaded', function() {
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('signupName').value;
            const phone = document.getElementById('signupPhone').value;
            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;

            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.username === username);

            if (userExists) {
                alert('이미 존재하는 사용자입니다.');
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
            const validUser = users.find(user => user.username === username && user.password === password);

            if (validUser) {
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