import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ReponsePageable } from '../model/response-pageable.model';

@Injectable({
  providedIn: 'root',
})
export class LiveService {
  private apiUrl = 'http://localhost:8080/lives';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _httpClient: HttpClient) {}

  public getLivesWithFlag(flag: string): Observable<ReponsePageable> {
    return this._httpClient.get<ReponsePageable>(`${this.apiUrl}?flag=${flag}`);
  }
}
