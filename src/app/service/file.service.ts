

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FileService {
  private files: File[] = [];

  addFiles(newFiles: FileList | File[]) {
    if (newFiles instanceof FileList) {
      Array.from(newFiles).forEach(file => this.files.push(file));
    } else {
      newFiles.forEach(file => this.files.push(file));
    }
  }

  getFiles() {
    return this.files;
  }
}
