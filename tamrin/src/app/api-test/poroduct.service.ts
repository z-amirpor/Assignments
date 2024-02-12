import { HttpClient } from "@angular/common/http";
import { Inject, inject } from "@angular/core";
import { Observable } from "rxjs";
@Inject({
  providedIn:'root'  
})
export class ProsuctService {
  http = inject (HttpClient)

  getProduct () : Observable <any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
  }
}