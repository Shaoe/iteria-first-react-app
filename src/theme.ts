import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

export const myTheme = deepMerge(grommet, {
    global: {
      colors: {
        brand: 'red',
      },
    },
  });