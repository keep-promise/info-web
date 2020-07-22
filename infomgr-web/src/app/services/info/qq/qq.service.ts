import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/common/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class QqService {
  URL: string = "qq";

  constructor(private http: HttpService) { }

  // 获取qq列表
  getQQList(callback: (result: any) => void) {
    let url = this.URL + "/all";
    this.http.get(url, callback);
  }

  // 新增qq
  addQQ(data: any, callback: (result: any) => void) {
    let url = this.URL + "/add";
    this.http.post(url, data, callback);
  }

  // 获取qq信息
  getQQById(id: number, callback: (result: any) => void) {
    let url = this.URL + "/get/" + id;
    this.http.get(url, callback);
  }

  // 编辑qq
  editQQ(data: any, callback: (result: any) => void) {
    let url = this.URL + "/edit";
    this.http.post(url, data, callback);
  }

  // 删除qq
  deleteQQs(data: any, callback: (result: any) => void) {
    let url = this.URL + "/delete";
    this.http.post(url, data, callback);
  }

}
