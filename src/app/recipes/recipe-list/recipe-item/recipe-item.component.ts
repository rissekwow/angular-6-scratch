import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../../shared/recipe.model';
import { RecipesService } from '../../../recipes.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  selectedRecipeEvent = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipesService.selectedRecipeEvent.emit(this.recipe);
  }



}
