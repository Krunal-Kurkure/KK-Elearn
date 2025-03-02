// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="">
          <div className="modal-box w-96 dark:bg-slate-900 dark:text-white border border-2">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:hover:bg-slate-50 dark:hover:text-black"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 rounded-md outline-none border"
                  {...register("name", { required: "Email is required" })}
                  />
                  <br />
                  {errors.name && <span className="text-sm text-red-500">{errors.email.message}</span>}
                </div>

              {/* Here is email code */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 rounded-md outline-none border"
                  {...register("email", { required: "Email is required" })}
                />
                 <br />
                 {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              {/* here is password code */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 rounded-md outline-none border"
                  {...register("password", { required: "Password is required" })}
                  />
                  <br />
                  {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                </div>

              {/* button here  */}
              <div className="flex justify-between mt-4 ">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>
                  Have account?{" "}
                  <button
                    className="text-blue-500 cursor-pointer underline"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login{" "}
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
