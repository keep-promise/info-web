import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FamilyService } from 'src/app/services/user/family/family.service';
import { PublicService } from 'src/app/services/common/function/public.service';


@Component({
  selector: 'app-family-edit',
  templateUrl: './family-edit.component.html',
  styleUrls: ['./family-edit.component.less']
})
export class FamilyEditComponent implements OnInit {

  tag: string = "新增家庭成员"
  editFlag: string = "add";
  familyForm: FormGroup;
  familyMemberInfo: any;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private publicService: PublicService,
    private familyService: FamilyService) { }

  ngOnInit() {
    this.getRouterParam();
    this.initData();
  }

  getRouterParam() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      let id = queryParams.id;
      if (null != id) {
        this.tag = "编辑家庭成员";
        this.editFlag = "edit";
        this.getFamilyMemberById(id);
      } else {
        this.tag = "新增家庭成员";
        this.editFlag = "add"
      }
    })
  }

  initData() {
    this.initFormInfo();
  }

  initFormInfo() {
    this.familyForm = this.formBuilder.group({
      id: null,
      name: [null, [Validators.required]],
      sex: [0, [Validators.required]],
      age: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  getFamilyMemberById(id: number) {
    this.familyService.getFamilyMemberById(id, (result: any) => {
      if (result.success) {
        this.familyMemberInfo = result.data;
        this.familyForm.patchValue(this.familyMemberInfo);
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  save() {
    this.familyService.addFamilyMember(this.familyForm.value, (result: any) => {
      if (result.success) {
        this.back();
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  cancel() {
    this.back();
  }

  back() {
    this.router.navigateByUrl("/user/family-list");
  }


}
