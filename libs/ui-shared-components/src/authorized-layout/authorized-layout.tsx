import { ReactNode } from "react";
import NavbarElement from "../navbar/navbar";
import { Container } from "@nextui-org/react";
import SideBar from "../side-bar/side-bar";


export interface AuthorizedLayoutProps {
  children?: ReactNode;
}

export function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
  return (
    <div className={"flex flex-col"}>
      <NavbarElement />
      <div>{children}</div>
    </div>
  );
}

export default AuthorizedLayout;
