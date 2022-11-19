<%@ page import="com.lab.models.wrappers.ListDotWrapper" %>
<%@ page import="com.lab.models.wrappers.DotWrapper" %>
<%@ page import="com.lab.models.dot.Dot" %>
<%@ page import="com.lab.models.errors.DotWrapperParamError" %>
<%@ page session="false" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="header.html"/>
<div id="wrapper" class="container">
    <div>
        <h2>Results checks</h2>
        <table id="area-check-results" class="results">
            <tbody>
            <% ListDotWrapper listDotWrapper = (ListDotWrapper) request.getSession().getAttribute("list_dot_wrapper");
            if (listDotWrapper == null) { %>
                <tr class="response neutral single-column"><td colspan="3">Пока здесь пусто</td></tr>
            <% } else {
                DotWrapper dotWrapper = listDotWrapper.getLast();
                if (dotWrapper.getNumberPlane().checkPointHitInArea((Dot) dotWrapper.getDot())) { %>
                <tr id="last-response" class="response success double-column">
                    <td>Dot hit</td>
                <% } else { %>
                <tr class="response fail double-column">
                    <td>Dot not hit</td>
                <% } %>
                    <td class="last">Args: <%=
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
            <% } %>
        </table>
        <div><a href="/web2-1.0-SNAPSHOT/">Go back</a></div>
    </div>
</div>
<jsp:include page="footer.html"/>