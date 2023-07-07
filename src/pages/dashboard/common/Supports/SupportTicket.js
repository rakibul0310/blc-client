import React, { useState } from "react";
import Select from "../../../../componentes/Common/Select";
import Input from "../../../../componentes/Common/Input";
import TextArea from "../../../../componentes/Common/TextArea";
import Button from "../../../../componentes/Common/Button";

const purpose = ["Transaction", "Others"];
const previousTicket = ["New Complaint"];

const SupportTicket = () => {
  // get ticket history
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [data, setData] = useState({
    purpose: "",
    question: "",
    proof: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", data.proof);
    formData.append("purpose", data.purpose);
    formData.append("previous_ticket_reff", data.previous_ticket_reff);
    formData.append("question", data.question);
    if (Object.keys(formErrors).length > 0) {
      Notification("All field are required", "error");
    } else {
      // console.log(data);
    }
  };

  return (
    <div className="supportticket_page_wrapper">
      <div
        style={{ backgroundColor: "#fff" }}
        className="supporttickett_form_card"
      >
        <div className="section_title">
          <h2>Support Ticket</h2>
        </div>
        <div className="supportticket_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <div className="purpose">
                <Select
                  label="Purpose"
                  className="select_field"
                  value={data.purpose}
                  name="purpose"
                  onChange={(e) =>
                    setData({
                      ...data,
                      purpose:
                        e.target.value === "--select--" ? "" : e.target.value,
                    })
                  }
                  options={purpose}
                  isRequired={true}
                />
              </div>
              <div className="ticket_reference">
                <Select
                  label="Previous Ticket Reference"
                  value={data.previous_ticket_reff}
                  name="previous_ticket_reff"
                  onChange={(e) =>
                    setData({
                      ...data,
                      previous_ticket_reff:
                        e.target.value === "--select--" ? "" : e.target.value,
                    })
                  }
                  options={previousTicket}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="form_group">
              <div className="purpose">
                <Input
                  label="Image"
                  type="file"
                  name="proof"
                  id="proof"
                  placeholder="Enter your image"
                  onChange={(e) =>
                    setData({ ...data, proof: e.target.files[0] })
                  }
                  className="input_field"
                  inputGroupClass="left"
                />
              </div>
              <div className="ticket_reference">
                <Input
                  label="Email"
                  type="text"
                  name="email"
                  // value={userData?.data?.user_id}
                  placeholder="Enter your email"
                  disabled={true}
                  className="input_field"
                  inputGroupClass="right"
                />
              </div>
            </div>
            <div
              className="form_group text_area"
              style={{ display: "inherit" }}
            >
              <TextArea
                label="Your Question"
                name="question"
                cols="30"
                rows="10"
                onChange={(e) => setData({ ...data, question: e.target.value })}
                value={data.question}
                className="question_field"
                placeholder="Write your questions..."
              />
            </div>
            <Button
              type="submit"
              className="submit_btn"
              // disabled={isLoading ? true : false}
            >
              {"" ? "Loading..." : "submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;
