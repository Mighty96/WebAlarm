let addScheduleButton = document.getElementById("addSchedule");
let scheduleContainer = document.getElementById("scheduleContainer");
let textField = document.getElementById("textField");
let timeField = document.getElementById("timeField");
var count = 0;
var arrs = new Array();
var myVar = setInterval(myTimer, 1000);

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return hrs + ":" + mins + ":" + secs;
}

function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

function myTimer() {
  let test = document.getElementById("test");
  var d = new Date();
  var paragraphs = document.createElement("p");
  paragraphs.id = "test";
  if (arrs !== undefined) {
    for (i = 0; i < arrs.length; i++) {
      if (arrs[i] !== undefined) {
        var date = new Date(arrs[i].time);
        var paragraph = document.createElement("p");
        paragraph.classList.add("paragraph-styling");
        paragraph.id = arrs[i].no;
        if (date.getTime() - d.getTime() > 0) {
          paragraph.innerText = `내용:${arrs[i].text}
          남은시간:${msToTime(date.getTime() - d.getTime())}
          목표시간:${date.toLocaleTimeString()}
          `;
          paragraphs.appendChild(paragraph);
        } else {
          playSound("./Alarm01.wav");
          swal(`${arrs[i].text}`);
          delete arrs[i];
        }
      }
    }
    scheduleContainer.removeChild(test);
    scheduleContainer.appendChild(paragraphs);
  }
}

addScheduleButton.addEventListener("click", function () {
  arr = {
    no: count,
    text: textField.value,
    time: timeField.value,
    isLeft: true,
  };
  count++;
  textField.value = "";
  timeField.value = "";
  arrs.push(arr);
  /*
  var paragraph = document.createElement("p");

  var date = new Date(timeField.value);
  var remain = dat()}:${date.getMinutes()}:${date.getSeconds()}\n`;
  scheduleContainer.appende.getTime() - myTimer().getTime();
  var remain_h = parseInt(remain / (60 * 60 * 1000));
  remain = remain % (60 * 60 * 1000);
  var remain_m = parseInt(remain / (60 * 1000));
  remain = remain % (60 * 1000);
  var remain_s = parseInt(remain / 1000);
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = `내용 : ${textField.value}
  남은시간 : ${remain_h}:${remain_m}:${remain_s}
  알람시간 : ${date.getHoursChild(paragraph);

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line";
  });
  */
});
