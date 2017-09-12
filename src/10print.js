
function generate10RndString(width, height) {
    var str = "";
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            str += Math.random() > 0.5 ? "\\" : "/";
        }
        str += "\n";
    }
    return str;
}
