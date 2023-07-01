import React from "react";
import avatar from "../../../../assets/avater/avater1.jpg";
import Input from "../../../Common/Input";

const MyProfile = () => {
  return (
    <div className="my_profile_page_wrapper">
      <div className="my_profile_card">
        <div className="section_title">
          <h2>profile</h2>
        </div>
        <div className="profile_head">
          <div className="photo_content">
            <div className="cover_photo"></div>
          </div>
          <div className="profile_short_info">
            <div className="profile_photo">
              <img src={avatar} width="100%" alt="img" />

              {/* {isLoading && "Uploading..."} */}
              <form encType="multipart/form-data">
                <div className="form-check form-check-label">
                  <label htmlFor="img" className="form-check-label">
                    <Input
                      type="file"
                      name="image"
                      className="form-check-label"
                      //   onChange={handleChange}
                    />
                  </label>
                </div>
              </form>
            </div>
            <div className="profile_info">
              <div className="profile_name">
                <h2>Jhon Murari</h2>
                <p>Role: </p>
              </div>
              <div className="profile_email">
                <h2>murari@mail.com</h2>
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_bottom">
          <div className="profile_title">
            <h2>Profile Info details</h2>
          </div>
          <div className="profile_field">
            <div className="form_group">
              <Input
                label="Name"
                type="text"
                // value={data?.data?.name}
                value="Jhon murari"
                disabled={true}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Email"
                type="text"
                // value={data?.data?.email}
                value="murari@mail.com"
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Phone No."
                type="text"
                // value={data?.data?.mobile}
                value="0132684985"
                disabled={true}
                inputGroupClass="right"
              />
            </div>
            <div className="form_group">
              <Input
                label="Join Date"
                type="text"
                // value={new Date(
                //   parseInt(data?.data?.join_date)
                // )?.toDateString()}
                value="12/15/20"
                disabled={true}
                inputGroupClass="left"
              />
            </div>
            <div className="form_group">
              <Input
                label="Gender"
                type="text"
                // value={data?.data?.gender}
                value="Male"
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Country"
                type="text"
                // value={data?.data?.country}
                value="Bangladesh"
                disabled={true}
                inputGroupClass="right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
