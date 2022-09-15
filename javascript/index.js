const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const searchBox = document.getElementById('search');
const login = document.getElementById('login');
const logout = document.getElementById('logout');
var sign = false;


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

searchBox.addEventListener('click', function(){
    alert('아직 준비 중인 기능입니다.');
})
/*
function signin(){
    if(sign){
        login.style.display = 'flex';
        logout.style.display = 'none';
    }
    else{
        login.style.display = 'none';
        logout.style.display = 'flex';
    }
}
signin();
*/

logout.addEventListener('click', function(e){
    e.preventDefault();
    alert('아직 준비 중인 기능입니다.');
})