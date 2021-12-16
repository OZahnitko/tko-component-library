import { FC } from "react";

export const Button: FC = ({ children = "Click Me" }) => (
  <button>{children}</button>
);
