import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../footer/Footer";
import HeaderContent from "../header/HeaderContent";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/header";

class EditCompany extends Component {
  componentDidMount() {}
  state = {
    id: this.props.company ? this.props.company.companyId : null,
    companyName: this.props.company ? this.props.company.companyName : "",
    companyAddress: this.props.company ? this.props.company.companyAddress : "",
    panNo: this.props.company ? this.props.company.panNo : "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <HeaderContent />
          <section className="content ">
            <div className="row ">
              {/* left column */}
              <div className="col-md-12">
                {/* general form elements */}
                <div className="box box-primary ">
                  <div className="box-header with-border">
                    <h3 className="box-title">Add Company</h3>
                  </div>
                  {/* /.box-header */}
                  {/* form start */}
                  <form onSubmit={this.onFormSubmit}>
                    <div className="box-body ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Company Name</label>
                            <input
                              className="form-control"
                              placeholder="Enter Company Name"
                              value={this.state.companyName}
                              onChange={(e) => {
                                this.setState({ companyName: e.target.value });
                              }}
                            />
                          </div>

                          <div className="form-group">
                            <label>Company Address</label>
                            <input
                              className="form-control"
                              placeholder="Enter Company Address"
                              onChange={(e) => {
                                this.setState({
                                  companyAddress: e.target.value,
                                });
                              }}
                            />
                          </div>

                          <div className="form-group">
                            <label>Pan No</label>
                            <input
                              className="form-control"
                              placeholder="Enter PAN NO."
                              onChange={(e) => {
                                this.setState({ panNo: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    company: state.companyList[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps)(EditCompany);
