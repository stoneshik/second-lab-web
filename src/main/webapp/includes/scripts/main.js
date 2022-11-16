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
drawCanvas(canvas, canvasObj);
