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