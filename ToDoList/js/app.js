let input = document.getElementById('input');
let button = document.getElementById('button');
let list = document.getElementById('list');
let del = 1;

button.addEventListener('click', clickButton);

function clickButton() {
  let temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+del);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+del+")' id='input-radio'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style='fill: green;'><path d='M0 11.522l1.578-1.626 7.734 4.619 13.335-12.526 1.353 1.354-14 18.646z'/></svg></button>";

  list.appendChild(temp);
  del++;
  // 시간 딜레이 (인풋 값 초기화)
  setTimeout(function() {
  document.getElementById('input').value= null
}, 1);
}

function remove(del) {
  //window.alert(del);
  let li = document.getElementById('li'+del);
  list.removeChild(li);
}


// // 첫 글자 공백만 사용 못 하게
// function noSpaceForm2() {                        
//   if(obj.value == " "){
//     alert("해당 항목에는 공백을 사용할 수 없습니다.\n\n공백 제거됩니다.");
//     obj.focus();
//     obj.value = obj.value.replace(' ','');  // 공백 제거
//     return false;
//   }
// }