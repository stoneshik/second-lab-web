package com.lab.models.dot;

public abstract class AbstractDot {
    protected double x;
    protected double y;

    public AbstractDot(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return this.x;
    }

    public double getY() {
        return this.y;
    }

    abstract public boolean isCorrectValueX();
    abstract public boolean isCorrectValueY();
}
