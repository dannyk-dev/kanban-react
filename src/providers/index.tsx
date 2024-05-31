import { PropsWithChildren } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../api";
import { TodosProvider } from "./TodosProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 3000 }}>
      <TodosProvider>{children}</TodosProvider>
    </SWRConfig>
  );
};

export default Providers;
