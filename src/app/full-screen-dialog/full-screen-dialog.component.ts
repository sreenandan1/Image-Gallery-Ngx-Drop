import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-screen-dialog',
  standalone: false,
  
  templateUrl: './full-screen-dialog.component.html',
  styleUrl: './full-screen-dialog.component.css'
})
export class FullScreenDialogComponent {
  files: File[];
  currentIndex: number;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: { file: File,files:File[],index:number}) {
    this.files=data.files
    this.currentIndex=data.index
  }

  getImageUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  moveNext(){
    if(this.currentIndex < this.files.length -1){
      this.currentIndex++
    }
  }

  moveBack(){
  if(this.currentIndex >0)
    this.currentIndex--;
  }

  getCurrentImageUrl(){
    return this.getImageUrl(this.files[this.currentIndex])
  }

}
