import ProductListing from "./ProductListing";
import ProductSidebar from "./ProductSidebar";

function ProductFilter() {
  return (
    <main
      style={{
        marginTop: "7.5%",
        position: "absolute",
        top: 0,
      }}
    >
      <section className="main-content">
        <div className="content-wrapper">
          <div className="filters-and-results-parent">
            <div className="filters-and-results">
              <div className="rectangle-parent1">
                <div className="frame-child2"></div>
                <div className="product-search">
                  <div className="date-range1">
                    <img
                      className="iconoutlinesearch"
                      alt=""
                      src="/iconoutlinesearch.svg"
                    />

                    <div className="search-label1">
                      <div className="search-products">Search Products</div>
                    </div>
                  </div>
                  <img
                    className="layout-toggle-icon"
                    loading="lazy"
                    alt=""
                    src="/layout-toggle.svg"
                  />
                </div>
                <div className="additional-filters">
                  <button className="date-range2">
                    <div className="date-range-child"></div>
                    <div className="add-remarks">Add Remarks</div>
                  </button>
                  <div className="date-range3">
                    <div className="date-range-item"></div>
                    <div className="show-by-container">
                      <span className="show-by">
                        <span className="show-by1">Show by : </span>
                        <span className="span"> </span>
                      </span>
                      <span className="sizes">
                        <span className="sizes1"> Sizes</span>
                      </span>
                    </div>
                  </div>
                  <img
                    className="date-range-icon"
                    loading="lazy"
                    alt=""
                    src="/date-range.svg"
                  />
                </div>
              </div>
              <div className="rectangle-parent2">
                <div className="frame-child3"></div>
                <div className="scan-area">
                  <div className="scan-options">
                    <img
                      className="scan-dropdown-icon"
                      alt=""
                      src="/frame-1.svg"
                    />

                    <div className="scan-label">
                      <div className="scan-product-by">Scan Product by...</div>
                    </div>
                  </div>
                </div>
                <div className="scan-input-area">
                  <div className="scan-input-area-inner">
                    <div className="rectangle-parent3">
                      <div className="frame-child4"></div>
                      <div className="design-no">
                        <span className="span1"> </span>
                        <span className="design-no1">Design No</span>
                      </div>
                      <div className="scan-dropdown-icon1">
                        <img
                          className="chevron-down-icon"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="scan-input-area-child"></div>
                  <div className="results-placeholder">
                    <img
                      className="results-area-icon"
                      alt=""
                      src="/frame-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ProductListing />
          </div>
          <ProductSidebar />
        </div>
      </section>
    </main>
  );
}

export default ProductFilter;
