import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import type { Preview } from "@storybook/sveltekit";
import "../src/app.css";

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "375px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1025px",
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
      defaultViewport: "mobile",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: "dark", value: "#161d2f" },
        light: { name: "light", value: "#ffffff" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "dark" },
  },
};

export default preview;
