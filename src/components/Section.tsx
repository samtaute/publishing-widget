import { Fragment } from "react";
import BlockFotoscape from "./Blocks/BlockFotoscape";
import BlockOutbrain from "./Blocks/BlockOutbrain";
import BlockRevealMemes from "./Blocks/BlockRevealMemes";
import BlockAd from "./Blocks/BlockAd";
import {
  BlockFotoscapeConfig,
  BlockOutbrainConfig,
  BlockRevealMemesConfig,
  BlockAdConfig,
} from "../definition";

const DUMMY_SECTION_TEMPLATE = [
  {
    blockType: "fotoscape_block",
    settings: {
      layout: "small-photocard",
      count: 1,
      category: "licensed-news",
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
      category: "licensed-news",
    },
  },
  {
    blockType: "memes_widget_block",
  },
  {
    blockType: "ad_unit",
  },
];

const Section: React.FC = (props) => {
  return (
    <Fragment>
      {DUMMY_SECTION_TEMPLATE.map((item) => {
        switch (item.blockType) {
          case "fotoscape_block":
            return <BlockFotoscape key={Math.random()} configs={item as BlockFotoscapeConfig} />;
          case "outbrain_block":
            return <BlockOutbrain key={Math.random()} configs={item as BlockOutbrainConfig} />;
          case "memes_widget_block":
            return (
              <BlockRevealMemes key={Math.random()} configs={item as BlockRevealMemesConfig} />
            );
          case "ad_unit":
            return <BlockAd key={Math.random()} configs={item as BlockAdConfig} />;
          default:
            return <div key={Math.random()}>Block Type not recognized</div>;
        }
      })}
    </Fragment>
  );
};

export default Section;
