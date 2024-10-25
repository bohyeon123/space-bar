// admin.js

function displayPurchases() {
    const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
    const purchasesList = document.getElementById('purchasesList');

    if (purchases.length === 0) {
        purchasesList.innerHTML = '<p>구매 기록이 없습니다.</p>';
        return;
    }

    purchases.forEach(purchase => {
        const purchaseItem = document.createElement('div');
        purchaseItem.innerHTML = `
            <h3>${purchase.productName}</h3>
            <p>가격: ${purchase.price}원</p>
            <p>구매 시간: ${purchase.purchaseTime}</p>
            <p>구매자: ${purchase.user.name}, 전화번호: ${purchase.user.phone}</p>
            <p>--------------------------------------------------------------------</p>
            <hr>
        `;
        purchasesList.appendChild(purchaseItem);
    });
}

// 페이지 로드 시 구매 정보 표시
window.onload = function() {
    displayPurchases();
};
