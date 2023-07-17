import { ValidBlockConfig } from "../definition";
export const layout: ValidBlockConfig[] = [
    {
      blockType: "fotoscape_block",
      settings: {
        layout: "small-photocard",
        count: 1,
      },
    },
    {
      blockType: "ad_unit",
    },
    {
      blockType: "outbrain_block",
      settings: {
        widgetId: "JS_16",
        layout: "edge",
      },
    },
    {
      blockType: "fotoscape_block",
      settings: {
        layout: "tile",
        count: 6,
      },
    },
    {
      blockType: "memes_widget_block",
    },
    {
      blockType: "ad_unit",
    },
  ];