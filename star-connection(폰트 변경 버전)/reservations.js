// reservations.js
function loadReservations() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser !== 'admin') {
        alert('관리자만 접근할 수 있는 페이지입니다.');
        window.location.href = 'login.html'; 
        return;
    }

    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const reservationsList = document.getElementById('reservationsList');

    if (reservations.length === 0) {
        reservationsList.innerHTML = '<p>예약된 내용이 없습니다.</p>';
    } else {
        reservations.forEach((reservation, index) => {
            reservationsList.innerHTML += `
                <div class="reservation">
                    <h3>예약 #${index + 1}</h3>
                    <p>이름: ${reservation.name}</p>
                    <p>전화번호: ${reservation.phone}</p>
                    <p>구매할 작물: ${(reservation.items && reservation.items.length > 0) ? reservation.items.join(', ') : '없음'}</p>
                    <p>--------------------------------------------------------------------</p>
                </div>
            `;
        });
    }
}

// 페이지 로드 시 예약 정보 가져오기
window.onload = loadReservations;
