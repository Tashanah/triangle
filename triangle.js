
function getValues() {
      var side1 = parseInt(document.getElementById('side 1').value);

      function getValues() {
        var side1 = parseInt(document.getElementById('side 1').value);
        var side2 = parseInt(document.getElementById('side 2').value);
        var side3 = parseInt(document.getElementById('side 3').value);
        var sides = [side 1, side 2, side 3]

        if ((side 1+ side 2) <= side 3 || (side 1 + side 3) <= side 2 || (side 2 + side 3) <= side 1) {
          alert("Your shape is not a triangle");
        } else if ((side 1 === side 2) && (side 1 === side 3) && (side 2 === side 3)) {
          alert("The sides you gave, " + sides[0] + " " + sides[1] + " " + sides[2] + ", make up an equilateral triangle");
        } else if ((side 1 === side 3) && (side 2!= side 1) || (side 1 === side 2) && (side 3 != side 1) || (side 2 === side 3) && (side2 != side 1)) {
          alert("The sides you gave, " + sides[0] + " " + sides[1] + " " + sides[2] + ", make up an isoceles triangle");
        } else {
          alert("The sides you gave, " + sides[0] + " " + sides[1] + " " + sides[2] + ", make up a scalene triangle");
        }
      }
