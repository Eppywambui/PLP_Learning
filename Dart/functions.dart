//returntype functionName(parameter1,parameter2,,,,,)

//addition
void add(int num1, double num2){
  double sum = num1 + num2;
  print("The sum is $sum");
}
void substractTwo(int num1, int num2){
  int substraction = num1 - num2;
  print("The subtraction of the two numbers is $substraction");
}
void multiplyTwo(int a, int b){
  int multiplication = a * b;
  print("The mulplication of the two numbers is: $multiplication");
}
void divideTwo(double a, double b){
  double division = a / b;
  print("The division of the two numbers is: $division");
}

void main(){
  add(23, 33.6);
  substractTwo(10,5);
  multiplyTwo(10, 2);
  divideTwo(10.2, 2);
}