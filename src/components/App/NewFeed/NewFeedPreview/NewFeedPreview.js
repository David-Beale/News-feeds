import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCancel } from "../../../../redux/addFeed";

import Card from "../../SiteBody/HeadlinesList/headline/Card";

import { Backdrop, Title, Button, Field } from "../NewFeedMenusStyle";

import { PreviewContainer } from "./NewFeedPreviewStyle";

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
      <PreviewContainer>
        <Title>Preview</Title>
        <div onPointerDown={stopPropagation}>
          <Card headline={previewData} />
        </div>
        <Field>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button>Submit</Button>
        </Field>
      </PreviewContainer>
    </Backdrop>
  );
}
