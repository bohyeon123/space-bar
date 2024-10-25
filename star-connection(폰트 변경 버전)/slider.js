document.addEventListener("DOMContentLoaded", function() {
    var resizableFontSize = 16; // 기본 폰트 크기 설정
    document.body.style.fontSize = resizableFontSize + "pt";
    document.querySelector("#size-indicator > span").innerText = resizableFontSize;

    // 버튼과 input의 기본 폰트 크기 설정
    setDefaultFontSize(resizableFontSize);

    document.getElementById("rangeslider").oninput = function() {
        resizeFont(this.value);
    }
});

function setDefaultFontSize(value) {
    // 버튼과 input 요소들의 기본 폰트 크기를 설정
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.style.fontSize = value + "pt";
    });

    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.style.fontSize = value + "pt";
    });
}

function resizeFont(value) {
    document.querySelector("#size-indicator > span").innerText = value;
    document.body.style.fontSize = value + "pt";

    // 슬라이더로 버튼과 input 요소의 폰트 크기 변경
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.style.fontSize = value + "pt";
    });

    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.style.fontSize = value + "pt";
    });
}
