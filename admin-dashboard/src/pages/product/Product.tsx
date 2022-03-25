import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateProduct } from "../../redux/apiCalls";

const Product: React.FC = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state: any) =>
    state.product.products.find((product: any) => product._id === productId)
  );

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState<any>({
    img: product.img,
    title: product.title,
    description: product.description,
    price: product.price,
    inStock: product.inStock,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    updateProduct(product._id, inputs, dispatch);
  };

  console.log(inputs);
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            {/* <Link to="/newproduct">
              <button className="productAddButton">Create</button>
            </Link> */}
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={productData}
                dataKey="Sales"
                title="Sales Performance"
                grid={undefined}
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{product._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">sales:</span>
                  <span className="productInfoValue">5123</span>
                </div>

                <div className="productInfoItem">
                  <span className="productInfoKey">in stock:</span>
                  <span className="productInfoValue">{product.inStock}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Image</label>
                <input
                  name="img"
                  type="text"
                  placeholder={product.img}
                  onChange={handleChange}
                />

                <label>Product Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder={product.title}
                  onChange={handleChange}
                />
                <label>Product Description</label>
                <input
                  name="description"
                  type="text"
                  placeholder={product.description}
                  onChange={handleChange}
                />
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder={product.price}
                  onChange={handleChange}
                />
                <label>In Stock</label>
                <select name="inStock" id="idStock" onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              {/* <div className="productFormRight">
                <div className="productUpload">
                  <img src={product.img} alt="" className="productUploadImg" />
                  <label htmlFor="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
               
               </div> */}
              <Link to="/products">
                <button onClick={handleClick} className="productButton">
                  Update
                </button>
              </Link>
              {/* <button onClick={handleClick} className="productButton">
                Update
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
