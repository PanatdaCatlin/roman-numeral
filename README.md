[Check out live link to roman numeral](https://panatdacatlin.github.io/roman-numberal/)


Roman Numeral Specifications


Symbol  Value

I       1
V       5
X       10
L       50
C       100
D       500
M       1,000


The program omits non-integer number inputs.

Example Input: Hello.

Example Output: "Please enter numbers only."

The program can not accept a number above 3,999.

Example Input: 4000

Example Output: "Please enter a valid number from 1 to 3,999."

The program adds all symbols together to get the value of the number input.

Example Input: 3

Example Output: III

The program cannot have more than three of the same symbols in a row. Instead, it switches to subtraction.

Example Input: 4

Example Output: IV for 5(V) minus 1(I), not IIII.

The program separates ones, tens, hundreds, and thousands, unless the number is 0.

Example Input: 99

Example Output: XCIX
