let total = 0
document.querySelector('#calculate').addEventListener('click', run)
document.querySelector('#remove').addEventListener('click', clearIt)


function run() {
  let handicap = document.querySelector('#handicapIndex').value
  let slope = document.querySelector('#slopeRating').value
  let course = document.querySelector('#courseRating').value
  let parScore = document.querySelector('#par').value
  total = handicap * (slope / 113) + (course - parScore)

  document.querySelector('#placeToPutResult').innerText = Math.round(total)
}
function clearIt() {
  document.getElementById("handicapIndex").value = "";
  document.getElementById("slopeRating").value = "";
  document.getElementById("courseRating").value = "";
  document.getElementById("par").value = "";
  document.querySelector('#placeToPutResult').innerText = "";
}






