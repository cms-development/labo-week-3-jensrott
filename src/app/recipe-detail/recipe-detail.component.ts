import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';

import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}
