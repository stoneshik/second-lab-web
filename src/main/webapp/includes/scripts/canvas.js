function getArgsForGraph(canvas) {
    let x = canvas.getAttribute('x');
    let y = canvas.getAttribute('y');
    let r = canvas.getAttribute('r');

    if (x == null || y == null || r == null) {
        return null;
    }
    return {'x': x, 'y': y, 'r': r};
}

function findCenter(canvasObj) {
    canvasObj.center.x = Math.round(canvasObj.width / canvasObj.step.x / 2) * canvasObj.step.x;
    canvasObj.center.y = Math.round(canvasObj.height / canvasObj.step.y / 2) * canvasObj.step.y;
}

function drawArea(ctx, canvasObj, color) {
    const center = canvasObj.center;
    const r = canvasObj.r;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, r.step.x, Math.PI + Math.PI / 2, Math.PI * 2);
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(center.x, center.y + r.step.y);
    ctx.lineTo(center.x - r.step.x, center.y);
    ctx.lineTo(center.x - r.step.x, center.y - (r.step.y * 2));
    ctx.lineTo(center.x, center.y - (r.step.y * 2));
    ctx.lineTo(center.x, center.y - r.step.y);

    ctx.fillStyle = color;
    ctx.fill();
}

function drawGrid(ctx, canvasObj, color){
    const stepX = canvasObj.step.x;
    const stepY = canvasObj.step.y;
    ctx.beginPath();
    for(let i = 1 + stepX; i < canvasObj.width; i += stepX){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasObj.height);
    }
    for(let j = 1 + stepY; j < canvasObj.height; j += stepY){
        ctx.moveTo(0, j);
        ctx.lineTo(canvasObj.width, j);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = canvasObj.lineWidth;
    ctx.stroke();
}

function drawAxes(ctx, canvasObj, color) {
    const center = canvasObj.center;
    const step = canvasObj.step;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = canvasObj.lineWidth;
    //ось X
    ctx.beginPath();
    ctx.moveTo(0, center.y);
    ctx.lineTo(canvasObj.width, center.y);
    //ось Y
    ctx.moveTo(center.x, canvasObj.height);
    ctx.lineTo(center.x, 0);
    ctx.stroke();

    //отрисовка стрелок
    const halfStepX = Math.round(step.x / 2);
    const halfStepY = Math.round(step.y / 2);
    //для X
    ctx.beginPath();
    ctx.moveTo(canvasObj.width, center.y);
    ctx.lineTo(canvasObj.width - halfStepX, center.y + halfStepY);
    ctx.lineTo(canvasObj.width - halfStepX, center.y - halfStepY);
    ctx.fill();
    //для Y
    ctx.beginPath();
    ctx.moveTo(center.x - halfStepX, halfStepY);
    ctx.lineTo(center.x, 0);
    ctx.lineTo(center.x + halfStepX, halfStepY);
    ctx.fill();
}

function drawSerifs(ctx, canvasObj, color) {
    const center = canvasObj.center;
    const step = canvasObj.step;
    const serif = canvasObj.serif;
    const r = canvasObj.r;
    const startSerifX = center.x - (r.step.x * serif.numSerif.x);
    const startSerifY = center.y - (r.step.y * serif.numSerif.y);

    ctx.beginPath();
    // Рисуем для оси X
    for (let i=0; i < serif.numSerif.x * 2 + 1; i++) {
        ctx.moveTo(startSerifX + (r.step.x * i), center.y - Math.round(step.y / 2));
        ctx.lineTo(startSerifX + (r.step.x * i), center.y + Math.round(step.y / 2));
    }
    // Рисуем для оси Y
    for (let i=0; i < serif.numSerif.y * 2 + 1; i++) {
        ctx.moveTo(center.x - Math.round(step.x / 2), startSerifY + (r.step.y * i));
        ctx.lineTo(center.x + Math.round(step.x / 2), startSerifY + (r.step.y * i));
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = canvasObj.lineWidth;
    ctx.stroke();
}

function drawLabels(ctx, canvasObj, color) {
    const center = canvasObj.center;
    const step = canvasObj.step;
    const r = canvasObj.r;

    ctx.font = canvasObj.font;
    // Для оси X
    ctx.strokeText('-R', center.x - (r.step.x * 2) - Math.round(step.x / 2), center.y - step.y);
    ctx.strokeText('-R/2', center.x - r.step.x - Math.round(step.x / 2), center.y - step.y);
    ctx.strokeText('R/2', center.x + r.step.x - Math.round(step.x / 2), center.y - step.y);
    ctx.strokeText('R', center.x + (r.step.x * 2) - Math.round(step.x / 4), center.y - step.y);
    ctx.strokeText('x', canvasObj.width - Math.round(step.x * 0.6), center.y - step.y);
    // Для оси Y
    ctx.strokeText('-R', center.x + step.x, center.y + (r.step.y * 2) + Math.round(step.y / 4));
    ctx.strokeText('-R/2', center.x + step.x, center.y + r.step.y + Math.round(step.y / 4));
    ctx.strokeText('R/2', center.x + step.x, center.y - r.step.y + Math.round(step.y / 4));
    ctx.strokeText('R', center.x + step.x, center.y - (r.step.y * 2) + Math.round(step.y / 4));
    ctx.strokeText('y', center.x + step.x, Math.round(step.y * 0.6));
}

function drawDot(ctx, canvasObj, color) {
    const args = getArgsForGraph(canvas);
    if (args == null) {
        return;
    }
    const x = Number.parseFloat(args['x']);
    const y = Number.parseFloat(args['y']);
    const r = Number.parseFloat(args['r']);
    const center = canvasObj.center;
    const stepR = canvasObj.r.step;
    ctx.beginPath();
    ctx.arc(
        center.x + ((x / r) * stepR.x * 2),
        center.y - ((y / r) * stepR.y * 2),
        Math.round(canvasObj.step.x / 4),
        0,
        Math.PI * 2
    );
    ctx.fillStyle = color;
    ctx.fill();
}

function drawCanvas(canvas, canvasObj) {
    const ctx = canvas.getContext('2d');
    findCenter(canvasObj);
    drawArea(ctx, canvasObj, '#4A90E2');
    drawGrid(ctx, canvasObj, 'lightgray');
    drawAxes(ctx, canvasObj, 'black');
    drawSerifs(ctx, canvasObj, 'black');
    drawLabels(ctx, canvasObj, 'black');
    drawDot(ctx, canvasObj, '#F77A52');
}
