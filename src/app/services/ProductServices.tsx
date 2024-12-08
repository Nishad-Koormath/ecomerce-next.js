import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static getProducts = async (route: string) => {
    console.log("route:",route);
    
    const productResponse = await fetch(this.getUrl(route), {
      cache: "no-store",
    });
    const products = await productResponse.json();
    return products;
  };
}
