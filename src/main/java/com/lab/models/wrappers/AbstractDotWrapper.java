package com.lab.models.wrappers;

import com.lab.models.dot.AbstractDot;
import com.lab.models.dot.AbstractNumberPlane;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Date;
import java.util.List;

public abstract class AbstractDotWrapper {
    protected HttpServletRequest request;
    protected AbstractDot dot;
    protected AbstractNumberPlane numberPlane;
    protected Date timeDispatch;
    protected long timeLead;

    public AbstractDotWrapper(HttpServletRequest request, AbstractDot dot, AbstractNumberPlane numberPlane) {
        this.request = request;
        this.dot = dot;
        this.numberPlane = numberPlane;
        this.timeDispatch = new Date();
        this.timeLead = 0L;
    }

    public void setTimeLead(long timeLead) {
        this.timeLead = timeLead;
    }

    public AbstractDot getDot() {
        return this.dot;
    }

    public AbstractNumberPlane getNumberPlane() {
        return this.numberPlane;
    }

    public Date getTimeDispatch() {
        return this.timeDispatch;
    }

    public long getTimeLead() {
        return this.timeLead;
    }

    abstract public void saveWrapper();
    abstract public boolean checkDot();
    abstract public boolean checkNumberPlane();
    abstract public List<String> getListWrongParams();
}
