import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGallaryComponent } from './image-gallary/image-gallary.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatListModule} from '@angular/material/list';
import { FullScreenDialogComponent } from './full-screen-dialog/full-screen-dialog.component';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [
    AppComponent,
    ImageGallaryComponent,
    FullScreenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    CdkDrag,
    NgxFileDropModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
