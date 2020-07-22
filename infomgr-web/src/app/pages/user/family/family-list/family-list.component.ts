import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PublicService } from 'src/app/services/common/function/public.service';
import { FamilyService } from 'src/app/services/user/family/family.service';

interface Family {
  id: number;
  name: string;
  age: number;
  phoneNumber: string;
  email: string;
  relationship: number;
  birthday: Date;
}

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.less']
})
export class FamilyListComponent implements OnInit {

  isIndeterminate = false;
  isAllDisplayDataChecked = false;

  checkIdList: number[] = [];
  listOfDisplayData: Family[] = [];
  listOfAllData: Family[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private router: Router,
    private publicService: PublicService,
    private familyService: FamilyService) { }

  ngOnInit(): void {
    this.getFamilyMemberList();
  }

  currentPageDataChange($event: Family[]): void {
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
    this.familyService.getFamilyMemberList((result: any) => {
      if (result.success) {
        this.listOfAllData = result.data;
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  addMember() {
    this.router.navigateByUrl("/user/family-edit");
  }

  deleteMemberList() {
    this.familyService.deleteFamilyMembers({ idList: this.checkIdList }, (result: any) => {
      if (result.success) {
        this.getFamilyMemberList();
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  editMember(id: number) {
    this.router.navigate(["/user/family-edit"], {queryParams: {id: id}});
  }

  deleteMember(id: number) {
    this.familyService.deleteFamilyMembers({ idList: [id] }, (result: any) => {
      if (result.success) {
        this.getFamilyMemberList();
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }




}
