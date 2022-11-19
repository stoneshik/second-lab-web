const form = document.getElementById('dot-form');
const fieldX = document.getElementById('x');
const fieldY = document.getElementById('y');
const fieldR = document.getElementById('r');
const formError = document.getElementById('form-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (filterForm(fieldX, fieldY, fieldR, formError)) {
        form.submit();
    }
});


const canvas = document.getElementById('canvas');
const canvasObj = {
    width: canvas.width,
    height: canvas.height,
    font: "16px serif",
    center: {x: 0, y: 0},
    dotArgs: {x: 0, y: 0, r: 0},
    step: {x: 17, y: 17},
    serif: {
        numSerif: {x: 2, y: 2},
        numStepForSerif: {x: 3, y: 3}
    },
    r: {},
    lineWidth: 1,
};
canvasObj.r = {
    step: {
        x: canvasObj.serif.numStepForSerif.x * canvasObj.step.x,
        y: canvasObj.serif.numStepForSerif.y * canvasObj.step.y
    }
}

drawCanvas(canvas, canvasObj);


const canvasError = document.getElementById('canvas-error');
canvas.addEventListener('click', () => {
    const regex = '^[-+]?[0-9]{0,9}(?:[.,][0-9]{1,9})*$';
    let valueR = fieldR.value.trim();
    if (valueR === '') {
        writeError(canvasError, "Параметр R не задан");
        return 0;
    }
    let resultR = valueR.match(regex);
    if (resultR == null) {
        writeError(canvasError, "Параметр R не правильный");
        return 0;
    }
    valueR = parseFloat(valueR);
    if (valueR < 1.0 || valueR > 5.0) {
        writeError(canvasError, "Параметр R выходит за допустимые значения");
        return 0;
    }
    let valueX = 0;
    let valueY = 0;
    $.get(
        '/web2-1.0-SNAPSHOT/controller-servlet',
        {'x': valueX, 'y': valueY, 'r': valueR},
        function() {
            location.reload();
        }
    );
});
