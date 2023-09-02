function x() {
  var a = 7;

  function y() {
    console.log("hello world", a);
  }
  y();
}

//closures
//Print 1 after 1 seconds ,2 after 2 seconds and so on
// This function will not work since index is global and it will replace the current index every time
function x() {
  for (var index = 1; index <= 5; index++) {
    setTimeout(function () {
      console.log(index);
    }, index * 1000);
  }
}

//x();

function printIndexAfterEachSecond() {
  
  for (let index = 1; index <= 5; index++) { 

    setTimeout(function () {
      console.log(index)

    },index*1000)
  }
}

// printIndexAfterEachSecond()


//If you want to print this only using var 
function printIndexAfterEachSecondWithVAR() {
  
  for (var index = 1; index <= 5; index++) { 

    function close(index){
      setTimeout(function () {
        console.log(index)

      }, index * 1000)
    }
    close(index)
  }
}

printIndexAfterEachSecondWithVAR()