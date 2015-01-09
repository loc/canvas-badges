/** 
 *  Andy Locascio, MIT License
 *  http://github.com/loc/canvas-badges
 */

function badge(element, points, depth, color) {
    var canvas = document.createElement('canvas');

    canvas.width = element.clientWidth;
    canvas.height = element.clientHeight;
    canvas.id = points + "pt-" + color + "-badge";
    
    element.appendChild(canvas);

    var context = canvas.getContext('2d'),
        size = Math.min(canvas.width, canvas.height),
        diff = canvas.width * (depth / 100),
        w = size - (diff * 2),
        h = size - (diff * 2),
        cx = size/2,
        cy = size/2;
        
    points = points * 2;
    
    context.beginPath();

    for (var i=0; i < points; i++) {
        var angle = (i * 2 * Math.PI) / points,
            radius = w / 2 + diff;

        context.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));

        diff = -diff;
    }

    context.closePath();
    context.fillStyle = color;
    context.fill();
}