import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/common/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  URL: string = "family";

  constructor(private http: HttpService) { }

  // 获取家庭成员列表
  getFamilyMemberList(callback: (result: any) => void) {
    let url = this.URL + "/all";
    this.http.get(url, callback);
  }

  // 新增家庭成员
  addFamilyMember(data: any, callback: (result: any) => void) {
    let url = this.URL + "/add";
    this.http.post(url, data, callback);
  }

  // 新增家庭成员
  getFamilyMemberById(id: number, callback: (result: any) => void) {
    let url = this.URL + "/get/" + id;
    this.http.get(url, callback);
  }

  // 编辑家庭成员
  editFamilyMember(data: any, callback: (result: any) => void) {
    let url = this.URL + "/edit";
    this.http.post(url, data, callback);
  }

  // 删除家庭成员
  deleteFamilyMembers(data: any, callback: (result: any) => void) {
    let url = this.URL + "/delete";
    this.http.post(url, data, callback);
  }

}
