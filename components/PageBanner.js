const PageBanner = ({ pageTitle, pageName, bg, homeUrl }) => {
  return (
    <div className={`page-banner pt_165 ${bg ? "page-banner-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-8 m-auto">
            <div className="tf__common_heading pb_15">
              <h6>
                {homeUrl ? "HOME /" : ""} {pageName}
              </h6>
              <h2 className="tf__common_heading_color">{pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
