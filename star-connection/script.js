
function savePost(productName, productPrice, productImage, productDescription, sellerName) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = {
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription,
        seller: sellerName,  
    };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    alert('게시글이 저장되었습니다.');
    window.location.href = 'bb.html';
}


document.getElementById('sellerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').files[0];
    const productDescription = document.getElementById('productDescription').value;
    
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.username === loggedInUser);
    const sellerName = currentUser ? currentUser.name : '알 수 없음';

    if (productImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const productImageUrl = e.target.result;
            savePost(productName, productPrice, productImageUrl, productDescription, sellerName);
        };
        reader.readAsDataURL(productImage);
    }
});
