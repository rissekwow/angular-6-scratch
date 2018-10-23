import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { ShoppingListService } from '../../shopping-list.service';
import { Router, ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { RecipesService } from '../../recipes.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipesService: RecipesService, private shoppingListService: ShoppingListService, 
    private router: Router, private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.index = +this.activedRouter.snapshot.params['id'];
    this.recipe = this.recipesService.getRecipes()[ this.index];
    console.log(this.recipe);
    this.activedRouter.params.subscribe(
      (params : Params) => {
        this.index = +params['id'];
        this.recipe = this.recipesService.getRecipes()[this.index];
      }
    )
    // this.recipesService.selectedRecipeEvent.subscribe(
    //   ( recipe: Recipe) => {
    //     this.recipe = recipe;
    //   }
    // );
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(["/shopping-list"]);
  }

  onEditRecipe() {
    this.router.navigate(["../", this.index, 'edit'], {relativeTo: this.activedRouter});
  }

}
