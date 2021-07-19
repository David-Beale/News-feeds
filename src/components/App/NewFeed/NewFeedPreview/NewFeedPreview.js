import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOptions, selectOption } from "../../../../redux/addFeed";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import {
  Backdrop,
  SubContainer,
  Title,
  Button,
  OptionsBody,
  Image,
  Text,
  Field,
  StyledNavButton,
  OptionNum,
} from "../NewFeedMenusStyle";

export default function NewFeedPreview() {
  const previewData = useSelector(({ addFeed }) => addFeed.previewData);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(clearOptions());
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  console.log(previewData);
  return (
    <Backdrop onPointerDown={handleCancel}>
      <SubContainer onPointerDown={stopPropagation}>
        <Title>Preview</Title>
      </SubContainer>
    </Backdrop>
  );
}
