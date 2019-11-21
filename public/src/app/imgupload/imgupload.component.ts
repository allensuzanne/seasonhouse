import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-imgupload',
  templateUrl: './imgupload.component.html',
  styleUrls: ['./imgupload.component.css']
})
export class ImguploadComponent implements OnInit {
  selectedFile: File = null;

constructor(private http: HttpClient){}

onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log("File ready to be sent")
    this.http.post('/api/images/new')
    .subscribe(res => {
      console.log(res);
    });
  }


  constructor() { }

  ngOnInit() {
  }

}
