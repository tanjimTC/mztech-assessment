import React, { useEffect, useState } from "react";
import blogPost from "../../fakeData/fakeData";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productKey } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const postId = productKey;
    const post = blogPost.find((x) => x.key === postId);
    setPost(post);
  }, [productKey]);

  return (
    <div className="blogPost">
      <NavBar />
      {post && (
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8 ">
              <div>
                <div className="mt-4">
                  <h4 className="text-center mb-4">{post.category}</h4>
                  <h5 className="postTitle">{post.name}</h5>
                </div>
                <br />
                <center className="mb-5">
                  <h5>Seller :{post.seller}</h5>
                  <img src={post.img} alt="Post" className="img-fluid" />
                </center>

                <div className="d-flex justify-content-around ">
                  <div className="mb-3">
                    <div className="mx-4">
                      <b>
                        In Stock <h3>{post.stock}</h3>
                      </b>
                    </div>
                    <br />
                    <div className="mx-4">
                      <b>
                        Star Count <h3>{post.starCount}</h3>
                      </b>
                    </div>
                  </div>

                  <div>
                    <div className="mx-4">
                      <b>
                        Price <h3>{post.price}</h3>
                      </b>
                    </div>
                    <br />
                    <div className="mx-4">
                      <b>
                        Shipping cost <h3>{post.shipping}</h3>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
