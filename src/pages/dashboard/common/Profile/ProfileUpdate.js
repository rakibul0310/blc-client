import React from "react";
import Select from "../../../../componentes/Common/Select";
import Input from "../../../../componentes/Common/Input";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../../../../componentes/Common/Button";

const ProfileUpdate = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => {
        setCountries(json.map((c) => c.name));
      });
  }, []);
  return (
    <div className="userUpdate_page_wrapper">
      <div className="userupdate_card">
        <div className="userupdate_title">
          <h2>update profile</h2>
        </div>
        <div className="userupdate_field">
          <form onSubmit={"handleSubmit"}>
            <div className="form_group">
              <Input
                label="Name"
                type="text"
                // value={data.name}
                value="Jhon murari"
                name="name"
                // onChange={handleChange}
                inputGroupClass="left"
                disabled={true}
              />
              <Input
                label="Mobile"
                type="text"
                // value={data.mobile}
                value="051653203"
                name="mobile"
                // onChange={handleChange}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <div className="form_group_special_container">
                <Select
                  className="special_input"
                  label="Country"
                  //   value={data.country}
                  value="Bangladesh"
                  name="country"
                  //   onChange={handleChange}
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
                  //   value={data.gender}
                  value="Male"
                  //   onChange={handleChange}
                  options={["Male", "Female", "Others"]}
                />
              </div>
            </div>
            <div className="submit_button">
              <Button type="submit" disabled="{isLoading}">
                {!"isLoading" ? "Loading..." : "Update"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
