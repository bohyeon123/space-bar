// 게시글 목록을 화면에 보여주는 함수
function displayProducts() {
    const productList = document.getElementById('productList');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    productList.innerHTML = ''; // 게시글 목록 초기화

    if (posts.length === 0) {
        productList.innerHTML = '<p>현재 판매 중인 농산물이 없습니다.</p>';
    } else {
        posts.forEach(post => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
                <h3>${post.name}</h3>
                <img src="${post.image}" alt="${post.name}" style="max-width: 200px;">
                <p>가격: ${post.price}원</p>
                <p>설명: ${post.description}</p>
                <button class="buy-button">구매하기</button>
            `;

            productList.appendChild(productElement);
        });
    }
}

// 페이지가 로드되면 저장된 제품들을 보여줌
window.onload = function() {
    displayProducts();
};
