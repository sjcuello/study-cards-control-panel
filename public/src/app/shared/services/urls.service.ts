import { Injectable } from '@angular/core';
import { url } from '../../../assets/environment-specific-settings/urls';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  public urlConst = url.backendUrl;
}
