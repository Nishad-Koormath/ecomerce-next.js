export abstract class ServiceBase {
    // this is one method to use url
   static API_URL = 'https://fakestoreapi.com';

   // another method is used and implemented in this project
    static getUrl(path: string){
        return `${this.API_URL}${path}`;
        // return "url:"+this.API_URL+path
    }
}