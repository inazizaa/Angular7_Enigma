import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../../../shared/commonresponse';

@Injectable({
    providedIn: 'root'
})

export class TraineeService {
    constructor(private httpClient: HttpClient) { }

    getList(): Observable<CommonResponse> {
        return this.httpClient.get<CommonResponse>('http://localhost:3000/scores')
    }
}