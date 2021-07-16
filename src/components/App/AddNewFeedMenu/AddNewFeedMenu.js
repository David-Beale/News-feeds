import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InsertLinkIcon from "@material-ui/icons/InsertLink";
import BookmarkIcon from "@material-ui/icons/Bookmark";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitEnabled(false);
    document.body.style.cursor = "wait";
    const error = await dispatch(fetchWebsite(url));
    document.body.style.cursor = "";
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
        <Backdrop onClick={handleCancel}>
          <SubContainer onClick={stopPropagation}>
            <Title>Add New Feed</Title>
            {error && <ErrorBox>{error}</ErrorBox>}
            <Form onSubmit={handleSubmit}>
              <InputField>
                <StyledInsertLinkIcon fontSize="large" />
                <Input
                  autoComplete="off"
                  type="text"
                  id="link"
                  placeholder="Enter target address"
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
              <Field>
                <Button disabled={!submitEnabled}>Submit</Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </Field>
            </Form>
          </SubContainer>
        </Backdrop>
      )}
    </>
  );
}
