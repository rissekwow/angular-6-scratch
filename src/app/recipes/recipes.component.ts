import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../shared/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipesService: RecipesService) { }
  
  ngOnInit() {
    console.log("ngOnInit RecipesComponent")
    this.recipesService.selectedRecipeEvent
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
  
}
