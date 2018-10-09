import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../mock/mock-recipes';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RecipeService {
  constructor(private _httpClient: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
