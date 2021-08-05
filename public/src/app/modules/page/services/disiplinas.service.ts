import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsService } from 'src/app/shared/services/urls.service';


@Injectable({
  providedIn: 'root'
})
export class DisiplinasService {
  private path = 'disciplinas';

  constructor(private http: HttpClient,
              private url: UrlsService) {
  }

  postCreate(body: object): Observable<object> {
    return this.http.post<object>(`${this.url.backendUrl}${this.path}/create`, body, {});
  }

  getAll(): Observable<object> {
    return this.http.get<object>(`${this.url.backendUrl}${this.path}/all`, {});
  }

  getById(id: number): Observable<object> {
    return this.http.get<object>(`${this.url.backendUrl}${this.path}/${id}`, {});
  }

  deleteById(id: number): Observable<object> {
    return this.http.delete<object>(`${this.url.backendUrl}${this.path}/${id}`, {});
  }
}
