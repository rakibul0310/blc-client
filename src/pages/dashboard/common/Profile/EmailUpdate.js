import React from "react";
import Input from "../../../../componentes/Common/Input";
import Button from "../../../../componentes/Common/Button";

const EmailUpdate = () => {
  return (
    <div className="updatepassword_page_wrapper">
      <div className="accountpassword_card">
        <div className="accountpassword_title">
          <h2>update email</h2>
        </div>
        <div className="accountpassword_field">
          <form onSubmit="{handleSubmit}">
            <div className="form_group">
              <Input
                label="Current Email"
                type="email"
                // value={data.current_email}
                value="murari@mail.com"
                name="current_email"
                placeholder="Enter your current email"
                // onChange={handleChange}
                inputGroupClass="left"
                isRequired={true}
              />
              <Input
                label="New Email"
                type="email"
                // value={data.new_email}
                value="jhon@mail.com"
                name="new_email"
                // onChange={handleChange}
                placeholder="Enter your new email"
                inputGroupClass="right"
                isRequired={true}
                // error={formErrors.new_email}
              />
            </div>
            <div className="form_group">
              <Button
                type="submit"
                className="submit_btn"
                disabled="{isLoading}"
              >
                {!"isLoading" ? "Loading..." : "update"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailUpdate;
