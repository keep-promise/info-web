import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/common/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ClassmateService {

  URL: string = "classmate";

  constructor(private http: HttpService) { }

  // 获取同学列表
  getClassmateList(callback: (result: any) => void) {
    let url = this.URL + "/all";
    this.http.get(url, callback);
  }

  // 新增同学
  addClassmate(data: any, callback: (result: any) => void) {
    let url = this.URL + "/add";
    this.http.post(url, data, callback);
  }

  // 获取同学信息
  getClassmateById(id: number, callback: (result: any) => void) {
    let url = this.URL + "/get/" + id;
    this.http.get(url, callback);
  }

  // 编辑同学
  editClassmate(data: any, callback: (result: any) => void) {
    let url = this.URL + "/edit";
    this.http.post(url, data, callback);
  }

  // 删除同学
  deleteClassmates(data: any, callback: (result: any) => void) {
    let url = this.URL + "/delete";
    this.http.post(url, data, callback);
  }

}
