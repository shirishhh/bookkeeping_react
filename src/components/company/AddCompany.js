import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addCompanyAction } from "../../redux/actions/CompanyAction";
import CompanyForm from "./CompanyForm";

class AddCompany extends React.Component {
  onSubmit = (formValues) => {
    this.props.addCompanyAction(formValues);
    console.log("hello");
  };
  render() {
    return (
      <div>
        <CompanyForm onSubmit={this.onSubmit}></CompanyForm>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { companyList: Object.values(state.companyList) };
};

export default connect(mapStateToProps, { addCompanyAction })(AddCompany);
