const toggleBtn = document.querySelector('.nav_toggle');
const menu = document.querySelector('.nav_menu');
const footerBtn = document.querySelector('.window_icon');
const footer = document.querySelector('.footerbar')

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});

footerBtn.addEventListener('click', ()=>{
    footer.classList.toggle('active');
});

window.onload = function(){
    var myDate;
    var year;
    var month;
    var date;
    var day;
    var hour;
    var minute;
    var second;
    var ampm;
    // 배열 생성
    var myDay = ["일", "월", "화", "수", "목", "금", "토"];

    // 사용자 정의 함수 myTime 선언
    var myTime = function () {
        myDate = new Date();
        year = myDate.getFullYear();
        month = myDate.getMonth() + 1;
        date = myDate.getDate();
        day = myDate.getDay();
        hour = myDate.getHours();
        minute = myDate.getMinutes();
        second = myDate.getSeconds();

        if (hour < 13) {
            ampm = "오전";
        } else {
            ampm = "오후";
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        if(month < 10){
            month = "0" + month
        }
        if(date < 10){
            date = "0" + date
        }

        document.getElementById("time_text2").innerText = year + "-" +  month + "-" + date;
        document.getElementById("time_text1").innerText =  ampm + hour + ":" + minute;

    }
    // 반복 함수
    setInterval(function () {
        // 함수 호출
        myTime();
    }, 1000);
}