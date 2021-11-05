import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "@components/product-card/ProductCard"
import RenderItems from "@components/render-items/RenderItems"
import { productData } from "@data/product_list"

const ProductItems = () => {
  return (
    <div className="">
      <Container>
        <Row>
          <RenderItems
            items={productData}
            render={({ id, product_name, brand_name, filename, actual_price, base_price }) => (
              <Col>
                <ProductCard actual_price={actual_price} base_price={base_price} brand_name={brand_name} filename={`${filename}`} id={id} product_name={product_name} />
              </Col>
            )}
          />
        </Row>
      </Container>
    </div>
  )
}
export default ProductItems
