import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QqService } from 'src/app/services/info/qq/qq.service';
import { PublicService } from 'src/app/services/common/function/public.service';

@Component({
  selector: 'app-qq-edit',
  templateUrl: './qq-edit.component.html',
  styleUrls: ['./qq-edit.component.less']
})
export class QqEditComponent implements OnInit {

  tag: string = "新增同学信息"
  editFlag: string = "add";
  qqForm: FormGroup;
  qqInfo: any;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private publicService: PublicService,
    private qqService: QqService) { }

  ngOnInit() {
    this.getRouterParam();
    this.initData();
  }

  getRouterParam() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      let id = queryParams.id;
      if (null != id) {
        this.tag = "编辑QQ信息";
        this.editFlag = "edit";
        this.getClassmateById(id);
      } else {
        this.tag = "新增QQ信息";
        this.editFlag = "add"
      }
    })
  }

  initData() {
    this.initFormInfo();
  }

  initFormInfo() {
    this.qqForm = this.formBuilder.group({
      id: null,
      qqNo: [null, [Validators.required]],
      qqPassword: [1, [Validators.required]],
      qqAge: [0, [Validators.required]],
      qqPhoneNo: [null, [Validators.required]],
    });
  }

  getClassmateById(id: number) {
    this.qqService.getQQById(id, (result: any) => {
      if (result.success) {
        this.qqInfo = result.data;
        this.qqForm.patchValue(this.qqInfo);
      } else {
        this.publicService.notice('error', '错误', result.msg);
      }
    });
  }

  save() {
    this.qqService.addQQ(this.qqForm.value, (result: any) => {
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
    this.router.navigateByUrl("/info/qq-list");
  }

}

