package com.samuelraducan.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RecipesController {

    @Autowired
    private RecipesService recipesService;

    @PostMapping("/recipe")
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) {
        recipesService.addRecipe(recipe);
        return ResponseEntity.status(HttpStatus.CREATED).body(recipe);
    }

    @GetMapping("/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipes() {
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getAllRecipes());
    }

    @GetMapping("/recipe/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getRecipeById(id));
    }

    @PutMapping("/recipe/{id}")
    public ResponseEntity<Recipe> updateRecipe(@RequestBody Recipe newRecipe, @PathVariable long id ){
        newRecipe.setId(id);
        recipesService.updateRecipe(newRecipe, id);
        return ResponseEntity.status(HttpStatus.OK).body(newRecipe);
    }

    @DeleteMapping("/recipe/{id}")
    public ResponseEntity<String> deleteRecipeById(@PathVariable long id) {
        recipesService.deleteRecipeById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
