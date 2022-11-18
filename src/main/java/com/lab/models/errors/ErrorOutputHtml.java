package com.lab.models.errors;

import jakarta.servlet.http.HttpSession;

public abstract class ErrorOutputHtml {
    protected final String name;
    protected String msg;

    public ErrorOutputHtml(String name, String msg) {
        this.name = name;
        this.msg = msg;
    }

    public void addInSession(HttpSession session) {
        session.setAttribute(this.name, this);
    }
}
