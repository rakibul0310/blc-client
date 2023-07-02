import React from "react";
import Input from "../../../../componentes/Common/Input";
import Button from "../../../../componentes/Common/Button";

const PasswordUpdate = () => {
  return (
    <div className="updatepassword_page_wrapper">
      <div className="accountpassword_card">
        <div className="accountpassword_title">
          <h2>update password</h2>
        </div>
        <div className="accountpassword_field">
          <form onSubmit="{handleSubmit}">
            <div className="form_group">
              <Input
                label="Current Password"
                // value={data.current_password}
                value={123565}
                name="current_password"
                placeholder="Enter your current password"
                // onChange={handleChange}
                inputGroupClass="left"
                isRequired={true}
                // error={formErrors.current_password}
              />
              <Input
                label=""
                type="text"
                name=""
                placeholder=""
                className="input_field"
                inputGroupClass="right"
                isRequired={false}
                disabled={true}
                style={{ display: "none" }}
              />
            </div>
            <div className="form_group">
              <Input
                label="New Password"
                // value={data.new_password}
                value="1565165"
                name="new_password"
                // onChange={handleChange}
                placeholder="Enter your new password"
                inputGroupClass="left"
                isRequired={true}
                // error={formErrors.new_password}
              />
              <Input
                label=""
                type="text"
                name=""
                placeholder=""
                className="input_field"
                inputGroupClass="right"
                isRequired={false}
                disabled={true}
                style={{ display: "none" }}
              />
            </div>
            <div className="form_group">
              <Input
                label="Confirm New Password"
                // type={`${showPassword ? "text" : "password"}`}
                // value={data.confirm_new_password}
                value="1416421"
                name="confirm_new_password"
                placeholder="Enter your new password"
                // onChange={handleChange}
                inputGroupClass="left"
                isRequired={true}
                // error={formErrors.confirm_new_password}
              />
              <Input
                label=""
                type="text"
                name=""
                placeholder=""
                className="input_field"
                inputGroupClass="right"
                isRequired={false}
                disabled={true}
                style={{ display: "none" }}
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

export default PasswordUpdate;
