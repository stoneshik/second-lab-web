package com.lab.servlets;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "areaCheckServlet", value = "/area-check-servlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Hello
        response.setContentType("text/html");
        request.setCharacterEncoding("UTF-8");
        try {
            request.getRequestDispatcher("/includes/header.html").include(request, response);
            request.getRequestDispatcher("/includes/results.html").include(request, response);
            request.getRequestDispatcher("/includes/footer.html").include(request, response);
        } catch (ServletException e) {}
    }
}