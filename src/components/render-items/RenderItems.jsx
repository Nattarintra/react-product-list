import React from "react"
import _isEmpty from "lodash/isEmpty"

const RenderItems = ({ items = [], render, renderEmpty }) => {
  if (_isEmpty(items)) {
    return renderEmpty ? <>{renderEmpty?.()}</> : null
  }

  if (!Array.isArray(items)) return null

  return <>{items?.map?.((item, index) => index < 16 && render?.(item, index))}</>
}

export default RenderItems
