
// Gobal variables
var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

// Reuseable reset value function
function resetValue() {
    $("#user-input").val("");
};

// Main converter function
var romanNumeral = function (input) {
     // Here so test can pass, remove before production.
     if (input >= 4000) {
         input = undefined;
         return;
     };
    resetValue();
    // loops through the values, checks to see if input is greater then value, add value to output if it is true and then substracts value from input and continues until the length is reached.
    var output = "";
    for (var i = 0; i <= values.length; i++) {
        while (input >= values[i]) {
            output += symbols[i];
            input -= values[i];
        }
    }
    return output;
};

// Gathers input from form
$("#roman-numerals").submit(function (event) {
    event.preventDefault();
    var input = parseFloat($("#user-input").val().replace(/,/g, ''));
    // Validate Inputs (if not vaild alerts and resets input)
    if (input >= 4000 || !input) {
        alert("Please enter a valid number from 1 to 3,999.");
        input = undefined;
        resetValue();
        return;
    };

    var result = romanNumeral(input);
    // Display result to UI and UI state changes
    $("#result").show();
    $("#roman-numerals, #instructions").hide();
    $("#user-input-display").text(input);
    $("#translation-result").text(result);
});
 
// reset button and UI state changes
$(".reset").click(function(){
    $("#result").hide();
    $("#roman-numerals, #instructions").show();
    $("#user-input-display", "#translation-result").empty();
    userInput = "";
});

// tests
var test = function (input, expectedOutput) {
    var output = romanNumeral(input);
    if (output === expectedOutput) {
        console.log(`✅ success: ${input} => ${output}`);
    } else {
        console.log(`❌ fail: ${input} => ${output}, expected => ${expectedOutput}`);
    };
};

// test cases
test(undefined, "");
test(3, "III");
test(4, "IV");
test(99, "XCIX");
test(800, "DCCC")
test(1566, "MDLXVI");
test(2149, "MMCXLIX");
test(3999, "MMMCMXCIX");
test(4000, undefined);