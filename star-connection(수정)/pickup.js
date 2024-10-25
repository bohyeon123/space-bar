    // 예약 관련 이벤트 처리
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("sub").value.trim();
    const phoneNumber = document.getElementById("phone").value.trim();
    const messageBox = document.getElementById("message");

    // 이름 유효성 검사 (한글만 허용)
    const nameRegex = /^[가-힣]+$/;
    if (!nameRegex.test(userName)) {
        messageBox.innerText = "이름은 한글만 입력해야 합니다.";
        messageBox.style.color = "red"; // 오류 메시지 색상
        return;
    }

    // 전화번호 유효성 검사 (010-****-**** 형식만 허용)
    const phoneRegex = /^010\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
        messageBox.innerText = "전화번호는 010******** 형식이어야 합니다.";
        messageBox.style.color = "red"; // 오류 메시지 색상
        return;
    }

    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const isPhoneNumberExists = reservations.some(reservation => reservation.phone === phoneNumber);
    
    if (isPhoneNumberExists) {
        messageBox.innerText = "이미 예약된 전화번호입니다.";
        messageBox.style.color = "red"; // 오류 메시지 색상
        return;
    }

    // 선택한 작물 가져오기
    const selectedProducts = [];
    if (document.getElementById("choice1").checked) {
        selectedProducts.push("표고버섯");
    }
    if (document.getElementById("choice2").checked) {
        selectedProducts.push("사과");
    }

    if (selectedProducts.length === 0) {
        messageBox.innerText = "최소 하나의 작물을 선택해 주세요.";
        messageBox.style.color = "red"; // 오류 메시지 색상
        return;
    }

    // 예약 데이터 저장
    const reservationData = {
        name: userName,
        phone: phoneNumber,
        items: selectedProducts, 
        date: new Date().toLocaleString() // 예약 일자
    };

    reservations.push(reservationData);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    messageBox.style.color = "green"; // 성공 메시지 색상
    messageBox.innerText = "예약이 성공적으로 완료되었습니다!";

    // 예약 완료 후 폼 초기화
    document.getElementById("reservationForm").reset();
});


