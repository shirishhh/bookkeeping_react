import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCompanyAction } from "../../redux/actions/CompanyAction";
import HeaderContent from "../header/HeaderContent";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/header";
import Footer from "../footer/Footer";

class CompanyList extends Component {
  componentDidMount() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const userId = auth.user.userId;
    this.props.getCompanyAction(userId);
  }

  renderList() {
    return this.props.companyList.map((companyList, index) => {
      return (
        <tbody key={companyList.companyId}>
          <tr>
            <th scope="row">{index + 1}</th>
            <td>
              <img
                style={{ height: "60px" }}
                className="img-circle"
                src="dist/img/user2-160x160.jpg"
                alt="Card image cap"
              ></img>
            </td>
            <td>{companyList.companyName}</td>
            <td>{companyList.panNo}</td>
            <td>{companyList.companyAddress}</td>
            <td>
              {/* Call to action buttons */}
              <ul className="list-inline m-0">
                <li className="list-inline-item">
                  <Link to={`/editcompany/${companyList.companyId}`}>
                    <button
                      className="btn btn-success btn-sm rounded-0"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit"
                    >
                      <i className="fa fa-edit" />
                    </button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <button
                    className="btn btn-danger btn-sm rounded-0"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i className="fa fa-trash" />
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    if (!this.props.companyList) {
      return <div class="spinner-border text-info">Loading</div>;
    }
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <HeaderContent />
          <section className="content ">
            <Link to="/addcompany">
              <button
                type="button"
                className="btn btn-success"
                style={{ padding: "10px" }}
              >
                Add Company
              </button>
              <br></br>
            </Link>
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="card border-0 shadow">
                  <div className="card-body p-5">
                    <div className="table-responsive">
                      <table className="table m-0 ">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Logo</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Pan No.</th>
                            <th scope="col">Address</th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        {this.renderList()}
                      </table>
                      {/* Responsive table */}
                    </div>
                  </div>
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
const mapStateToProps = (state) => {
  return { companyList: Object.values(state.companyList) };
};
export default connect(mapStateToProps, { getCompanyAction })(CompanyList);
