package com.lab.models.wrappers;

import com.lab.models.dot.AbstractDot;
import com.lab.models.dot.AbstractNumberPlane;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public abstract class AbstractDotWrapper {
    protected HttpServletRequest request;
    protected AbstractDot dot;
    protected AbstractNumberPlane numberPlane;

    public AbstractDotWrapper(HttpServletRequest request, AbstractDot dot, AbstractNumberPlane numberPlane) {
        this.request = request;
        this.dot = dot;
        this.numberPlane = numberPlane;
    }

    public AbstractDot getDot() {
        return this.dot;
    }

    public AbstractNumberPlane getNumberPlane() {
        return this.numberPlane;
    }

    abstract public void saveWrapper();
    abstract public boolean checkDot();
    abstract public boolean checkNumberPlane();
    abstract public List<String> getListWrongParams();
}
