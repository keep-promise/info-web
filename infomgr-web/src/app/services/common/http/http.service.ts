import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

let HTTPOPTIONS = {
  headers: new HttpHeaders({"Content-Type": "application/json",}),
  withCredentials: true
}

let BASEURL = "http://localhost:8080/"


@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: HttpClient) {
  }

  /**
   * @param {string} url地址
   * @param {any} [options]可选设置的头信息
   */
  get(url: string, options?: any, callback?: Function) {
    if ( options && typeof options == "function") {
      callback = options;
      options = HTTPOPTIONS;
    }
    url = url.startsWith("http") ? url : BASEURL + url;
    this.http.get(url, options).pipe(catchError(this.handleError('http错误', url))).subscribe(result => callback(result));
  }


  /**
   * @param {string} url地址
   * @param {any} [options]可选设置的头信息
   */
  post(url: string, body: any | null, options?: any, callback?: Function) {
    if ( options && typeof options == "function") {
      callback = options;
      options = HTTPOPTIONS;
    }
    url = url.startsWith("http") ? url : BASEURL + url;
    this.http.post(url, body, options).pipe(catchError(this.handleError('http错误', url))).subscribe(result => callback(result));
  }


  /**
   * 处理请求错误
   * @param error
   * @returns {void|Promise<string>|Promise<T>|any}
   */
  private handleError(error) {
    console.log(error);
    let msg = '请求失败';
    if (error.status == 400) {
      console.log('请求参数正确');
    } else if (error.status == 404) {
    console.error('请检查路径是否正确');
    } else if (error.status == 500) {
    console.error('请求的服务器错误');
    }
    console.log(error);
    return {success: false, msg: msg};

    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
