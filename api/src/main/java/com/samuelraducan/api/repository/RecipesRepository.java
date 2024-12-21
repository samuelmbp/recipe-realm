package com.samuelraducan.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.samuelraducan.api.model.Recipe;

public interface RecipesRepository extends JpaRepository<Recipe, Long> {

    @Query(value = "SELECT * FROM recipes ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Recipe getRandomRecipe();
}
