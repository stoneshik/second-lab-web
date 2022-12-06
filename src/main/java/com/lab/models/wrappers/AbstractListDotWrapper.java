package com.lab.models.wrappers;

import jakarta.servlet.http.HttpSession;

import java.util.List;

public abstract class AbstractListDotWrapper<T extends AbstractDotWrapper> {
    protected HttpSession session;
    protected List<T> listDotWrapper;

    public AbstractListDotWrapper(HttpSession session, List<T> listDotWrapper) {
        this.session = session;
        this.listDotWrapper = listDotWrapper;
    }

    public List<T> getListDotWrapper() {
        return this.listDotWrapper;
    }

    abstract public void add(T value);
    abstract public T getLast();
    abstract public String getAllParamsInString();
}
