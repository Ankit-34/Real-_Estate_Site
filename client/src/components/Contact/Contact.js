import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${data.fullname}. My email is ${data.email}. My message is ${data.msg}`);
  };

  // document.getElementById('con').classList.add("con2");

  return (
    <>
      <div className="back_image">
        <h1 className="">Contact Us</h1>
      </div>
      <div className="contact_outer">
          <div className="contact_inner">

            <form  onSubmit={formSubmit} > 

              <div className="contact_name">
                <label for="exampleInputEmail1" class="">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Name"
                />
              </div>

              <div className="contact_email">
                <label for="exampleInputEmail1" class="">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="contact_message">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Message"
                  >
                  
                </textarea>
              </div>

              <div className="submitDiv">
                <button type="submit" className="contact_submit">Submit</button>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default Contact;