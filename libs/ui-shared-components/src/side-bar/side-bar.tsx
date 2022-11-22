import styles from "./side-bar.module.scss";

export interface SideBarProps {
  width: number;
}

export function SideBar({ width }: SideBarProps) {
  return (
    <div className={"shadow-md"}
         style={{ width: `${width}vw`, minHeight: "100vh", minWidth: "100px", backgroundColor: "white" }}>
      <h6>sideBar!</h6>
    </div>
  );
}

export default SideBar;
