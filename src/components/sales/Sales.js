import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/header";
import HeaderContent from "../header/HeaderContent";
import Sidebar from "../sidebar/Sidebar";

export const Sales = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <HeaderContent />
        <div className="content ">
          <div className="row ">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary ">
                <div className="box-header with-border">
                  <h3 className="box-title">Add Company</h3>
                </div>
                <form>
                  <div className="box-body ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlInput1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">
                            Example select
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect2">
                            Example multiple select
                          </label>
                          <select
                            multiple
                            className="form-control"
                            id="exampleFormControlSelect2"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Example textarea
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
