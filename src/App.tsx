import { PropsWithChildren } from "react";
import BaseLayout from "./layouts/BaseLayout";

function App({ children }: PropsWithChildren) {
  return <BaseLayout>{children}</BaseLayout>;
}

export default App;
