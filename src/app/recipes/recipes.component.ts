import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../mock/mock-recipes';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(
      data => {
        this.recipes = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log('Het is gedaan')
    );
  }
}
