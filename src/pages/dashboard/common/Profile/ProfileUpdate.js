import React from "react";
import Select from "../../../../componentes/Common/Select";
import Input from "../../../../componentes/Common/Input";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../../../../componentes/Common/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserData,
  userData,
} from "../../../../features/slices/commonSlices/userInfoSlice";
import Loading from "../../../../componentes/Common/Loading";

const ProfileUpdate = () => {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState({
    mobile: "",
    country: "",
    gender: "",
  });
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => {
        setCountries(json.map((c) => c.name));
      });
  }, []);

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(userData());
  }, []);

  if (userInfo?.isLoading) {
    return <Loading />;
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let processedData = {};
    if (data.mobile) {
      processedData = { ...processedData, mobile: data.mobile };
    }
    if (data.country) {
      processedData = { ...processedData, country: data.country };
    }
    if (data.gender) {
      processedData = { ...processedData, gender: data.gender };
    }

    dispatch(updateUserData(processedData));
  };

  return (
    <div className="userUpdate_page_wrapper">
      <div className="userupdate_card">
        <div className="userupdate_title">
          <h2>update profile</h2>
        </div>
        <div className="userupdate_field">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="Name"
                type="text"
                value={userInfo?.data?.name}
                name="name"
                onChange={handleChange}
                inputGroupClass="left"
                disabled={true}
              />
              <Input
                label="Mobile"
                type="text"
                value={userInfo?.data?.mobile}
                name="mobile"
                onChange={handleChange}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <div className="form_group_special_container">
                <Select
                  className="special_input"
                  label="Country"
                  value={userInfo?.data.country}
                  name="country"
                  onChange={handleChange}
                  options={countries}
                  inputGroupClass="left"
                />
              </div>
            </div>
            <div className="form_group">
              <div className="gender_select ">
                <Select
                  className="special_input"
                  label="Gender"
                  name="gender"
                  value={userInfo?.data.gender}
                  onChange={handleChange}
                  options={["Male", "Female", "Others"]}
                />
              </div>
            </div>
            <div className="submit_button">
              {userInfo?.isLoading ? (
                <Button type="submit" disabled="{isLoading}">
                  <span class="loading-icon"></span>
                  {userInfo?.isLoading ? "Loading..." : "Update"}
                </Button>
              ) : (
                <Button type="submit" disabled="{isLoading}">
                  {!"isLoading" ? "Loading..." : "Update"}
                </Button>
              )}
              {/* <Button type="submit" disabled="{isLoading}">
                {!"isLoading" ? "Loading..." : "Update"}
              </Button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
