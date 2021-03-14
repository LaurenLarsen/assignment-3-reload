/*Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
####### */


function makeTriangle(shape) {
    var triangle = "";
    for (let i = 1; i <= shape; i++) {
      for (let j = 1; j <= i; j++) {
        triangle += "#";
  
      }
      triangle += "\n";
    }
    return triangle;
  }
  console.log(makeTriangle(7));