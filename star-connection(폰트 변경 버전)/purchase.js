// purchase.js

function displayPurchaseInfo() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (!product) {
        alert('선택한 상품이 없습니다.');
        return;
    }

    const purchaseInfo = document.getElementById('purchaseInfo');
    purchaseInfo.innerHTML = `
        <h2>${product.name}</h2>
        <p>가격: ${product.price}원</p>
        <p>설명: ${product.description}</p>
        <p>판매자: ${product.seller}</p>
        <img src="${product.image}" alt="${product.name}" width="200"><br>
    `;  
}

// 페이지 로드 시 구매 정보 표시
window.onload = function() {
    displayPurchaseInfo();
};
