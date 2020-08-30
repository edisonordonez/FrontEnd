import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MOCK_API } from '../config/api.config';
import { Menu } from "../app/models/menu.models";

import {
  mixinHttp,
  TdGET,
  TdPOST,
  TdBody,
  TdParam,
  TdResponse,
  TdQueryParams,
} from '@covalent/http';


@Injectable()
export class LoginService extends mixinHttp(class {
    
}, {

  baseUrl: MOCK_API,
  baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
}, HttpClient) {
  
  constructor(private http: HttpClient){
    super(http, {
      baseUrl: MOCK_API,
      path: 'login',
    });
  }



  getMenu(): Observable<any> {
    return this.http.get("data/menu.json").pipe(
      map((res: Response) => {
        return res;
      }),
    );
  }

}