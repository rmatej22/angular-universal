import { NgModule } from '@angular/core';
import {
  ServerModule,
  //  ServerTransferStateModule
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    // ServerTransferStateModule no more needed
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
