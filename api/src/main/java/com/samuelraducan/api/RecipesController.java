package com.samuelraducan.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RecipesController {

    @Autowired
    private RecipesService recipesService;

    @GetMapping("/")
    public String helloWorld() {
        return "Hello, world.";
    }

    @GetMapping("/recipes")
    public List<Recipe> getAllRecipes() {
        return recipesService.getAllRecipes();
    }

    @GetMapping("/recipe/{id}")
    public Recipe getRecipeById(@PathVariable long id) {
        return recipesService.getRecipeById(id);
    }
}
