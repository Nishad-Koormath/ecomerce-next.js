import Image from "next/image";
import { ProductService } from "../../services/ProductServices";
import "./styles.css";
import { Props } from "@/app/types/inference";

export async function generateMetadata(props:Props){
  const product_id = (await props.params).productId
  let product;
  if (product_id) {
    product = await ProductService.getProducts(`/products/${product_id}`);
    return{
      title: product.title
    }
  }
  return {
    title: 'E-Commerce | Product Details'
  }

}

const ProductDetails = async (props:Props) => {
  const product_id = (await props.params).productId;
  const product = await ProductService.getProducts(`/products/${product_id}`);
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <Image
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ objectFit: "contain" }}
          width={100}
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h4>${product.price}</h4>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
