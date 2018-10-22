import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { ShoppingListService } from '../../shopping-list.service';
import { Router } from '../../../../node_modules/@angular/router';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private router: Router) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(["/shopping-list"]);
  }

}
