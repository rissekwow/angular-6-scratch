import { Component, OnInit} from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipesService } from '../../recipes.service';
import { Routes, Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService : RecipesService, private router: Router, private activedRouter: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onCreateNewRecipe() {
    this.router.navigate(["new"], {relativeTo: this.activedRouter});
  }

}
