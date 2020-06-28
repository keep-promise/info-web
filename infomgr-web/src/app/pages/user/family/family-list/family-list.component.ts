import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/services/user/family/family.service';


interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.less']
})
export class FamilyListComponent implements OnInit {

  isIndeterminate = false;
  isAllDisplayDataChecked = false;

  listOfDisplayData: ItemData[] = [];
  listOfAllData: ItemData[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private familyService: FamilyService) { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
  }

  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  getFamilyMemberList() {
    this.familyService.getFamilyMemberList((result: any) => {
      if (result.success) {

      } else {

      }
    })
  }

  addMember() {

  }

  deleteMemberList() {

  }

  editMember() {

  }

  deleteMember() {

  }




}
