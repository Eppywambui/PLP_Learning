//Write a function called divideTwo that takes two numbers as arguments 
//and returns the quotient of those two numbers.
double divideTwo(double a, double b){
  if (b == 0){
    throw ArgumentError('Division by zero is not allowed');
  }
  return a / b;
}

//Write a function called stringLength that takes an argument of type String 
//and returns the length of that string.
int stringLength(String str) {
  return str.length;
}

//Write a function called getFirstElement that takes a list as an argument 
//and returns the first element of that list.
dynamic getFirstElement(List list) {
  if (list.isEmpty) {
    throw ArgumentError('List is empty');
  }
  return list[0];
}
void main() {
  print(divideTwo(15, 5));
  print(stringLength("Hello"));
  print(getFirstElement([1, 2, 3]));
}