// js file

const goBtn = document.querySelector('#go-btn'); 
const closeBtn = document.querySelector('#close-btn');
const shareBtn = document.querySelector('#share-btn');
const loading = document.querySelector('.result-loading');

const resultBtn = document.querySelector('#contents__result'); 
const result = document.querySelector('#result-modal');
const modal = document.querySelector("#msg-modal");

function calculator() {
  const fieldValue = document.querySelector("#field-input");
  let timeValue = document.querySelector("#time-input");
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector("#field-output");
  const timeResult = document.querySelector("#time-output");


  if (fieldValue.value == "") {
      alert('어떤 분야의 전문가가 되고 싶으신가요?');
      fieldValue.focus();
      return false;
  } else if (timeValue.value == "") {
      alert('시간이 입력되지 않았습니다.');
      timeValue.focus();
      return false;
  } else if (timeValue_int > 24) {
      alert('잘못된 값입니다. 24 이하의 값을 입력해 주세요.');
      return false;
  }

  result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(function() {
      loading.style.display = "none";
      result.style.display = "flex";
      fieldResult.innerText = fieldValue.value;
      timeResult.innerText = parseInt((10000/timeValue_int), 10);
  }, 1800);   
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
};

function shareUrl() {
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 복사 되었습니다!");
  });
}

shareBtn.addEventListener('click', shareUrl);
goBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
resultBtn.addEventListener('click', calculator);