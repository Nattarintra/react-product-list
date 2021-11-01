import React from "react"
import { Card, Button } from "react-bootstrap"

const ProductCard = ({ imageUrl = "/images/default.png", title = "Lorem ipsum dolor sit amet." }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}
export default ProductCard
