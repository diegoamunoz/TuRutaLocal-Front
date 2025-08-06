import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {
    BASE_URL:string = environment.apiUrl
    

    constructor(private http: HttpClient) { }

    getReviews(){
        return this.http.get(`${this.BASE_URL}/api/resenas`)
    }
}
