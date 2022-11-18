package com.lab.models.dot;

public class Dot extends AbstractDot {
    public Dot(double x, double y) {
        super(x, y);
    }

    @Override
    public boolean isCorrectValueX() {
        return (this.x >= -4.0 && this.x <= 4.0);
    }

    @Override
    public boolean isCorrectValueY() {
        return (this.y >= -3.0 && this.y <= 3.0);
    }
}
