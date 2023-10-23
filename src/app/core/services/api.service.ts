import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HttpError extends Error {
  code: number;
  url: string;

  constructor(code: number, url: string, message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = HttpError.name;
    this.url = url;
    this.code = code;
  }
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  businessList: any;
  businessUrl:string;
  resetUrl!: string;
 
  errorMessage: any;
  constructor(
    private http: HttpClient
  ) {

  }

  async download(url: string, options = {}) {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.status !== 200) {
      if (json && json.status) {
        throw new HttpError(json.status, url, JSON.stringify(json));
      } else {
        throw new HttpError(response.status, url, response.statusText);
      }
    }

    return json;
  }

  async downloadRelative(path: string, options = {}) {
    return this.download(this.businessUrl + path, options);
  }

  async request(url: RequestInfo | URL, options = {}) {
    const response = await fetch(url, options);
    return response;
  }

  async requestRelative(path: string, options = {}) {
    const response = await fetch(this.businessUrl + path, options);
    return response;
  }

  async loadBusinessList() {

    let setup = null;


    setup = await this.download('https://omanonline.org/businesses/businesses.json');

    return setup;
  }

  async getBaseUrl() {
    return this.businessUrl;
  }

  async setBaseUrl(businessUrl: string, url: string) {
    this.businessUrl = url;
    localStorage.setItem(businessUrl  , url);
  }

  async resetBaseUrl(businessUrl: string) {
    localStorage.removeItem(businessUrl);
    this.businessUrl = this.resetUrl;
  }
  async loadCategories() {
    return this.download(`https://omanonline.org/businesses/categories.json`);
  }
  async loadBusinesses() {
    return this.download(`https://omanonline.org/businesses/businesses.json`);
  }
  async loadBusiness(username: string) {
    return this.download(`https://omanonline.org/businesses/info/${username}/info/en.json`);
  }



}
