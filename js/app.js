// const verseChoose = document.querySelector('select');
// const poemDisplay = document.querySelector('#cards');

// verseChoose.onchange = function() {
//    const apt = verseChoose.value;
//   updateDisplay(apt);
// };

// function updateDisplay(apt) {
//   apt = apt.replace(" ", "");
//   apt = apt.toLowerCase();
//   let url = apt + '.txt';
// //   let url = '../data.json';

//   fetch(url).then(function(response) {
//       response.text().then(function(text) {
//           poemDisplay.textContent = text;
//       });

//   });
// };

// updateDisplay('Verse 1');
// verseChoose.value = 'Verse 1';
//---------------------------------------------------------------------------------------

$(function () {
  const chooseApt = $("#choose-apartment");
  let aptDisplay = $("#cards");
  let apts = [0, 1, 2, 3, 4];

  console.log(apts);
  chooseApt.onchange = function () {
    const apt = chooseApt.value;
    updateDisplay(apt);
  };

  function  updateDisplay(apt) {

  $.getJSON("../data.json", function (data) {
    console.log(data);
    let output = "<div>";
    // poemDisplay.innerHTML = data;
    for (let i = 0; i < apts.length; i++) {
      // if(apt === apts[i]) {
           output += "<h2>" + data.aptname + "</h2>";
      // }
    // }
    $.each(data, function (key, val) {
      // console.log(key);
      // if(apts[i] === data[val]) {
      output += "<ul>";
      output += "<li>";
      // output += "<h2>" + apts[i].aptname + "</h2>";
      // output += "<h2>" + val.aptname + "</h2>";
      output += "</li>";
      output += "</ul>";
    // }
    });
    output += "</div>";
    $(aptDisplay).html(output)
  }
  });
}
// updateDisplay(apt);

  //console.log(data);
  });
