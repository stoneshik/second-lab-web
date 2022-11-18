package com.lab.models.errors;

import java.util.ArrayList;

public class DotWrapperParamError extends ErrorOutputHtml {
    private final ArrayList<String> namesParams;

    public DotWrapperParamError(String msg) {
        super("dot_wrapper_param_error", msg);
        this.namesParams = new ArrayList<>();
    }

    public DotWrapperParamError(String msg, ArrayList<String> namesParams) {
        super("dot_wrapper_param_error", msg);
        this.namesParams = namesParams;
    }

    public ArrayList<String> getNamesParams() {
        return this.namesParams;
    }

    public String getComposeMessage() {
        if (this.namesParams.isEmpty()) {
            return String.format("%s", this.msg);
        }
        return String.format("%s - %s", this.msg, String.join(", ", this.namesParams));
    }
}
