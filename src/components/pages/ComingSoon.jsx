import { useForm } from "react-hook-form";

export default function ComingSoon({ Logo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="coming-soon-container">
      <Logo />
      <p className="coming-soon-title">Coming Soon...</p>
      <p className="coming-soon-text">
        Never miss a beat! Sign up for my newsletter to stay informed about new
        releases, upcoming live performance, tours, and much more. Join now and
        be the first to know!
      </p>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="input-container">
        <div className="email-container">
          <input
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            type="text"
            placeholder="Email"
            maxLength="70"
            className={
              errors.email ? "coming-soon-email-error" : "coming-soon-email"
            }
          />
          <input type="submit" value="Submit" className="coming-soon-submit" />
        </div>
        <label className="error">
          {errors.email &&
            errors.email.type == "required" &&
            "This field is required."}
          {errors.email &&
            errors.email.type == "pattern" &&
            "Please enter a valid email address. Use letters (a-z), numbers, and the following characters: + - _ @ . only"}
        </label>
      </form>
    </div>
  );
}
