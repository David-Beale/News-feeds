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
} from "./AddNewFeedMenuStyle";

import { disableAddFeed } from "../../../redux/addFeed";
export default function AddNewFeedMenu() {
  const dispatch = useDispatch();
  const enabled = useSelector(({ addFeed }) => addFeed.enabled);
  const [webName, setWebName] = useState("");
  const [webLink, setWebLink] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // eslint-disable-next-line no-useless-escape
    //   const regex = "^(?:https?://)?(?:[^@/\n]+@)?(?:www.)?([^:/?\n]+)";
    //   let localLink = webLink;
    //   if (webLink[0] === "w" && webLink[1] === "w" && webLink[2] === "w") {
    //     setWebLink("https://" + webLink);
    //     localLink = "https://" + webLink;
    //   } else if (
    //     webLink[0] !== "w" &&
    //     webLink[1] !== "w" &&
    //     webLink[2] !== "w" &&
    //     webLink[0] !== "h" &&
    //     webLink[1] !== "t" &&
    //     webLink[2] !== "t"
    //   ) {
    //     setWebLink("https://www." + webLink);
    //     localLink = "https://www." + webLink;
    //   }
    //   setConcatWebLink(localLink.match(regex)[0]);
    //   Api.getWebsite(localLink).then((result) => {
    //     setWebsite(result.data.html.htmlBody);
    //   });
    //   setShowForm(false);
  };
  const handleAddressChange = (event) => {
    setWebLink(event.target.value);
    setSubmitEnabled(webLink && webName ? true : false);
  };
  const handleNameChange = (event) => {
    setWebName(event.target.value);
    setSubmitEnabled(webLink && webName ? true : false);
  };
  const handleCancel = () => {
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
            <Form onSubmit={handleSubmit}>
              <InputField>
                <InsertLinkIcon fontSize="large" />
                <Input
                  autoComplete="off"
                  type="text"
                  id="link"
                  placeholder="Enter target address"
                  value={webLink}
                  onChange={handleAddressChange}
                  required={true}
                />
              </InputField>
              <InputField>
                <BookmarkIcon fontSize="large" />
                <Input
                  autoComplete="off"
                  type="text"
                  id="name"
                  placeholder="Choose a name for this feed"
                  value={webName}
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

          {/* <div className="add-feed__container">
            <form
              id="form"
              className="first-form"
              onSubmit={handleSubmit}
              autoComplete="new-password"
            >
              <label htmlFor="httpAddress">Web Address:</label>
              <input
                autoComplete="off"
                type="text"
                id="httpAddress"
                placeholder="Enter a web address..."
                onChange={handleAddressChange}
                value={webLink}
              ></input>
              <label htmlFor="name">Custom scraper name:</label>
              <input
                autoComplete="off"
                type="text"
                id="name"
                placeholder="Enter a name (e.g. BBC Most Read No.1)..."
                onChange={handleNameChange}
                value={webName}
              ></input>
              <div>
                <button className="addbutton" type="submit">
                  Submit
                </button>
                <button className="" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div> */}
        </Backdrop>
      )}
    </>
  );
}
