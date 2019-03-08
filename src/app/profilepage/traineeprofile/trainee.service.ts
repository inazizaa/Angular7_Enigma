import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../../../shared/commonresponse';
import { PTrainee } from './trainee';

@Injectable({
    providedIn: 'root'
})

export class PTraineeService {
    constructor(private httpClient: HttpClient) { }


    getTrainee(): Observable<CommonResponse> {
        return this.httpClient.get<CommonResponse>('http://localhost:3000/trainee/:id');
    }
}