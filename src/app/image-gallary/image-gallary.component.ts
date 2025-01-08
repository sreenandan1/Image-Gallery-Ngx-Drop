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

  // Change type to match new structure
  files: { file: File; url: string }[] = [];

  // Handle traditional file input
  onfileSelected(event: any) {
    const newFiles = Array.from(event.target.files) as File[];
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

  // Update getImageUrl to use precomputed URLs
  getImageUrl(fileData: { file: File; url: string }): string {
    return fileData.url;
  }

  // Pass files and index to FullScreenDialogComponent
  openFullScreen(fileData: { file: File; url: string }) {
    console.log(window.innerWidth,window.innerHeight);
    
    const index = this.files.indexOf(fileData);
    this.dialog.open(FullScreenDialogComponent, {

      height: '750px',
      width: '1080px',
      minWidth:1080,

       
      
      data: { files: this.files, index }
    });
  }

  
}
