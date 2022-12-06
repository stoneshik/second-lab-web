package com.lab.models.wrappers;

import com.lab.models.dot.Dot;
import com.lab.models.dot.NumberPlane;
import jakarta.servlet.http.HttpServletRequest;

import java.util.ArrayList;

public class DotWrapper extends AbstractDotWrapper {
    public DotWrapper(HttpServletRequest request, Dot dot, NumberPlane numberPlane) {
        super(request, dot, numberPlane);
    }

    @Override
    public void saveWrapper() {
        ListDotWrapper.getInstance(this.request.getSession()).add(this);
    }

    @Override
    public boolean checkDot() {
        return (this.dot.isCorrectValueX() && this.dot.isCorrectValueY());
    }

    @Override
    public boolean checkNumberPlane() {
        return this.numberPlane.isCorrectValueR();
    }

    @Override
    public ArrayList<String> getListWrongParams() {
        ArrayList<String> result = new ArrayList<>();
        if (!this.dot.isCorrectValueX()) {
            result.add("x");
        }
        if (!this.dot.isCorrectValueY()) {
            result.add("y");
        }
        if (!this.numberPlane.isCorrectValueR()) {
            result.add("r");
        }
        return result;
    }
}
