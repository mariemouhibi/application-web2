import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http:HttpClient) { }


  downloadFile(data) {
    const REQUEST_PARAMS = new HttpParams().set('cv_file',data.cv_file);
    const REQUEST_URI = '/server/download';
    return this.http.get(REQUEST_URI,{
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer' 
    })
  }
}

