import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCancel } from "../../../../redux/addFeed";

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

import Card from "../../SiteBody/HeadlinesList/headline/Card";
export default function NewFeedPreview() {
  const previewData = useSelector(({ addFeed }) => addFeed.previewData);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(onCancel());
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onPointerDown={handleCancel}>
      <Title>Preview</Title>
      <div onPointerDown={stopPropagation}>
        <Card headline={previewData} />
      </div>
      <Field>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button>Submit</Button>
      </Field>
    </Backdrop>
  );
}
