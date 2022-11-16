function writeError(element, text) {
    if (typeof element.innerText !== 'undefined') {
        // IE8
        element.innerText = text;
    } else {
        // Остальные браузеры
        element.textContent = text;
    }
}

function writeErrorMessages(elementError, stringForOneError, stringForManyErrors, args) {
    let stringArr = [];
    for (let key in args) {
        if (args[key] === '' || args[key] == null) {
            stringArr.push(key);
        }
    }
    let stringArrCount = stringArr.length;
    if (stringArrCount === 1) {
        writeError(elementError, stringForOneError + stringArr[0]);
        return;
    }
    let stringErr = stringForManyErrors;
    for (let i=0; i < stringArrCount; i++) {
        if (i > 0) {
            stringErr += ",";
        }
        stringErr += " " + stringArr[i];
    }
    writeError(elementError, stringErr);
}

function findValueFromFieldset(fieldset) {
    for (let i=0; i < fieldset.elements.length - 1; i++) {
        let input = fieldset.elements[i];
        if (input.checked) {
            return input.value.trim();
        }
    }
    return '';
}

function filterForm(fieldX, fieldY, fieldR, formError) {
    let valueX = findValueFromFieldset(fieldX);
    let valueY = fieldY.value.trim();
    let valueR = fieldR.value.trim();

    if (valueX === '' || valueY === '' || valueR === '') {
        writeErrorMessages(
            formError,
            'Передан пустой аргумент: ',
            'Переданы пустые аргументы:',
            {'X': valueX, 'Y': valueY, 'R': valueR}
        );
        return false;
    }
    let regex = '^[-+]?[0-9]{0,9}(?:[.,][0-9]{1,9})*$';
    let resultX = valueX.match(regex);
    let resultY = valueY.match(regex);
    let resultR = valueR.match(regex);

    if (resultX == null || resultY == null || resultR == null) {
        writeErrorMessages(
            formError,
            'Неправильный формат аргумента: ',
            'Неправильный формат аргументов:',
            {'X': resultX, 'Y': resultY, 'R': resultR}
        );
        return false;
    }
    valueX = parseFloat(valueX);
    valueY = parseFloat(valueY);
    valueR = parseFloat(valueR);
    if ((valueX < -4.0 || valueX > 4.0) ||
        (valueY < -3.0 || valueY > 3.0) ||
        (valueR < 1.0 || valueR > 5.0)) {
        if (valueX < -4.0 || valueX > 4.0) {
            valueX = '';
        }
        if (valueY < -3.0 || valueY > 3.0) {
            valueY = '';
        }
        if (valueR < 1.0 || valueR > 5.0) {
            valueR = '';
        }
        writeErrorMessages(
            formError,
            'Значение выходит за допустимый диапазон: ',
            'Значения выходят за допустимый диапазон:',
            {'X': valueX, 'Y': valueY, 'R': valueR}
        );
        return false;
    }
    return true;
}
