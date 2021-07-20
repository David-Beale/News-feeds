import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { onClose, submitNewScrape } from "../../../../redux/addFeed";

import Card from "../../SiteBody/HeadlinesList/headline/Card";

import { Backdrop, Title, Button, Field } from "../NewFeedMenusStyle";
import {
  PreviewContainer,
  MessageContainer,
  Error,
  Success,
} from "./NewFeedPreviewStyle";

export default function NewFeedPreview() {
  const previewData = useSelector(({ addFeed }) => addFeed.previewData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(onClose());
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleSubmit = async () => {
    setLoading(true);
    const apiError = await dispatch(submitNewScrape());
    setLoading(false);
    if (apiError) setError("Error saving new feed");
    else setSuccess("New feed saved! Main feed will be updated shortly");
  };
  return (
    <Backdrop onPointerDown={handleCancel}>
      <PreviewContainer onPointerDown={stopPropagation}>
        <Title>Preview</Title>
        <Card headline={previewData} />
        <MessageContainer>
          {loading && <CircularProgress size={32} />}
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}
        </MessageContainer>
        <Field>
          <Button onClick={handleCancel}>
            {!success && !error ? "Cancel" : "Close"}
          </Button>
          {!success && !error && <Button onClick={handleSubmit}>Submit</Button>}
        </Field>
      </PreviewContainer>
    </Backdrop>
  );
}
