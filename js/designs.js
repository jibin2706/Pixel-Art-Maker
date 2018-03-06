let color, rainbow;

const randomNumber = no => Math.floor(Math.random() * no);

// function to generate random values in rgb(no,no,no)
const selectColor = () => {
    if (rainbow)
        color = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
    else
        color = $("#colorPicker").val();
    return color;
}


// checks whether to apply random color on every click or not
$("#rainbow").change(function () {
    rainbow = $("#rainbow:checked").val();
    console.log("Random color:", rainbow);
});

// on submitting the form the canvas resets
$("#sizePicker").submit(function (e) {
    e.preventDefault();
    $("#pixelCanvas").empty();
    makeGrid();
});

// function to make grid
function makeGrid() {
    const height = $("#inputHeight").val();
    const width = $("#inputWeight").val();
    const table = $("#pixelCanvas");

    for (let i = 0; i < height; i++)
        table.append('<tr class="button"></tr>');
    for (let j = 0; j < width; j++)
        $(".button").append("<td></td>");
}

// color or each click on td
$("#pixelCanvas").on("click", "td", function () {
    $(this).css("background-color", selectColor());
});

// to change to width and height of the td
$("#range").change(function () {
    const value = $("#range").val();
    console.log(value);
    $("td").css("width", value);
    $("td").css("height", value);
    $("tr").css("height", value);
});

// double click to delete the color
$("#pixelCanvas").on("dblclick", "td", function () {
    $(this).css("background-color", "unset");
});

let drag = false;
$("#pixelCanvas").on("mousedown", "td", function () {
    drag = true;
    $("#pixelCanvas").on("mouseup", "td", function () {
        drag = false;
    })
});

$("#pixelCanvas").on("mouseenter", "td", function () {
    if (drag)
        $(this).css("background-color", selectColor());

});