<%@ page import="com.lab.models.wrappers.ListDotWrapper" %>
<%@ page import="com.lab.models.wrappers.DotWrapper" %>
<%@ page import="com.lab.models.dot.Dot" %>
<%@ page import="com.lab.models.errors.DotWrapperParamError" %>
<%@ page session="false" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="includes/header.html"/>
<div id="wrapper" class="container">
    <div>
        <h2>Результат проверки</h2>
        <table id="area-check-results" class="results">
            <tbody>
            <% ListDotWrapper listDotWrapper = (ListDotWrapper) request.getSession().getAttribute("list_dot_wrapper");
            if (listDotWrapper == null) { %>
                <tr class="response neutral single-column"><td colspan="3">Пока здесь пусто</td></tr>
            <% } else {
                DotWrapper dotWrapper = listDotWrapper.getLast();
                if (dotWrapper.getNumberPlane().checkPointHitInArea((Dot) dotWrapper.getDot())) { %>
                <tr id="last-response" class="response success double-column">
                    <td>Точка попала</td>
                <% } else { %>
                <tr class="response fail double-column">
                    <td>Точка не попала</td>
                <% } %>
                    <td class="last">Параметры: <%=
                        String.format(
                            "x=%s, y=%s, r=%s",
                            dotWrapper.getDot().getX(),
                            dotWrapper.getDot().getY(),
                            dotWrapper.getNumberPlane().getR()
                        )
                    %></td>
                </tr>
            <% }%>
            </tbody>
            <% DotWrapperParamError dotWrapperParamError = (DotWrapperParamError)
                    request.getSession().getAttribute("dot_wrapper_param_error");
                if (dotWrapperParamError != null) {
            %>
            <p id="error-params" class="error">
                <%= dotWrapperParamError.getComposeMessage()%>
            </p>
            <% dotWrapperParamError.removeFromSession(request.getSession());
                }
            %>
        </table>
        <div><a href="/">Вернуться обратно</a></div>
    </div>
</div>
<jsp:include page="includes/footer.html"/>