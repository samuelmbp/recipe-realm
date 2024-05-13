package com.samuelraducan.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecipesService {

    @Autowired
    private RecipesRepository recipesRepository;

    public List<Recipe> getAllRecipes() {
        List<Recipe> recipes = recipesRepository
                .findAll()
                .stream()
                .collect(Collectors.toList());
        System.out.println(recipes);
        return recipes;
    }
}
