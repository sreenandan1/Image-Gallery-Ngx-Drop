import { Component } from '@angular/core';
import { FileService } from '../service/file.service';
import { MatDialog } from '@angular/material/dialog';
import { FullScreenDialogComponent } from '../full-screen-dialog/full-screen-dialog.component';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-image-gallary',
  standalone: false,
  
  templateUrl: './image-gallary.component.html',
  styleUrl: './image-gallary.component.css'
})
export class ImageGallaryComponent {

  constructor(private fileService: FileService, private dialog: MatDialog) { }

  files: File[] = [];

  // Handle traditional file input
  onfileSelected(event: any) {
    const newFiles = event.target.files;
    this.fileService.addFiles(newFiles);
    this.files = this.fileService.getFiles();
  }

  // Handle files dropped via ngx-file-drop
  public dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.fileService.addFiles([file]);
          this.files = this.fileService.getFiles();
        });
      }
    }
  }

  getImageUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  openFullScreen(file: File) {
    this.dialog.open(FullScreenDialogComponent, {
      data: { file }
    });
  }
}
