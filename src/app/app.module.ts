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
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



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
    provideAnimationsAsync(),
    // MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
