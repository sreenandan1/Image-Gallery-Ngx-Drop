import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-screen-dialog',
  standalone: false,
  
  templateUrl: './full-screen-dialog.component.html',
  styleUrl: './full-screen-dialog.component.css'
})
export class FullScreenDialogComponent {
  files: { file: File; url: string }[];
  currentIndex: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { files: { file: File; url: string }[], index: number }) {
    this.files = data.files || []; // Ensure fallback
    this.currentIndex = data.index || 0; // Ensure fallback
  }

  moveNext() {
    if (this.currentIndex < this.files.length - 1) {
      this.currentIndex++;
    }
  }

  moveBack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Use cached URL instead of regenerating
  getCurrentImageUrl() {
    return this.files[this.currentIndex]?.url; // Use optional chaining to avoid undefined errors
  }
}
