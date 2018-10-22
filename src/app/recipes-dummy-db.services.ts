import { Injectable, OnInit, EventEmitter } from "../../node_modules/@angular/core";
import { Ingredient } from "./shared/ingredient.model";
import { Recipe } from "./shared/recipe.model";

export class RecipesDummyDbService {
    
    private recipes: Recipe[];
    recipeUpdateEvent = new EventEmitter<Recipe[]>();

    fakeDataFlow(): void {
        this.recipes = [
            new Recipe('Scrumbled eggs', 
            'Scrambled eggs with sausage', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jajecznica.jpg/800px-Jajecznica.jpg',
            [
                new Ingredient("Egg", 4),
                new Ingredient("Sausage", 1)
            ]
        ),
            new Recipe('Pork chop', 'Pork chop with potatoes and sauerkraut', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Kotlet_schabowy.jpg',
            [
                new Ingredient("Pork chop", 1),
                new Ingredient("Potatoe", 4),
                new Ingredient("Sauerkraut", 1)
            ])
        ];
        this.recipeUpdateEvent.emit(this.recipes.slice());
    }

}