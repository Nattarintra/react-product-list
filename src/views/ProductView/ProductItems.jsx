import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "@components/product-card/ProductCard"

//import RenderItems from "@components/render-items/RenderItems"
import { productData } from "@data/product_list"

import ReactPaginate from "react-paginate"

const ProductItems = () => {
  const [productItems] = useState(productData.slice(0, 44))
  const [pageNumber, setPageNumber] = useState(0)

  const productItemsPerPage = 8
  const pagesVisited = pageNumber * productItemsPerPage

  const displayProductItems = productItems.slice(pagesVisited, pagesVisited + productItemsPerPage).map(productItem => {
    return (
      <Col key={productItem.id} className="mt-5">
        <ProductCard actual_price={productItem.actual_price} brand_name={productItem.brand_name} filename={`${productItem.filename}`} id={productItem.id} product_name={productItem.product_name} />
      </Col>
    )
  })
  const pageCount = Math.ceil(productItems.length / productItemsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className="">
      <Container>
        <Row>{displayProductItems}</Row>
        <ReactPaginate activeClassName={"paginationActive"} containerClassName={"paginationBtns"} disabledClassName={"paginationDisabled"} nextLabel={"Next"} nextLinkClassName={"nextBtn"} pageCount={pageCount} previousLabel={"Previous"} previousLinkClassName={"previoseBtn"} onPageChange={changePage} />
      </Container>
    </div>
  )
}
export default ProductItems
