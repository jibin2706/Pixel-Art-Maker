$("#sizePicker").submit(function (e) {
    e.preventDefault();
    $("#pixelCanvas").empty();
    makeGrid();
});

function makeGrid() {
    const height = $("#inputHeight").val();
    const width = $("#inputWeight").val();
    const table = $("#pixelCanvas");
    for (let i = 0; i < height; i++) table.append('<tr class="button"></tr>');
    for (let j = 0; j < width; j++) $(".button").append("<td></td>");
}

$("#pixelCanvas").on("click", "td", function () {
    const color = $("#colorPicker").val();
    $(this).css("background-color", color);
});

$("#range").change(function () {
    const value = $("#range").val();
    console.log(value);
    $("td").css("width", value);
    $("td").css("height", value);
});