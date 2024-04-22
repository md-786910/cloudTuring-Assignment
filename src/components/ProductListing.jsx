function ProductListing() {
  return (
    <div className="product-table">
      {[...new Array(20)]?.map((product, index) => {
        return (
          <div key={index} className={`table-headers`}>
            <div className="checkboxes-parent">
              <img
                className="checkboxes-icon"
                alt=""
                src="/checkboxes@2x.png"
              />

              <div className="rectangle-parent4">
                <div className="frame-child5"></div>
                <input className="unchecked" type="checkbox" />

                <div className="toggle-state-container">
                  <div className="toggle-state">
                    <div className="off">10% Off</div>
                  </div>
                </div>
              </div>
              <div className="item-carousel-navigation">
                <div className="previous-button">
                  <img
                    className="prev-icon"
                    loading="lazy"
                    alt=""
                    src="/prev@2x.png"
                  />

                  <div className="navigation-icon-container">
                    <img
                      className="navigation-icon-container-child"
                      loading="lazy"
                      alt=""
                      src="/group-289589.svg"
                    />
                  </div>
                </div>
                <div className="next">
                  <div className="next-child"></div>
                  <img className="next-icon" alt="" src="/frame-3.svg" />
                </div>
              </div>
            </div>
            <div className="rectangle-parent5">
              <div className="frame-child6"></div>
              <div className="item-info-container">
                <div className="item-name-design-container">
                  <div className="item-name-design-details">
                    <div className="item-name-color-selection">
                      <div className="color-circle"></div>
                    </div>
                    <div className="mustard-yellow">Mustard Yellow</div>
                  </div>
                  <div className="multiplier-info">
                    <div className="multiplier-5">Multiplier : 5</div>
                  </div>
                </div>
                <div className="item-name">Item Name</div>
              </div>
              <div className="mens-white-check">
                Mens white check Shirt regular fit
              </div>
              <div className="item-info-details">
                <div className="item-design-info">
                  <div className="design-number">Design Number</div>
                  <div className="dn098234839">DN098234839</div>
                </div>
                <div className="item-size-stock-info">
                  <div className="item-size">
                    <div className="xl">XL</div>
                  </div>
                  <div className="item-stock-info">
                    <div className="instock-100">Instock : 100</div>
                  </div>
                </div>
                <div className="item-price-container">
                  <div className="item-unit-price">
                    <div className="div">₹ 799.67</div>
                    <div className="div1">₹ 1299.67</div>
                  </div>
                  <div className="item-total-price">
                    <img
                      className="date-range-icon1"
                      alt=""
                      src="/date-range-1.svg"
                    />

                    <div className="date-range4">
                      <div className="total-price-size-quantity">
                        <div className="total-price-size">
                          <div className="total-price-size-value">
                            <b className="xl1">XL</b>
                          </div>
                          <div className="rectangle-parent6">
                            <div className="frame-child7"></div>
                            <div className="more">+5 More</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-action-container">
                        <div className="item-action-divider"></div>
                        <img
                          className="item-action-button"
                          alt=""
                          src="/frame-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListing;
