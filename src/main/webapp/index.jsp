<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="includes/header.html"/>
    <div id="header" class="container">
        <div class="container"><h2>Стрельбицкий Илья</h2></div>
        <div class="container column"><h3>Группа P32101</h3><h4>1208 вариант</h4></div>
    </div>
    <div id="wrapper" class="container">
                <form action="" method="POST" class="ui-form" id="dot-form">
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
    </div>
<jsp:include page="includes/footer.html"/>
