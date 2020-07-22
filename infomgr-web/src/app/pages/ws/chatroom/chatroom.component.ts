import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/services/websocket/msgService/msg.service';

import { ChatMessage, Receive, Send, User } from 'src/app/services/websocket/interfaces/message';
import { MessageListener } from 'src/app/services/websocket/core/message-listeners';
import { MessageListenersManager } from 'src/app/services/websocket/core/message-listeners-manager'

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.less']
})
export class ChatroomComponent extends MessageListenersManager implements OnInit {

  constructor(public msgService: MsgService) {
    super(msgService);
   }

  ngOnInit() {
    this.connectServer();
  }

  connectServer() {
    this.msgService.connect();
  }

  sendMsg(data: any) {
    this.msgService.sendMsg(Send.MESSAGE, data);
  }

  @MessageListener(Receive.MESSAGE)
  chatMsg(message: ChatMessage) {
    console.log(message);
  }

}
