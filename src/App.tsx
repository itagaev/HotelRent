import * as React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { Header } from "./header";
import { SearchSection } from "./Search";
import { HotelsSection } from "./Hotels";

export const App: React.FC = () => (
  <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Header />
      <SearchSection />
      <HotelsSection />
    </MuiPickersUtilsProvider>
  </>
);
