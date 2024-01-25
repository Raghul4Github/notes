import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { books } from '../../assets/books';

@Injectable({
    providedIn: 'root'
  })
export class bookService {
    
    
   
   private _url: string = '../../assets/Data/bookDetails.json';
    constructor(private http: HttpClient){ }
    get()
    {
        return this.http.get(this._url);
    }
    add(newBook:any):Observable<any>
    {
       return this.http.put(this._url,newBook) 
    }

    deleteData(bookId:any): Observable<any> {
  
      return this.http.delete(`${this._url}/${bookId}`)
    }
    viewSpecific(bookId:any)
    {
        return this.http.get(this._url,bookId)
    }
    }

// // addData(item: any): Observable<any> {
//   const data = [...item];
//   return this.http.put(this.apiUrl, data);
// }
