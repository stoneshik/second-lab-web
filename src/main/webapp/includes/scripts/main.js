// Фильтрация и обработка формы
const form = document.getElementById('dot-form');
const fieldX = document.getElementById('x');
const fieldY = document.getElementById('y');
const fieldR = document.getElementById('r');
const formError = document.getElementById('form-error');

function formHandler(e) {
    e.preventDefault();
    let valuesInStrings = getValuesStringFromFieldForForm(fieldX, fieldY, fieldR, formError);
    if (!valuesInStrings) {
        return;
    }
    let parsedValues = parseValuesFromStringForForm(
        valuesInStrings['x'], valuesInStrings['y'], valuesInStrings['r'], formError
    );
    if (!parsedValues) {
        return;
    }
    if (filterForm(parsedValues['x'], parsedValues['y'], parsedValues['r'], formError)) {
        form.submit();
    }
}

// Скрипт канваса
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

const canvasError = document.getElementById('canvas-error');

function calcCoordinates(canvasObj, offsetX, offsetY, r) {
    return {
        'x': ((offsetX - canvasObj.center.x) / (canvasObj.r.step.x * 2)) * r,
        'y': -(((offsetY - canvasObj.center.y) / (canvasObj.r.step.y * 2)) * r)
    };
}

function canvasHandler(e) {
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
        writeError(canvasError, "Параметр R выходит за допустимый диапазон");
        return 0;
    }
    let xy = calcCoordinates(canvasObj, e.offsetX, e.offsetY, valueR);
    if (!filterForm(xy['x'], xy['y'], valueR, formError)) {
        return 0;
    }
    $.get(
        '/controller-servlet',
        {'x': xy['x'], 'y': xy['y'], 'r': valueR},
        function() {
            location.reload();
        }
    );
}

// Отображение времени в соотвествии с временным поясом у клиента
const results = document.getElementById("results");
const times = results.getElementsByClassName("time");

function parseTime(t) {
    const regexp = /(\d+)(?::(\d\d))?\s*(p?)/;
    let date = new Date();
    let time = t.match(regexp);
    date.setUTCHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    date.setUTCMinutes(parseInt(time[2]) || 0);
    return date;
}

function timeReduction(times) {
    let timeDate;
    for (let i=0; i < times.length; i++) {
        timeDate = parseTime(times[i].textContent);
        times[i].textContent = timeDate.getHours() + ':' + timeDate.getMinutes() + ':' + timeDate.getSeconds();
    }
}

// Вызов всех функций
window.onload = function() {
    form.addEventListener('submit', formHandler);
    drawCanvas(canvas, canvasObj);
    canvas.addEventListener('click', canvasHandler);
    if (times.length > 0) {timeReduction(times);}
}