
// PLUS
function addValue() {
    const eleml = document.getElementById("input_a").value
    const elemr = document.getElementById("input_b").value

    if (eleml && elemr) {
        const elem1Parsed = parseInt(eleml)
        const elemRParsed = parseInt(elemr)
        const result = elem1Parsed + elemRParsed
        document.mycalculator.output.value = elem1Parsed + " + " + elemRParsed + " = " + result;
    }
}

// MULTIPLY
function mulValue() {
    const eleml = document.getElementById("input_a").value
    const elemr = document.getElementById("input_b").value

    if (eleml && elemr) {
        const elem1Parsed = parseInt(eleml)
        const elemRParsed = parseInt(elemr)
        const result = elem1Parsed * elemRParsed
        document.mycalculator.output.value = elem1Parsed + " * " + elemRParsed + " = " + result;
    }
}

// DEVIDE
function divValue() {
    const eleml = document.getElementById("input_a").value
    const elemr = document.getElementById("input_b").value

    if (eleml && elemr) {
        const elem1Parsed = parseInt(eleml)
        const elemRParsed = parseInt(elemr)
        const result = elem1Parsed / elemRParsed
        document.mycalculator.output.value = elem1Parsed + " : " + elemRParsed + " = " + result;
    }
}
