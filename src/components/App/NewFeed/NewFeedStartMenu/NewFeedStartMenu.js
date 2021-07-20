import React, { useState } from "react";
import { useDispatch } from "react-redux";

import InsertLinkIcon from "@material-ui/icons/InsertLink";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { CircularProgress } from "@material-ui/core";

import {
  Backdrop,
  SubContainer,
  Form,
  InputField,
  Field,
  Input,
  Button,
  Title,
  ErrorBox,
  styleIcon,
  MessageContainer,
  Warning,
} from "../NewFeedMenusStyle";

import { onCancel, fetchWebsite } from "../../../../redux/addFeed";
const StyledInsertLinkIcon = styleIcon(InsertLinkIcon);
const StyledBookmarkIcon = styleIcon(BookmarkIcon);

export default function NewFeedStartMenu() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [addedHeight, setAddedHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitEnabled(false);
    setLoading(true);
    setError(null);
    //timeout needed for animation
    setTimeout(() => {
      setAddedHeight(100);
    }, 10);
    const error = await dispatch(fetchWebsite(url, name));
    setLoading(false);
    if (error) {
      setError("Error loading target url");
    } else {
      dispatch(onCancel());
    }
  };
  const handleAddressChange = (event) => {
    setUrl(event.target.value);
    setSubmitEnabled(url && name ? true : false);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
    setSubmitEnabled(url && name ? true : false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(onCancel());
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <Backdrop onPointerDown={handleCancel}>
      <SubContainer addedHeight={addedHeight} onPointerDown={stopPropagation}>
        <Title>Add New Feed</Title>
        <Warning>Sites which rely on scripts may not load correctly</Warning>

        <Form onSubmit={handleSubmit}>
          <InputField>
            <StyledInsertLinkIcon fontSize="large" />
            <Input
              autoComplete="off"
              type="text"
              id="link"
              placeholder="Enter target url"
              value={url}
              onChange={handleAddressChange}
              required={true}
            />
          </InputField>
          <InputField>
            <StyledBookmarkIcon fontSize="large" />
            <Input
              autoComplete="off"
              type="text"
              id="name"
              placeholder="Choose a name for this feed"
              value={name}
              onChange={handleNameChange}
              required={true}
            />
          </InputField>
          <MessageContainer height={addedHeight}>
            {loading && <CircularProgress size={70} />}
            {error && <ErrorBox>{error}</ErrorBox>}
          </MessageContainer>
          <Field>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button disabled={!submitEnabled}>Submit</Button>
          </Field>
        </Form>
      </SubContainer>
    </Backdrop>
  );
}
