package com.samuelraducan.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // UPDATE RECIPE

    @DeleteMapping("/recipe/{id}")
    public String deleteRecipeById(@PathVariable long id) {
        recipesService.deleteRecipeById(id);
        return "Deleted Greeting";
    }
}
