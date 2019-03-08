import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonResponse } from 'src/shared/commonresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<CommonResponse> {
    return this.httpClient.get<CommonResponse>('http://localhost:3000/batchs')
  }
}
