function setButtonEvent() {
    const signinButton = document.querySelector(".button-blue");
    signinButton.onclick = handleSigninOnClick;
}

function handleSigninOnClick() {
    const usernameInput = document.querySelector(".input-box1").value;
    const passwordInput = document.querySelector(".input-box2").value;
    
    const boardDatas = JSON.parse(localStorage.getItem("boardDatas")) || [];
    const user = boardDatas.find(user => user.username === usernameInput && user.password === passwordInput);
    
    if (user) {
        alert("로그인 성공");
    } else {
        alert("로그인 실패");
    }
}

setButtonEvent();
