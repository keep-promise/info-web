import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/common/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  baseURL: string = "/family";

  constructor(private http: HttpService) { }

  // 获取家庭成员列表
  getFamilyMemberList(callback: (result: any) => void) {
    let url = this.baseURL + "/list";
    this.http.get(url, callback);
  }

  // 新增家庭成员
  addFamilyMember(data: any, callback: (result: any) => void) {
    let url = this.baseURL + "/add";
    this.http.post(url, data, callback);
  }

  // 编辑家庭成员
  editFamilyMember(data: any, callback: (result: any) => void) {
    let url = this.baseURL + "/edit";
    this.http.post(url, data, callback);
  }

  // 删除家庭成员
  deleteFamilyMember(data: number[], callback: (result: any) => void) {
    let url = this.baseURL + "/delete";
    this.http.post(url, data, callback);
  }

}
