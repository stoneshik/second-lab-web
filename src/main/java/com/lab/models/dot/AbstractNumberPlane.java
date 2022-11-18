package com.lab.models.dot;

public abstract class AbstractNumberPlane {
    protected double r;
    public AbstractNumberPlane(double r) {
        this.r = r;
    }

    public double getR() {
        return this.r;
    }

    abstract public boolean isCorrectValueR();
    abstract public boolean checkPointHitInArea(Dot dot);
}
