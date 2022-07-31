document.write("<h1> Simple calculator app </h1>")

var a, b, operator;

function enterTwoNumbers() {
 a = Number(prompt("Enter first number:"));
 operator = prompt("Enter operation like +,-,*,/ or % ");
 b = Number(prompt("Enter second number:"));
}

enterTwoNumbers();

function check() {
 switch (operator) {
  case "+":
   document.write(
    " Addition of two numbers is:" + a + "+" + b + " = "
   );
   document.write(a + b);
   break;
  case "-":
   document.write(
    " Addition of two numbers is:" + a + "-" + b + " = "
   );
   document.write(a - b);
   break;
  case "*":
   document.write(
    " Multiplication of two numbers is:" +
     a +
     "*" +
     b +
     " = "
   );
   document.write(a * b);
   break;
  case "/":
   document.write(
    " Division of two numbers is:" + a + "/" + b + " = "
   );
   document.write(
    b != 0
     ? a / b
     : "Not possible to divide by zero"
   );
   break;
  case "%":
   document.write(
    " Remainder of division of two numbers is of two numbers is:" +
     a +
     "%" +
     b +
     " = " 
   );
   document.write(
    secondNumber != 0
     ? a % b
     : "Not possible to divide by zero"
   );
   break;
  default:
   document.write("You have inputed wrong operation");
   break;
 }
}
check();

