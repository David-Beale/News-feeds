import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
} from "./AddNewFeedMenuStyle";

import { disableAddFeed, fetchWebsite } from "../../../redux/addFeed";
const StyledInsertLinkIcon = styleIcon(InsertLinkIcon);
const StyledBookmarkIcon = styleIcon(BookmarkIcon);

export default function AddNewFeedMenu() {
  const dispatch = useDispatch();
  const enabled = useSelector(({ addFeed }) => addFeed.enabled);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [addedHeight, setAddedHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitEnabled(false);
    setLoading(true);
    //timeout needed for animation
    setTimeout(() => {
      setAddedHeight(100);
    }, 10);
    const error = await dispatch(fetchWebsite(url));
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      dispatch(disableAddFeed());
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
    dispatch(disableAddFeed());
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {enabled && (
        <Backdrop onPointerDown={handleCancel}>
          <SubContainer
            addedHeight={addedHeight}
            onPointerDown={stopPropagation}
          >
            <Title>Add New Feed</Title>

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
      )}
    </>
  );
}
