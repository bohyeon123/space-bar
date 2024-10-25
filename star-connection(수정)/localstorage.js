document.addEventListener("DOMContentLoaded", function() {
    // 로컬 스토리지에서 저장된 글자 크기를 가져옴 (없으면 기본값 16pt)
    var savedFontSize = localStorage.getItem("fontSize") || 16;
    document.body.style.fontSize = savedFontSize + "pt";
    document.querySelector("#size-indicator > span").innerText = savedFontSize;
    document.getElementById("rangeslider").value = savedFontSize;

    // 버튼과 input의 폰트 크기 설정
    setDefaultFontSize(savedFontSize);

    document.getElementById("rangeslider").oninput = function() {
        resizeFont(this.value);
    }
});

function setDefaultFontSize(value) {
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

    // 버튼과 input의 폰트 크기 변경
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.style.fontSize = value + "pt";
    });

    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.style.fontSize = value + "pt";
    });

    // 로컬 스토리지에 현재 글자 크기 저장
    localStorage.setItem("fontSize", value);
}