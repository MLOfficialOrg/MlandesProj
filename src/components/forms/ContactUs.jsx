// Import Modules
import * as React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

// Import Assets
import { ReactComponent as Logo } from "../../Assets/Logos/logo-black-no-bg.svg";
import { ReactComponent as Close } from "../../assets/Icons/Close-icon.svg";

export default function FormDialog({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const handleOnSubmit = (data) => {
    axios
      .post("/contact-us", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="dialog-container">
        <button
          className="close-icon"
          onClick={() => {
            handleClose();
          }}
        >
          <Close />
        </button>
        <Logo />
        <p className="dialog-header">Contact Michael Landes</p>
        <p className="dialog-header-text">
          For bookings, co-writes, or just to say hi, drop me a line and I'll be
          in touch real soon!
        </p>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="contact-form-container"
        >
          <div className="name-container">
            <span className="item-name-container">
              <input
                {...register("firstName", { required: true })}
                type="text"
                placeholder="First Name"
                maxLength="20"
                className={errors.firstName ? "naming-error" : "naming"}
              />
              <label className="error">
                {errors.firstName && "This field is required."}
              </label>
            </span>

            <span className="item-name-container">
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last Name"
                maxLength="20"
                className={errors.lastName ? "naming-error" : "naming"}
              />
              <label className="error">
                {errors.lastName && "This field is required."}
              </label>
            </span>
          </div>

          <span className="item-container">
            <input
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              type="text"
              placeholder="Email"
              maxLength="70"
              className={errors.email ? "email-error" : "email"}
            />
            <label className="error">
              {errors.email &&
                errors.email.type == "required" &&
                "This field is required."}
              {errors.email &&
                errors.email.type == "pattern" &&
                "Please enter a valid email address. Use letters (a-z), numbers, and the following characters: + - _ @ . only"}
            </label>
          </span>

          <span className="item-container">
            <select
              {...register("select", { required: true })}
              defaultValue=""
              className={errors.select ? "subject-error" : "subject"}
            >
              <option value="" disabled hidden>
                Select Subject
              </option>
              <option value="music">Music Production</option>
              <option value="mixing">Mixing</option>
              <option value="mastering">Mastering</option>
              <option value="other">Other</option>
            </select>
            <label className="error">
              {errors.select && "This field is required."}
            </label>
          </span>

          <span className="item-container">
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              maxLength="2000"
              className={errors.message ? "textarea-error" : "textarea"}
            />
            <label className="error">
              {errors.message && "This field is required."}
            </label>
          </span>

          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </Dialog>
  );
}
