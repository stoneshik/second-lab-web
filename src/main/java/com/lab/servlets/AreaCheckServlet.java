package com.lab.servlets;

import java.io.*;

import com.lab.models.dot.Dot;
import com.lab.models.dot.NumberPlane;
import com.lab.models.errors.DotWrapperParamError;
import com.lab.models.wrappers.DotWrapper;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "areaCheckServlet", value = "/area-check-servlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        long startTime = System.nanoTime();
        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String r = request.getParameter("r");
        if (x == null || y == null || r == null) {
            redirect(response);
            return;
        }

        DotWrapper dotWrapper;
        try {
            dotWrapper = new DotWrapper(
                    request,
                    new Dot(Double.parseDouble(x), Double.parseDouble(y)),
                    new NumberPlane(Double.parseDouble(r))
            );
        } catch (NumberFormatException e) {
            DotWrapperParamError dotWrapperParamError = new DotWrapperParamError(
                    "Аргументы не соответствуют формату"
            );
            dotWrapperParamError.addInSession(request.getSession());
            redirect(response);
            return;
        }

        if (!dotWrapper.checkDot() || !dotWrapper.checkNumberPlane()) {
            DotWrapperParamError dotWrapperParamError = new DotWrapperParamError(
                    "Ошибка в аргументах:", dotWrapper.getListWrongParams()
            );
            dotWrapperParamError.addInSession(request.getSession());
            redirect(response);
            return;
        }
        dotWrapper.setTimeLead(System.nanoTime() - startTime);
        dotWrapper.saveWrapper();
        redirect(response);
    }

    private void redirect(HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        response.sendRedirect("/area-check.jsp");
    }
}