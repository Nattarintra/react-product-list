import React from "react"
import { Container } from "react-bootstrap"

//import MainLayout from "/layout/MainLayout/index"
import MainLayout from "../../layout/MainLayout"
import PageWhiteSpace from "../../components/white-space/PageWhiteSpace"
import ProductCard from "../../components/product-card/ProductCard"

const ProductView = () => {
  return (
    <MainLayout>
      <PageWhiteSpace>
        <Container>
          <ProductCard />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
