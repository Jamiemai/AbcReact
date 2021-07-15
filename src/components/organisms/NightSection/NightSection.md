```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <NightSection>This is section with default padding</NightSection>
</ThemeProvider>