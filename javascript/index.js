const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const searchBox = document.getElementById('search');
const randomlist = body.querySelectorAll('#tab-02 .list li');
var requestURL = 'json/list.json';
var request = new XMLHttpRequest();
var songlist;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    songlist = request.response;
}

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

searchBox.addEventListener('click', function(){
    alert('아직 준비 중인 기능입니다.');
});

for(let el of randomlist){
    el.addEventListener('click', e=>{
        e.currentTarget.classList.toggle('on');
        if(e.currentTarget.getAttribute('class') == 'on'){
            addsong(songlist);
        }
        else{
            removesong(songlist);
        }
    })
}

// e.currentTarget.getAttribute('class') 클래스 가져오기

function addsong(song){
    console.log(song);
}

function removesong(song){
    console.log(song);
}