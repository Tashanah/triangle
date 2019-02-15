function getValues() {
  var side1=parseInt(document.getElementById('side1').value);
  var side2=parseInt(document.getElementById('side2').value);
  var side3= parseInt(document.getElementById('side3').value);
  var sides= [side1, side2, side3];

  if((sides[0] === sides[1])&&(sides[1]===sides[2])) {
    alert("This is an Equilateral Triangle");
  }else if((sides[0] >(sides[1]+sides[2]))||(sides[1]>(sides[0] +sides[2]))||(sides[2]>(sides[0] + sides[1]))) {
    alert("This is an NOT a Triangle");
  }else if((sides[0]===sides[1])||(sides[0]===sides[2])||(sides[1]===sides[2])) {
    alert("This is an Isosceles Triangle");
  }else if((sides[0]!==sides[1]!==sides[2])&&(sides[0]+sides[1]>sides[2])||(sides[1]+side3>sides[0])||(sides[0]+sides[2]>sides[1])){
    alert("This is an Isosceles Triangle");
  }else{
    alert("Please enter new triangle lengths");
  }
}

















































// function getValues() {
//   var side1 = parseInt(document.getElementById('side1').value);
//   var side2 = parseInt(document.getElementById('side2').value);
//   var side3 = parseInt(document.getElementById('side3').value);
//   var sides = [side1, side2, side3];
//
//
//   if ((side1 > (side2 + side3)) || (side2 > (side1 + side3)) || (side3 > (side1 + side2))) {
//     alert("This is an NOT a Triangle");
//   } else if ((side1 === side2) && (side2 === side3)) {
//     alert("This is an Equilateral Triangle");
//   } else if ((side1=== side2) || (side1 === side3) || (side2 === side3)) {
//     alert("This is an Isosceles Triangle");
//   } else if ((side1 !== side2 !== side3) && (side1 + side2 > side3) || (side2 + side3 > side1) || (side1 + side3 > side2)) {
//     alert("This is an Scalene Triangle");
//   } else {
//     alert("Please enter new triangle lengths");
