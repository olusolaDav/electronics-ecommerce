import './product-heading.scss'

function ProductHeading() {
    return (
      <div className="product-heading">
        <div className="product-heading__content">
          <h3 className="product-heading__content--left">Products</h3>
          <h4 className="product-heading__content--right">View All</h4>
        </div>

        <hr />
      </div>
    );
}

export default ProductHeading;