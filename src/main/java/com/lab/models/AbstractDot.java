package com.lab.models;

public abstract class AbstractDot {
    protected double x;
    protected double y;
    protected double r;

    public AbstractDot(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    abstract protected boolean isCorrectValueX(double x);
    abstract protected boolean isCorrectValueY(double y);
    abstract protected boolean isCorrectValueR(double r);
}
