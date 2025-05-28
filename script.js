const submitButton = document.getElementById("submitButton");
console.log(submitButton);

submitButton.addEventListener("click", function () {
    console.log("Button is clicked?");
    event.preventDefault();

    const inputNumber = document.getElementById("inputNumber").value
    console.log(inputNumber);
    console.log(inputNumber + inputNumber)

    const selectOptions = document.getElementById("selectOptions").value
    console.log(selectOptions)

    if (selectOptions === "pickUp") {
        // do this
    } else if (selectOptions === "deliver") {
        // do that
    } else {
        // Do something else
    }
})
