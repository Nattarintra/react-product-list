import React from "react"
import { Container } from "react-bootstrap"

import MainLayout from "@layout/MainLayout/index"
import PageWhiteSpace from "@components/white-space/PageWhiteSpace"
import ProductItems from "@views/ProductView/ProductItems"

const ProductView = () => {
  return (
    <MainLayout>
      <PageWhiteSpace>
        <Container>
          <ProductItems />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
