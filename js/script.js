$(document).ready(function () {
    // Stores inputs from the user.
    var inputs = [""];
    // Store the current total.
    var totalOperation;
    // Operators array to validate without the ".".
    var operators1 = ["+", "*", "-", "/"];
    // Operators array to validate the ".".
    var operators2 = ["."];
    // Numbers for validation.
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    // Fire buttons events.
    $("a").on("click", function () {
        console.log(this.id)
        if (this.id === "ac") {
            inputs = [""];
            updateResult();
        } else if (this.id === "ce") {
            inputs.pop();
            updateResult();
        } else if (this.id === "getResult") {
            getTotal();
        } else {
            getValue(this.id);
        }
    });

    // Get the total value.
    function getTotal() {
        totalOperation = inputs.join('');
        console.log(inputs)
        $('#result').html(eval(totalOperation).toFixed(2));
    }
    // Update the inputs into the result space.
    function updateResult() {
        totalOperation = inputs.join('');
        $('#result').html(totalOperation);

        // To reset the calc to 0 when all is deleted.
        if (inputs.length == 1 || inputs.length == 0)
            $("#result").html(0);
    }
    // Get the value.
    function getValue(input) {
        if (inputs.length == 1 && (input == '.' || operators1.indexOf(input) > -1)) {
            console.log('Duplicated dots');

        } else if (nums.includes(Number(input))) {

            inputs.push(input);

        } else if ((operators1.includes(inputs[inputs.length - 1]) == true ||
                operators2.includes(inputs[inputs.length - 1]) == true)) {

        } else if (input == '.' && (inputs.indexOf('.') > 1)) {

            console.log('duplicate')

        } else {

            inputs.push(input);

        }
        updateResult();
    }

    // Use keyboard to work with the calculator.
    $(window).on('keyup', function (e) {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case 96:
                $('#0').click();
                break;
            case 97:
                $('#1').click();
                break;
            case 98:
                $('#2').click();
                break;
            case 99:
                $('#3').click();
                break;
            case 100:
                $('#4').click();
                break;
            case 101:
                $('#5').click();
                break;
            case 102:
                $('#6').click();
                break;
            case 103:
                $('#7').click();
                break;
            case 104:
                $('#8').click();
                break;
            case 105:
                $('#9').click();
                break;
            case 48:
                $('#0').click();
                break;
            case 49:
                $('#1').click();
                break;
            case 50:
                $('#2').click();
                break;
            case 51:
                $('#3').click();
                break;
            case 52:
                $('#4').click();
                break;
            case 53:
                $('#5').click();
                break;
            case 54:
                $('#6').click();
                break;
            case 55:
                $('#7').click();
                break;
            case 56:
                $('#8').click();
                break;
            case 57:
                $('#9').click();
                break;
            case 106:
                $('.multiply').click();
                break;
            case 107:
                $('.add').click();
                break;
            case 109:
                $('.substract').click();
                break;
            case 111:
                $('.devide').click();
                break;
            case 8:
                inputs.pop();
                updateResult();
                break;
            case 46:
                inputs = [""];
                updateResult();
                break;
            case 13:
                getTotal();
                break;
            case 187:
                getTotal();
                break;
            case 190:
                $('.point').click();
                break;
            case 110:
                $('.point').click();
                break;
            case 189:
                $('.substract').click();
                break;

            default:
                break;
        }
    })

})