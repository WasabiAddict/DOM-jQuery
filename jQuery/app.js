$("<button />").attr("id", "btn1").appendTo("body").text("Click me!");

$("#btn1").on("click", function () {
  alert("dota 2 patch notes on wednesday!");
});


$(".div1").css("background-color", "white");

$(".div1").mouseover(function () {
  const bgcArr = [
    "#9A9A00",
    "#400080",
    "#008000",
    "#FF7F50",
    "#9FE2BF",
    "#40E0D0",
    "#6495ED",
  ];
  const randomColor = bgcArr[Math.floor(Math.random() * bgcArr.length)];
  $(".div1").css("background-color", randomColor);
});

$(document).on("mouseout", function () {
  $(".div1").css("background-color", "white"); 
});

$("<p />").attr("id", "para1").appendTo(".div1").text("we love patch notes!");
$("#para1").on("click", function () {
    const bgcArr = [
        "#9A9A00",
        "#400080",
        "#008000",
        "#FF7F50",
        "#9FE2BF",
        "#40E0D0",
        "#6495ED",
      ];
      const randomColor = bgcArr[Math.floor(Math.random() * bgcArr.length)];
  $("#para1").css("color", randomColor);
});

$("<button />").attr("id", "btn2").appendTo("body").text("hit hit");

$("#btn2").on("click", function () {
    $('<div />').attr("id", "div2").appendTo("#btn2")
  $('<span />').appendTo("#div2").text(' Dota 2 Yay!');

});
$('#btn3').on("click", function() {
    const friends = ["omniknight", "tidehunter", "dawnbreaker", "spectre", "bane", "night stalker", "dark seer", "pangolier", "elder titan", "phantom assassin", "axe"];
    for(let i = 0; i < friends.length; i++) {
     let name = friends[i];
     $('<li />').appendTo('#list').text(name);
 
    }

  }); 