package com.samuelraducan.api;

public class RecipeNotFoundException extends RuntimeException {
    public RecipeNotFoundException() {
        super("Recipe has not been found");
    }
}
