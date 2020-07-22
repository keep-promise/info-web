import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PublicService } from 'src/app/services/common/function/public.service';
import { ClassmateService } from 'src/app/services/user/classmate/classmate.service';

interface Classmate {
  id: number;
  name: string;
  age: number;
  type: number;
  sex: string;
  phoneNumber: string;
  qq: string;
  email: string;
}

@Component({
  selector: 'app-classmate-list',
  templateUrl: './classmate-list.component.html',
  styleUrls: ['./classmate-list.component.less']
})
export class ClassmateListComponent implements OnInit {

  isIndeterminate = false;
  isAllDisplayDataChecked = false;

  checkIdList: number[] = [];
  listOfDisplayData: Classmate[] = [];
  listOfAllData: Classmate[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private router: Router,
    private publicService: PublicService,
    private classmateService: ClassmateService) { }

  ngOnInit(): void {
    this.getFamilyMemberList();
  }

  currentPageDataChange($event: Classmate[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
    this.getCheckIdList();
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  getCheckIdList() {
    this.checkIdList = [];
    for (let i in this.mapOfCheckedId) {
      if (this.mapOfCheckedId[i]) {
        this.checkIdList.push(Number(i));
      }
    }
  }

  getFamilyMemberList() {
    this.classmateService.getClassmateList((result: any) => {
      if (result.success) {
        this.listOfAllData = result.data;
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  addMember() {
    this.router.navigateByUrl("/user/classmate-edit");
  }

  deleteMemberList() {
    this.classmateService.deleteClassmates({ idList: this.checkIdList }, (result: any) => {
      if (result.success) {
        this.getFamilyMemberList();
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  editMember(id: number) {
    this.router.navigate(["/user/classmate-edit"], {queryParams: {id: id}});
  }

  deleteMember(id: number) {
    this.classmateService.deleteClassmates({ idList: [id] }, (result: any) => {
      if (result.success) {
        this.getFamilyMemberList();
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

}
