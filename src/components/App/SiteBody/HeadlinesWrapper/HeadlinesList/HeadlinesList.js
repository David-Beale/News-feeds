import React from "react";
import "./HeadlinesList.css";
import { useDispatch, useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { CircularProgress, useMediaQuery } from "@material-ui/core";

import { getNewHeadlines } from "../../../../../redux/headlines";
import { useContainerHeight } from "../../../../../globalHooks/useContainerHeight";
import Card from "./headline/Card";

const InnerElement = (props) => {
  return <div className="innerElement" {...props} />;
};

export default function HeadlinesList({ headlines }) {
  const isDesktop = useMediaQuery("(min-width:700px)");
  const dispatch = useDispatch();
  const hasNextPage = useSelector(({ headlines }) => !headlines.finished);

  const itemCount = hasNextPage ? headlines.length + 1 : headlines.length;
  const loadMoreItems = () => {
    dispatch(getNewHeadlines());
  };
  const isItemLoaded = (index) => !hasNextPage || index < headlines.length;

  const Item = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return (
        <div className="item" style={{ ...style }}>
          <CircularProgress size={32} />
        </div>
      );
    } else {
      return (
        <div className="item" style={{ ...style }}>
          <Card headline={headlines[index]} />
        </div>
      );
    }
  };

  const height = useContainerHeight("body");

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      threshold={1}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="list"
          height={height}
          itemCount={itemCount}
          itemSize={isDesktop ? 290 : 320}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={"100%"}
          innerElementType={InnerElement}
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  );
}
