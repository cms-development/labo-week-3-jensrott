import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs/observable';
@Injectable()
export class RecipeService {
  url = 'http://localhost/wordpress/wp-json/wp/v2/';
  // moet eigenlijk dit zijn: url = 'https://jensrott.cmsdevelopment.be/wp-json/wp/v2/';
  endpoint = 'recipes';

  constructor(private _httpClient: HttpClient) {}

  getRecipes(): Observable<any> {
    // return of(RECIPES);
    return this._httpClient.get<Array<Recipe>>(`${this.url}${this.endpoint}`);
  }

  getRecipe(id): Observable<any> {
    return this._httpClient.get(`${this.url}${this.endpoint}/${id}`);
  }
}
