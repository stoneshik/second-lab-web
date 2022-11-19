package com.lab.models.wrappers;

import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public abstract class AbstractListDotWrapper<T extends AbstractDotWrapper> {
    protected HttpServletRequest request;
    protected List<T> listDotWrapper;

    public AbstractListDotWrapper(HttpServletRequest request, List<T> listDotWrapper) {
        this.request = request;
        this.listDotWrapper = listDotWrapper;
    }

    public List<T> getListDotWrapper() {
        return this.listDotWrapper;
    }

    abstract public void add(T value);
    abstract public T getLast();
    abstract public String getAllParamsInString();
}
