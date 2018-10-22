import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../../shared/recipe.model';
import { RecipesService } from '../../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  selectedRecipeEvent = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipesService.selectedRecipeEvent.emit(this.recipe);
  }

}
