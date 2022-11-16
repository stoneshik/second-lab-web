<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="includes/header.html"/>
    <div id="wrapper" class="container">
        <div id="left_col">
            <canvas id="canvas" height="600" width="600" x="0" y="0" r="0"></canvas>
        </div>
        <form action="/web2-1.0-SNAPSHOT/controller-servlet" method="GET" class="ui-form" id="dot-form">
            <h3>Проверка попадания точки</h3>
            <fieldset id="x">
                <label>X:</label>
                <input type="radio" value="-4" name="x" checked>-4
                <input type="radio" value="-3" name="x">-3
                <input type="radio" value="-2" name="x">-2
                <input type="radio" value="-1" name="x">-1
                <input type="radio" value="0" name="x">0
                <input type="radio" value="1" name="x">1
                <input type="radio" value="2" name="x">2
                <input type="radio" value="3" name="x">3
                <input type="radio" value="4" name="x">4
            </fieldset>
            <div class="form-row">
                <input type="text" id="y" name="y" required autocomplete="off"><label for="y" class="text-input-label">Y:</label>
            </div>
            <div class="form-row">
                <label for="r">R:</label>
                <select id="r" name="r" size="3" class="select">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <p><input type="submit" value="отправить"></p>
            <p id="form-error" class="error"></p>
        </form>
        <div id="right_col">
            <h2>Результаты проверки</h2>
            <table id="results">
                <tbody>
                <tr class="response neutral single-column"><td colspan="3">Пока здесь пусто</td></tr>
                <tr id="last-response" class="response success triple-column">
                    <td>Точка попала</td>
                <tr class="response fail triple-column">
                    <td>Точка не попала</td>
                    <td>Время работы скрипта ms</td>
                    <td class=per-last>Время: </td>
                    <td class="last">Аргументы: </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <script type="text/javascript" src="includes/scripts/filter.js"></script>
    <script type="text/javascript" src="includes/scripts/canvas.js"></script>
    <script type="text/javascript" src="includes/scripts/main.js"></script>
<jsp:include page="includes/footer.html"/>
