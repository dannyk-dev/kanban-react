import { PropsWithChildren } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../api";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 3000 }}>{children}</SWRConfig>
  );
};

export default Providers;
