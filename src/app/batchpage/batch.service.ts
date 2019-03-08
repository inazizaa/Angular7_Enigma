import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/shared/commonresponse';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private httpClient: HttpClient) { }

}
