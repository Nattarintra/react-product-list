import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const ProductCard = ({ filename = "/images/default.png", product_name = "Product name", brand_name = "Dyrberg/Kern", actual_price = "55.000", base_price = "55.000" }) => {
  return (
    <>
      <Link to="#">
        <Card style={{ width: "18rem" }}>
          <Card.Img src={filename} variant="top" />
          <Card.Body>
            <Card.Text>{product_name}</Card.Text>
            <Card.Text>{brand_name}</Card.Text>
            <Card.Text>{actual_price}</Card.Text>
            <Card.Text>{base_price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}
export default ProductCard
