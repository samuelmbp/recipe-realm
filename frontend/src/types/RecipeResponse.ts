type RecipeResponse = {
    id: number;
    title: string;
    description: string;
    ingredients: string;
    instructions: string;
    preparationTime: string;
    cookingTime: string;
    totalTime: string;
    servings: number;
    difficultyLevel: string;
    cuisine: string;
    mealType: string;
    dietaryInformation: string;
    calories: number;
    nutritionalInformation: string;
    source: string;
    tags: string;
    image: string;
};

export default RecipeResponse;
