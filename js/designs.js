// function to generate random values in rgb(no,no,no)
const randomcolor = no => Math.floor(Math.random() * no);

let color, rainbow;

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
    $(this).css("background-color", color);
});

// to change to width and height of the td
$("#range").change(function () {
    const value = $("#range").val();
    console.log(value);
    $("td").css("width", value);
    $("td").css("height", value);
    $("tr").css("height", value);
});

// change color on moving the mouse around the canvas
$("#pixelCanvas").on("mouseover", "td", function () {
    // drag == true if checkbox is checked else undefined
    const drag = $("#drag:checked").val();

    // rainbow == true if checkbox is checked else undefined
    if (rainbow)
        color = `rgb(${randomcolor(255)},${randomcolor(255)},${randomcolor(255)})`;
    else
        color = $("#colorPicker").val();

    if (drag)
        $(this).css("background-color", color);
});