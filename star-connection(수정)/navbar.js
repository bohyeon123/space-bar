
document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
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
    document.body.style.fontSize = value + "pt";  // body의 폰트 크기를 조정
}