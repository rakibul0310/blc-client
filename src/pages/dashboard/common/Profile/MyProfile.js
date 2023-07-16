import React, { useEffect } from "react";
import avatar from "../../../../assets/avater/user_avatar.png";
import Input from "../../../../componentes/Common/Input";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../../../features/slices/commonSlices/userInfoSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(userData());
  }, []);

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
              <img
                src={userInfo?.data?.avatar ? userInfo?.data?.avatar : avatar}
                width="100%"
                alt="img"
              />

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
                <h2>Name: {userInfo?.data?.name}</h2>
                <p>Role: {userInfo?.data?.role}</p>
              </div>
              <div className="profile_email">
                <p>Email</p>
                <h2>{userInfo?.data?.email}</h2>
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
                value={userInfo?.data?.name}
                disabled={true}
                inputGroupClass="right"
              />
              <Input
                label="Email"
                type="text"
                value={userInfo?.data?.email}
                disabled={true}
                inputGroupClass="left"
              />
            </div>
            <div className="form_group">
              <Input
                label="Phone No."
                type="text"
                value={
                  userInfo?.data?.mobile ? userInfo?.data?.mobile : "------"
                }
                disabled={true}
                inputGroupClass="right"
              />
              <Input
                label="Join Date"
                type="text"
                value={
                  userInfo?.data?.join_date
                    ? userInfo?.data?.join_date
                    : "------"
                }
                disabled={true}
                inputGroupClass="left"
              />
            </div>
            <div className="form_group">
              <Input
                label="Gender"
                type="text"
                value={
                  userInfo?.data?.gender ? userInfo?.data?.gender : "-----"
                }
                disabled={true}
                inputGroupClass="left"
              />
              <Input
                label="Country"
                type="text"
                value={
                  userInfo?.data?.country ? userInfo?.data?.country : "------"
                }
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
