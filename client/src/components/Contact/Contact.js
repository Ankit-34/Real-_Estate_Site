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

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form  onSubmit={formSubmit} > 

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
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

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
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

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
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

              <button type="submit" class="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;