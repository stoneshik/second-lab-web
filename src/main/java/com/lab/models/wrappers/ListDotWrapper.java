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
        this.listDotWrapper.add(value);
    }

    @Override
    public DotWrapper getLast() {
        if (this.listDotWrapper.isEmpty()) {
            return null;
        }
        return this.listDotWrapper.get(this.listDotWrapper.size() - 1);
    }
}
