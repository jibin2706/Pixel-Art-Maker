let height, width, color;

$("#submit").click(function (e) {
    e.preventDefault();
    $("#pixelCanvas").empty();
    makeGrid();
});

function makeGrid() {
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    color = $("#colorPicker").val();
    console.log(height, width, color);

    const table = $("#pixelCanvas");
    for (let i = 0; i < height; i++) table.append('<tr class="button"></tr>');
    for (let j = 0; j < width; j++) $(".button").append("<td></td>");
}

$("#pixelCanvas").on("click", "td", function () {
    color = $("#colorPicker").val();
    $(this).css("background-color", color);
});

console.log();

$("#range").change(function () {
    const value = $("#range").val();
    console.log(value);
    $("td").css("width", value);
    $("td").css("height", value);
});