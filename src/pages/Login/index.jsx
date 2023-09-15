import { Field, Form, Formik } from "formik";
import React from "react";
import { Icon } from "~/assets/icons/Icons";

export const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        // Form gönderildiğinde yapılması gereken işlemleri burada tanımlayabilirsiniz.
        console.log(values);
      }}
    >
      {(values, dirty, isValid) => (
        <div className="bg-backgdrop h-full flex flex-col">
          <div className="h-24 flex items-center bg-black py-8 px-[51px]">
            <Icon name="logo" size={117} />
          </div>
          <div className="flex-1 flex justify-center p-4">
            <div className="bg-black py-8 px-20 rounded-md flex flex-col items-center max-h-[750px]">
              <h1 className="text-white font-bold text-4xl mt-5 mb-12">
                Spotify'da oturum aç
              </h1>
              <div className="text-white flex flex-col items-center gap-y-2 border-b-[1px] border-[#292929] pb-8 w-full mb-8">
                <button className="h-10 border rounded-full w-[250px]">
                  Google ile oturum aç
                </button>
                <button className="h-10 border rounded-full w-[250px]">
                  Facebook ile oturum aç
                </button>
                <button className="h-10 border rounded-full w-[250px]">
                  Apple ile oturum aç
                </button>
              </div>
              <Form className="flex flex-col gap-y-4 w-[250px]">
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="email" className="text-white text-xs">
                    E-posta adresi veya kullanıcı adı
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-sm p-2 border-none outline-none text-sm"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="password" className="text-white text-xs">
                    Parola
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full rounded-sm p-2 border-none outline-none text-sm"
                  />
                </div>
                <div>
                  <span className="text-white text-xs">Beni hatırla</span>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary w-full rounded-full font-semibold text-sm py-3 hover:transform mb-8 mt-4"
                  >
                    Oturum aç
                  </button>
                </div>
              </Form>
              <div className="border-b-[1px] border-[#292929] pb-8 w-full mb-8 flex justify-center">
                <div className="w-[250px] flex items-center justify-center">
                  <a href="#" className="text-white text-xs underline">
                    Parolanı mı unuttun?
                  </a>
                </div>
              </div>
              <div className="text-xs flex items-center gap-x-2">
                <span className="text-link">Hesabın yok mu?</span>
                <a href="#" className="underline text-white">
                  Spotify için kaydol
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
