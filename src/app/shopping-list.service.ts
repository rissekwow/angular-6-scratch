import { Ingredient } from "./shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredients: Ingredient[] = [];
  newIngredientsToShoppingListEvent = new EventEmitter<Ingredient[]>();

  addIngredientToShoppingList(ingredient : Ingredient) {
      this.ingredients.push(ingredient);
      this.newIngredientsToShoppingListEvent.emit(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientsToShoppingListEvent.emit(this.ingredients.slice());
    }

    getIngredients() {
      return this.ingredients.slice();
  }


}