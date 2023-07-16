import React, { useState } from "react";
import Input from "../../../../componentes/Common/Input";
import Button from "../../../../componentes/Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserPassword } from "../../../../features/slices/commonSlices/updatePassowrdSlice";
import { useEffect } from "react";

const PasswordUpdate = () => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confrimPassword: "",
  });
  const dispatch = useDispatch();
  const updatePassword = useSelector((state) => state.updatePassword);
  useEffect(() => {
    const toastOptions = {
      position: "bottom-right",
    };
    updatePassword?.data &&
      toast.success(updatePassword?.data?.message, toastOptions);
    updatePassword?.error && toast.error(updatePassword?.error, toastOptions);
  }, [updatePassword?.data, updatePassword?.error]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.newPassword !== data.confrimPassword) {
      toast.error("Confrim password doesn't match!");
    } else {
      dispatch(updateUserPassword(data));
    }
  };

  return (
    <div className="updatepassword_page_wrapper">
      <div className="accountpassword_card">
        <div className="accountpassword_title">
          <h2>update password</h2>
        </div>
        <div className="accountpassword_field">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="Current Password"
                name="current_password"
                placeholder="Enter your current password"
                onChange={handleChange}
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
                name="new_password"
                onChange={handleChange}
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
                name="confirm_new_password"
                placeholder="Enter your new password"
                onChange={handleChange}
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
              {updatePassword?.isLoading ? (
                <Button type="submit" disabled="{isLoading}">
                  <span class="loading-icon"></span>
                  {updatePassword?.isLoading ? "Loading..." : "Update"}
                </Button>
              ) : (
                <Button type="submit" disabled="{isLoading}">
                  {!"isLoading" ? "Loading..." : "Update"}
                </Button>
              )}
              {/* <Button
                type="submit"
                className="submit_btn"
                disabled="{isLoading}"
              >
                {!"isLoading" ? "Loading..." : "update"}
              </Button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdate;
