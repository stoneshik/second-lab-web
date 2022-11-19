package com.lab.models.dot;

public class NumberPlane extends AbstractNumberPlane {
    public NumberPlane(double r) {
        super(r);
    }

    @Override
    public boolean isCorrectValueR() {
        return (this.r >= 1.0 && this.r <= 5.0);
    }

    @Override
    public boolean checkPointHitInArea(Dot dot) {
        return (
            (dot.x >= 0 && dot.y >= 0 && Math.pow(dot.x, 2) + Math.pow(dot.y, 2) <= Math.pow(this.r / 2, 2)) ||
            (dot.x <= 0 && dot.y >= 0 && dot.x <= this.r / 2 && dot.y <= this.r) ||
            (dot.x <= 0 && dot.y <= 0 && dot.y >= -dot.x - (this.r / 2))
        );
    }
}
