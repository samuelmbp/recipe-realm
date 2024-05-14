package com.samuelraducan.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipesService {

    @Autowired
    private RecipesRepository recipesRepository;

    public List<Recipe> getAllRecipes() {
        return recipesRepository.findAll();
    }

    public Recipe getRecipeById(long id) {
        Optional<Recipe> recipe = recipesRepository.findById(id);
        if (recipe.isEmpty()) throw new RecipeNotFoundException();

        return recipe.get();
    }

    public void deleteRecipeById(long id) {
        if (!recipesRepository.existsById(id)) throw new RecipeNotFoundException();
        recipesRepository.deleteById(id);
    }

    public void updateRecipe(Recipe newRecipe, long id) {
        if (!recipesRepository.existsById(id)) throw new RecipeNotFoundException();
        newRecipe.setId(id);
        recipesRepository.save(newRecipe);
    }

    public void addRecipe(Recipe recipe) {
        recipesRepository.save(recipe);
    }
}
