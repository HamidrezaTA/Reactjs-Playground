import BtnCmp from "./BtnCmp";

function FormSection() {
  return (
    <>
      <div className="m-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="string"
              className="form-control"
              id="exampleInputUsername"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="maleRadio"
              id="maleRadio"
            />
            <label className="form-check-label" htmlFor="maleRadio">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="femaleRadio"
              id="femaleRadio"
              checked
            />
            <label className="form-check-label" htmlFor="femaleRadio">
              Female
            </label>
          </div>
          <div>
            <BtnCmp title="Register" type="primary"></BtnCmp>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormSection;
