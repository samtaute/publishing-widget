import { Fragment } from "react";
import { BlockFotoscapeConfig, FotoscapeItem } from "../../definition";
// import news from "../../dummy-data/softbox-payload";
import { useContext } from "react";
import SoftboxContext from "../../store/softbox-context";

// const contentList = news.items;

const BlockFotoscape: React.FC<{ configs: BlockFotoscapeConfig }> = (props) => {
  const ctx = useContext(SoftboxContext);
  const count = props.configs.settings.count;
  //   const category = props.configs.settings.category;
  let contentItems: FotoscapeItem[] = [];
  if (ctx.content["news"]) {
    contentItems = ctx.content["news"].slice(0, count); 
    console.log(contentItems)
  }

  return (
    <Fragment>
      {contentItems.map((item: any) => {
        return <div key={Math.random()}>{item.title}</div>;
      })}
    </Fragment>
  );
};

export default BlockFotoscape;
