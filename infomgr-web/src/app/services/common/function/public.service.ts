import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private modalService: NzModalService,
    private msgTipService: NzMessageService,
    private noticeService: NzNotificationService) { }

  /*
  * @Descripttion: 通知提醒框
  * @param
  *   type: blank、success、error、info、warning
  *   title: 标题
  *   msg: 提示内容
  */
  notice(type: string, title: string, msg: string) {
    this.noticeService.create(type, title, msg);
  }

  /*
  * @Descripttion: 全局提示
  * @param
  *   type: success、error、info、warning、loading
  *   msgTip: 提示内容
  */
  msgTip(type: string, msgTip: string) {
    this.msgTipService.create(type, msgTip);
  }

  confirm(confirmInfo: string, operate: Function) {
    this.modalService.create({
      nzTitle: confirmInfo,
      nzContent: null,
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => operate,
    })
  }

  /*
  * @Descripttion: 表单校验
  * @param
  *   form: 表单
  */
  validForm(form: FormGroup) {
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
    if (form.valid) {
      return true;
    }
    return false;
  }


}
