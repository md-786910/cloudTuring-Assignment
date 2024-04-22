function Header() {
  return (
    <div style={{ position: "relative" }}>
      <div className="header fixedTop">
        <header className="top-bar">
          <div className="search-bar-container">
            <div className="search-input-area">
              <div className="input-and-button">
                <div className="search-bar">
                  <div className="search-2-line-3-1-wrapper">
                    <img
                      className="search-2-line-3-1"
                      alt=""
                      src="./public/search2line-3-1.svg"
                    />
                  </div>
                  <div className="search-label">
                    <h3 className="search-pos-asns">
                      Search POs, ASNs, & pages etc
                    </h3>
                  </div>
                  <div className="rectangle-parent">
                    <div className="frame-child"></div>
                    <div className="shortcut-key">
                      <div className="command-key">
                        <img
                          className="command-icon"
                          alt=""
                          src="./public/command.svg"
                        />
                      </div>
                      <div className="k">+K</div>
                    </div>
                    <div className="shortcut-key1">
                      <div className="command-wrapper">
                        <img
                          className="command-icon1"
                          alt=""
                          src="./public/command.svg"
                        />
                      </div>
                      <div className="shiftk">+Shift+K</div>
                    </div>
                    <img className="separator-icon" alt="" />
                  </div>
                </div>
              </div>
              <div className="actions">
                <div className="help-button">
                  <img
                    className="help-icon"
                    loading="lazy"
                    alt=""
                    src="./public/help.svg"
                  />
                </div>
                <div className="upload-button">
                  <img
                    className="upload-icon"
                    loading="lazy"
                    alt=""
                    src="./public/upload.svg"
                  />
                </div>
                <div className="file-uploader">
                  <div className="file-area">
                    <div className="rectangle-group">
                      <div className="frame-item"></div>
                      <div className="frame-inner"></div>
                    </div>
                    <div className="file-name-area">
                      <img
                        className="file-text-line-1-icon"
                        loading="lazy"
                        alt=""
                        src="./public/filetextline-1.svg"
                      />

                      <div className="rectangle-container">
                        <div className="rectangle-div"></div>
                        <b className="file-name">20</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notifications">
                  <div className="notification-area">
                    <img
                      className="notification-line-1-icon"
                      loading="lazy"
                      alt=""
                      src="./public/notificationline-1.svg"
                    />

                    <div className="group-div">
                      <div className="frame-child1"></div>
                      <b className="notification-content">120</b>
                    </div>
                  </div>
                </div>
                <div className="actions-inner">
                  <div className="line-div"></div>
                </div>
                <div className="profile-area">
                  <div className="profile-placeholder">
                    <div className="profile-placeholder-child"></div>
                    <div className="profile-picture"></div>
                    <img
                      className="profile-icon"
                      loading="lazy"
                      alt=""
                      src="./public/profile.svg"
                    />
                  </div>
                </div>
                <div className="team-info">
                  <div className="team-and-name">
                    <div className="vmart-procurement-team">
                      Vmart-Procurement Team
                    </div>
                    <div className="dropdown">
                      <img
                        className="arrow-down-s-fill-1-1"
                        alt=""
                        src="./public/arrowdownsfill-1-1.svg"
                      />
                    </div>
                  </div>
                  <div className="ashish-kumar-singla">Ashish Kumar Singla</div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="navigation-area">
            <div className="breadcrumb-parent">
              <div className="breadcrumb">
                <div className="breadcrumb1">
                  <div className="inline">
                    <img className="home-icon" alt="" src="./public/home.svg" />

                    <div className="label">Home</div>
                  </div>
                  <img
                    className="slash-bold-icon"
                    alt=""
                    src="./public/slashbold.svg"
                  />

                  <div className="inline1">
                    <div className="label1">Sales Order</div>
                    <img
                      className="current-page-dropdown"
                      alt=""
                      src="./public/current-page-dropdown@2x.png"
                    />
                  </div>
                  <img
                    className="slash-bold-icon1"
                    alt=""
                    src="./public/slashbold-1.svg"
                  />

                  <div className="label2">Product Catalogue</div>
                </div>
              </div>
              <div className="date-range-filter">
                <div className="date-range">
                  <div className="place-order">Place Order</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
