/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { withRouter } from "next/router";

const ActiveLink = (props: any): any => {
  const { children, router, href, className } = props;

  const [, resource] = router.pathname.split("/");
  const isActiveClassName = `/${resource}`.includes(href)
    ? "border-indigo-500 focus:border-indigo-700"
    : "";

  const handleClick = (e: any): void => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActiveClassName}`}
    >
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);