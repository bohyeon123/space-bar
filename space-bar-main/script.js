// 게시글 저장 함수
function savePost(productName, productPrice, productImage, productDescription) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = {
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription,
    };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    alert('게시글이 저장되었습니다.');
    displayPosts();  // 새로운 게시글 저장 후, 게시글 목록을 다시 렌더링
}

// 게시글 목록을 화면에 보여주는 함수
function displayPosts() {
    const postList = document.getElementById('postList');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    postList.innerHTML = ''; // 이전 게시글 목록을 초기화

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${post.name}</h3>
            <img src="${post.image}" alt="${post.name}" style="max-width: 200px;">
            <p>가격: ${post.price}원</p>
            <p>설명: ${post.description}</p>
        `;

        postList.appendChild(postElement);
    });
}

// 판매자용 페이지에서 게시글 제출 처리
document.getElementById('sellerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').files[0];
    const productDescription = document.getElementById('productDescription').value;

    if (productImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const productImageUrl = e.target.result;
            savePost(productName, productPrice, productImageUrl, productDescription);
        };
        reader.readAsDataURL(productImage);
    }
});

// 페이지 로드 시 저장된 게시글을 표시
window.onload = function() {
    displayPosts();
};
