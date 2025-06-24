import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {

    constructor(private http: HttpClient) { }

    getReviews(){
        return this.http.get('http://localhost:3000/api/resenas')
    }
}
