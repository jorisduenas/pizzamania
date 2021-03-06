import { Injectable } from '@angular/core';
import {Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RequestOptions} from "@angular/http";

@Injectable()
export class LoggerService {

  constructor(private httpClient: HttpClient) { }

  private urlLogger = 'http://localhost:4300/logger/';

  public logger(message:string, type:string){
    let variables = (
      type +"?message=" + message
    );
    return this.httpClient.post(this.urlLogger + variables, null).subscribe();
  }

}
