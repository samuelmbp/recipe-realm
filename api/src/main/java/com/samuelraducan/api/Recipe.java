package com.samuelraducan.api;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.List;
import java.util.Map;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private List<String> ingredients;
    private List<String> instructions;
    private String preparationTime;
    private String cookingTime;
    private String totalTime;
    private int servings;
    private String difficultyLevel;
    private String cuisine;
    private String mealType;
    private List<String> dietaryInformation;
    private int calories;
    private Map<String, String> nutritionalInformation;
    private String source;
    private List<String> tags;
    private String image;

    public Recipe() {}

    public Recipe(Long id, String title, String description,
                  List<String> ingredients, List<String> instructions,
                  String preparationTime, String cookingTime, String totalTime,
                  int servings, String difficultyLevel, String cuisine,
                  String mealType, List<String> dietaryInformation, int calories,
                  Map<String, String> nutritionalInformation, String source,
                  List<String> tags, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.preparationTime = preparationTime;
        this.cookingTime = cookingTime;
        this.totalTime = totalTime;
        this.servings = servings;
        this.difficultyLevel = difficultyLevel;
        this.cuisine = cuisine;
        this.mealType = mealType;
        this.dietaryInformation = dietaryInformation;
        this.calories = calories;
        this.nutritionalInformation = nutritionalInformation;
        this.source = source;
        this.tags = tags;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getInstructions() {
        return instructions;
    }

    public void setInstructions(List<String> instructions) {
        this.instructions = instructions;
    }

    public String getPreparationTime() {
        return preparationTime;
    }

    public void setPreparationTime(String preparationTime) {
        this.preparationTime = preparationTime;
    }

    public String getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(String cookingTime) {
        this.cookingTime = cookingTime;
    }

    public String getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(String totalTime) {
        this.totalTime = totalTime;
    }

    public int getServings() {
        return servings;
    }

    public void setServings(int servings) {
        this.servings = servings;
    }

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getMealType() {
        return mealType;
    }

    public void setMealType(String mealType) {
        this.mealType = mealType;
    }

    public List<String> getDietaryInformation() {
        return dietaryInformation;
    }

    public void setDietaryInformation(List<String> dietaryInformation) {
        this.dietaryInformation = dietaryInformation;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public Map<String, String> getNutritionalInformation() {
        return nutritionalInformation;
    }

    public void setNutritionalInformation(Map<String, String> nutritionalInformation) {
        this.nutritionalInformation = nutritionalInformation;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
