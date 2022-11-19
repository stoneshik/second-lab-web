package com.lab.models.wrappers;

import jakarta.servlet.http.HttpServletRequest;

import java.util.ArrayList;

public class ListDotWrapper extends AbstractListDotWrapper<DotWrapper> {
    volatile public static ListDotWrapper instance;

    private ListDotWrapper(HttpServletRequest request) {
        super(request, new ArrayList<>());
        request.getSession().setAttribute("list_dot_wrapper", this);
    }

    public static ListDotWrapper getInstance(HttpServletRequest request) {
        if (instance == null){
            synchronized (ListDotWrapper.class) {
                if (instance == null) {
                    instance = new ListDotWrapper(request);
                }
            }
        }
        return instance;
    }

    @Override
    public void add(DotWrapper value) {
        this.listDotWrapper.add(0, value);
    }

    @Override
    public DotWrapper getLast() {
        if (this.listDotWrapper.isEmpty()) {
            return null;
        }
        return this.listDotWrapper.get(0);
    }

    @Override
    public String getAllParamsInString() {
        if (this.listDotWrapper.isEmpty()) {
            return "";
        }
        StringBuilder x = new StringBuilder("x=\"");
        StringBuilder y = new StringBuilder("y=\"");
        StringBuilder r = new StringBuilder("r=\"");
        for (int i=0; i < this.listDotWrapper.size(); i++) {
            x.append(String.format("%s", this.listDotWrapper.get(i).dot.getX()));
            y.append(String.format("%s", this.listDotWrapper.get(i).dot.getY()));
            r.append(String.format("%s", this.listDotWrapper.get(i).numberPlane.getR()));
            if (i < this.listDotWrapper.size() - 1) {
                x.append(";");
                y.append(";");
                r.append(";");
            }
        }
        x.append("\"");
        y.append("\"");
        r.append("\"");
        return String.format("%s %s %s", x, y, r);
    }
}
