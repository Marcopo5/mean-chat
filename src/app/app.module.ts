import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ChatService } from './chat.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule,
  ],
  providers: [
    ChatService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
