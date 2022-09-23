const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const searchBox = document.getElementById('search');
const randomlist = body.querySelectorAll('#tab-02 .list li');
const ul = document.getElementById('songlist');
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
            addsong(songlist, e.currentTarget.getAttribute('id'));
        }
        else{
            removesong(songlist, e.currentTarget.getAttribute('id'));
        }
    });
}
// e.currentTarget.getAttribute('class') 클래스 가져오기

function addsong(song, id){
    Object.keys(song['songs'][id]).forEach(function(key){
        const li = document.createElement('li');
        li.setAttribute('class', id);
        const text = document.createTextNode(song['songs'][id][key]['title']);
        li.appendChild(text);
        ul.appendChild(li);
    });
}

function removesong(song, id){
    Object.keys(song['songs'][id]).forEach(function(key){
        const li = document.querySelectorAll('#songlist li');
        Object.keys(li).forEach(function(){
            this.remove();
        });
    });
}