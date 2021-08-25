import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search?:string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${environment.BASE_URL}/games`, {
    params: params,
    })
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${environment.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(`${environment.BASE_URL}/games/${id}/movies`);
    const gameScreenShotsRequest = this.http.get(`${environment.BASE_URL}/games/${id}/screenshots`);

    return forkJoin ({
      gameInfoRequest,
      gameScreenShotsRequest,
      gameTrailersRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenShotsRequest']?.results,
          trailers: resp['gameTrailersRequest']?.results,
        };
      })
    );

  }
}
