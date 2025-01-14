let boardInputDatas = {
    id: 0,
    username: "",
    password: "",
}

function setInputsEvent() {
    const usernameInput = document.querySelector(".input-box1");
    const passwordInput = document.querySelector(".input-box2");
    usernameInput.onkeyup = handleBoardInputOnChange;
    passwordInput.onkeyup = handleBoardInputOnChange;
}

function setButtonEvent() {
    const signupButton = document.querySelector(".button-blue");
    signupButton.onclick = handleSignupOnClick;
}

function handleSignupOnClick() {
    saveBoard();
    clear();
}

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.name]: e.target.value,
    };
}

function saveBoard() {
    let boardDatas = !!localStorage.getItem("boardDatas")
    ? JSON.parse(localStorage.getItem("boardDatas"))
    : [];

    if (boardDatas.length > 0) {
        boardInputDatas.id = boardDatas[boardDatas.length - 1].id + 1;
    }

    boardDatas = [
        ...boardDatas,
        boardInputDatas,
    ]

    localStorage.setItem("boardDatas", JSON.stringify(boardDatas));
    alert("회원가입 성공! 로그인 페이지로 이동합니다.");
    location.href = "./signin-index.html"
}

function clear() {
    const usernameInput = document.querySelector(".input-box1");
    const passwordInput = document.querySelector(".input-box2");
    const inputs = [usernameInput, passwordInput];
    inputs.forEach(input => input.value = "");

    boardInputDatas = {
        username: "",
        password: "",
    };
}

setInputsEvent();
setButtonEvent();
