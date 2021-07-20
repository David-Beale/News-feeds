import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, selectOption } from "../../../../redux/addFeed";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import {
  Backdrop,
  SubContainer,
  Title,
  Button,
  Field,
} from "../NewFeedMenusStyle";

import {
  OptionsBody,
  Image,
  Text,
  StyledNavButton,
  OptionNum,
} from "./NewFeedOptionsStyle";

export default function NewFeedOptions() {
  const dispatch = useDispatch();
  const options = useSelector(({ addFeed }) => addFeed.options);

  const [option, setOption] = useState(options[0]);
  const index = useRef(0);

  const handleCancel = () => {
    dispatch(closeMenu());
  };
  const handleSelect = () => {
    dispatch(selectOption(option));
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const onLeft = () => {
    index.current--;
    setOption(options[index.current]);
  };
  const onRight = () => {
    index.current++;
    setOption(options[index.current]);
  };
  return (
    <>
      {option && (
        <Backdrop onPointerDown={handleCancel}>
          <SubContainer onPointerDown={stopPropagation}>
            <Title>
              {options.length} option{options.length > 1 ? "s" : ""} found
            </Title>
            <OptionNum>
              {index.current + 1} / {options.length}
            </OptionNum>
            <OptionsBody>
              <StyledNavButton disabled={index.current === 0} onClick={onLeft}>
                <ArrowBackIosIcon fontSize="large" />
              </StyledNavButton>
              {option.type === "image" ? (
                <Image src={option.data} />
              ) : (
                <Text>{option.data}</Text>
              )}
              <StyledNavButton
                disabled={index.current === options.length - 1}
                onClick={onRight}
              >
                <ArrowForwardIosIcon fontSize="large" />
              </StyledNavButton>
            </OptionsBody>
            <Field>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button onClick={handleSelect}>Select</Button>
            </Field>
          </SubContainer>
        </Backdrop>
      )}
    </>
  );
}
