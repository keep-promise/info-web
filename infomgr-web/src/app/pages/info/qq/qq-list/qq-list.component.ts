import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PublicService } from 'src/app/services/common/function/public.service';
import { QqService } from 'src/app/services/info/qq/qq.service';

interface QQ {
  id: number;
  qqNo: string;
  qqPassword: number;
  qqAge: string;
  qqPhoneNo: string;
}

@Component({
  selector: 'app-qq-list',
  templateUrl: './qq-list.component.html',
  styleUrls: ['./qq-list.component.less']
})
export class QqListComponent implements OnInit {

  isIndeterminate = false;
  isAllDisplayDataChecked = false;

  checkIdList: number[] = [];
  listOfDisplayData: QQ[] = [];
  listOfAllData: QQ[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private router: Router,
    private publicService: PublicService,
    private qqService: QqService) { }

  ngOnInit(): void {
    this.getQQList();
  }

  currentPageDataChange($event: QQ[]): void {
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

  getQQList() {
    this.qqService.getQQList((result: any) => {
      if (result.success) {
        this.listOfAllData = result.data;
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  addQQ() {
    this.router.navigateByUrl("/info/qq-edit");
  }

  deleteQQList() {
    this.qqService.deleteQQs({ idList: this.checkIdList }, (result: any) => {
      if (result.success) {
        this.getQQList();
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  editQQ(id: number) {
    this.router.navigate(["/info/qq-edit"], {queryParams: {id: id}});
  }

  deleteQQ(id: number) {
    this.qqService.deleteQQs({ idList: [id] }, (result: any) => {
      if (result.success) {
        this.getQQList();
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }




}
