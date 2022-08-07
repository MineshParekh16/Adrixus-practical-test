import React, { useState } from "react";

const PasswordShowHide = ({ field, form }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <>
      <i
        className={hasError ? "icon-error icon" : "fa fa-key icon"}
        onClick={() => changeShowHidePassword(!showHidePassword)}
      >
        <i class="pi pi-eye"></i>
      </i>
      <input
        type={showHidePassword ? "text" : "password"}
        {...field}
        className={hasError ? "input-error input-field" : "input-field"}
        placeholder="Password"
      />
    </>
  );
};

export default PasswordShowHide;
