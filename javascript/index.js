const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const searchBox = document.getElementById('search');
const randomlist = document.querySelectorAll('#tab-02 .list li');
const ul = document.querySelector('#songlist');
var requestURL = 'json/list.json';
var request = new XMLHttpRequest();
var songlist;
var list = [];
var count = 0;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    songlist = request.response;
}

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

searchBox.addEventListener('click', function () {
    alert('아직 준비 중인 기능입니다.');
});

for (let el of randomlist) {
    el.addEventListener('click', e => {
        e.currentTarget.classList.toggle('on');
        if (e.currentTarget.getAttribute('class') == 'dlc on') {
            addsong(songlist, e.currentTarget.getAttribute('id'));
        }
        else {
            removesong(songlist, e.currentTarget.getAttribute('id'));
        }
    });
}
// e.currentTarget.getAttribute('class') 클래스 가져오기

function addsong(song, id) {
    Object.keys(song['songs'][id]).forEach(function (key) {
        const li = document.createElement('li');
        li.setAttribute('class', id);
        const text = document.createTextNode(song['songs'][id][key]['title']);
        li.appendChild(text);
        ul.appendChild(li);
    });
    list.push(id);
    count++;
}

function removesong(song, id) {
    Object.keys(song['songs'][id]).forEach(function (key) {
        const li = document.querySelectorAll('#songlist .' + id);
        li[0].remove();
    });
    removeArray(id);
}

function removeArray(id) {
    var idx = list.indexOf(id);
    if(idx > -1){
        list.splice(idx, 1);
    }
}

function clearSong(id) {
    
}

/*
public boolean removeItem(int x) {
    int k = 0;
    while (k < numItems && item[k] != x) {//0번 인덱스부터item의 원소와 비교, 다르면 인덱스 증가
        k++;
        if (k == numItems) //k가 마지막 원소를 지나쳐서 원소가 없는 배열 끝에 왔다면, => 같은 원소 없음
            return false;
        else {
            for (int i = k; i <= numItems - 2; i++){
                item[i] = item[i + 1]; //좌시프트
            }
            numItems--;
            return true;
        }
    }
}
*/