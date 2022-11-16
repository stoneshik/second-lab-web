package com.lab.models;

public class Dot extends AbstractDot {
    public Dot(double x, double y, double r) {
        super(x, y, r);
    }

    @Override
    protected boolean isCorrectValueX(double x) {
        return (x >= -4.0 && x <= 4.0);
    }

    @Override
    protected boolean isCorrectValueY(double y) {
        return (y >= -3.0 && y <= 3.0);
    }

    @Override
    protected boolean isCorrectValueR(double r) {
        return (r >= 1.0 && r <= 5.0);
    }
}
