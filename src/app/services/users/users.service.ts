import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { reject } from 'q';

interface ApiResponse{
    message: string,
    code: number
}



@Injectable()
export class UsersService{
    apiRoot : string = "http://localhost:8000"
    private users ;
    constructor(private httpClient: HttpClient){ 
      
    }
    /**
     * 
     * @param signee 
     */
    addSignee(signee){
      console.log(signee)
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin':'*'
    }); 
       return this.httpClient.post<ApiResponse>('http://localhost:8000/signee',signee,{ headers: httpHeaders}).toPromise();
    }
    
    addContributor(contributor){
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin':'*'
        }); 
        return this.httpClient.post<ApiResponse>('http://localhost:8000/contributor', contributor, {
            headers: httpHeaders
        }).toPromise();
    }
    /**
     * 
     * @param offset 
     * @param limit 
     */
    getUsers(offset: number = 0, limit: number = 50){
        let apiUrl = `${this.apiRoot}/signees/pictures?offset=${offset}&limit=${limit}`;
        return this.httpClient.get(apiUrl) .toPromise();
    }
    
}