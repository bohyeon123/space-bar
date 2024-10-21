// 저장된 게시글을 불러와 검색을 처리
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    searchProducts(query);
});

function searchProducts(query) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // 이전 검색 결과 초기화

    if (query === '') {
        searchResults.innerHTML = '<p>검색어를 입력하세요.</p>';
        return;
    }

    const filteredPosts = posts.filter(post => post.name.toLowerCase().includes(query));

    if (filteredPosts.length > 0) {
        filteredPosts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';

            postDiv.innerHTML = `
                <h2>${post.name}</h2>
                <p>가격: ${post.price}원</p>
                <p>설명: ${post.description}</p>
                <p>판매자: ${post.seller}</p>
                <img src="${post.image}" alt="${post.name}" width="200"><br>
                <button onclick="purchaseProduct('${post.name}')">구매하기</button>
            `;

            searchResults.appendChild(postDiv);
        });
    } else {
        searchResults.innerHTML = '<p>검색 결과가 없습니다.</p>';
    }
}

// 상품 구매 버튼 클릭 시 구매 페이지로 이동
function purchaseProduct(productName) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const product = posts.find(post => post.name === productName);

    // 선택한 상품 정보를 localStorage에 저장
    localStorage.setItem('selectedProduct', JSON.stringify(product));

    // 구매 페이지로 이동
    window.location.href = 'purchase.html';
}
