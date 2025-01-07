

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FileService {
  private files: { file: File, url: string }[] = [];

  addFiles(newFiles: FileList | File[]) {
    if (newFiles instanceof FileList) {
      Array.from(newFiles).forEach(file => this.addFile(file));
    } else {
      newFiles.forEach(file => this.addFile(file));
    }
  }

  private addFile(file: File) {
    const url = URL.createObjectURL(file);
    this.files.push({ file, url });
  }

  getFiles() {
    return this.files;
  }
}

