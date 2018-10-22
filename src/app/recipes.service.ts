import { Injectable, OnInit, EventEmitter, OnDestroy } from "../../node_modules/@angular/core";
import { RecipesDummyDbService } from "./recipes-dummy-db.services";
import { Recipe } from "./shared/recipe.model";
import { ShoppingListService } from "./shopping-list.service";


@Injectable()
export class RecipesService implements OnDestroy{
    
    private recipes: Recipe[] = [];
    private selectedRecipe: Recipe;
    
    selectedRecipeEvent = new EventEmitter<Recipe>();
    
    constructor(private recipeDatabaseService: RecipesDummyDbService) {
        this.registerSubscriptionsToDatabase();
        this.recipeDatabaseService.fakeDataFlow();
    }
    
    ngOnDestroy(): void {
        this.recipeDatabaseService.recipeUpdateEvent.unsubscribe();
        this.selectedRecipeEvent.unsubscribe();
    }
    registerSubscriptionsToDatabase(): void {
        this.recipeDatabaseService.recipeUpdateEvent
        .subscribe(
            (recipes : Recipe[]) => {
                this.recipes = recipes;
            }
        );
    }

    getRecipes() {
        return this.recipes.slice();
    }


}