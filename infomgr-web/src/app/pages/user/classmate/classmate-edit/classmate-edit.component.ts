import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassmateService } from 'src/app/services/user/classmate/classmate.service';
import { PublicService } from 'src/app/services/common/function/public.service';

@Component({
  selector: 'app-classmate-edit',
  templateUrl: './classmate-edit.component.html',
  styleUrls: ['./classmate-edit.component.less']
})
export class ClassmateEditComponent implements OnInit {

  tag: string = "新增同学信息"
  editFlag: string = "add";
  classmateForm: FormGroup;
  classmateInfo: any;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private publicService: PublicService,
    private classmateService: ClassmateService) { }

  ngOnInit() {
    this.getRouterParam();
    this.initData();
  }

  getRouterParam() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      let id = queryParams.id;
      if (null != id) {
        this.tag = "编辑同学信息";
        this.editFlag = "edit";
        this.getClassmateById(id);
      } else {
        this.tag = "新增同学信息";
        this.editFlag = "add"
      }
    })
  }

  initData() {
    this.initFormInfo();
  }

  initFormInfo() {
    this.classmateForm = this.formBuilder.group({
      id: null,
      name: [null, [Validators.required]],
      type: [1, [Validators.required]],
      sex: [0, [Validators.required]],
      age: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      qq: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  getClassmateById(id: number) {
    this.classmateService.getClassmateById(id, (result: any) => {
      if (result.success) {
        this.classmateInfo = result.data;
        this.classmateForm.patchValue(this.classmateInfo);
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  save() {
    this.classmateService.addClassmate(this.classmateForm.value, (result: any) => {
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
    this.router.navigateByUrl("/user/classmate-list");
  }

}
