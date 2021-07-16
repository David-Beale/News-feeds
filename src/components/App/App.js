import React, { useState, useEffect } from "react";
import HeadlineList from "./headline-list/headline-list";
import Api from "../../api/api-client";
import renderHTML from "react-render-html";

import Draggable from "react-draggable";

import Header from "./Header/Header";
import AddNewFeedMenu from "./AddNewFeedMenu/AddNewFeedMenu";

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

function App() {
  // const [headlines, setHeadlines] = useState([]);
  // const [website, setWebsite] = useState("");

  // const [concatWebLink, setConcatWebLink] = useState("");
  // const [show, setShow] = useState(true);
  // const [title, setTitle] = useState("");
  // const [summary, setSummary] = useState("");
  // const [image, setImage] = useState("");
  // const [link, setLink] = useState("");
  // const [status, setStatus] = useState(1);
  // const [titleRoot, setTitleRoot] = useState("");
  // const [titlePath, setTitlePath] = useState([]);
  // const [summaryPath, setSummaryPath] = useState([]);
  // const [linkPath, setLinkPath] = useState([]);
  // const [imagePath, setImagePath] = useState([]);
  // const [selectedNode, setSelectedNode] = useState([]);
  // const [arrayOfOptions, setArrayOfOptions] = useState([]);
  // const [arrayOfNodes, setArrayOfNodes] = useState([]);
  // const [arrayOfTags, setArrayOfTags] = useState([]);
  // const [showOptions, setShowOptions] = useState(false);
  // const [currentOption, setCurrentOption] = useState(1);
  // const [imageTag, setImageTag] = useState("");
  // const [showForm, setShowForm] = useState(false);
  // const [deleteHeadline, setDeleteHeadline] = useState(false);
  // const [deleteScraper, setDeleteScraper] = useState(false);
  // const [isActiveStatus, setIsActiveStatus] = useState(false);
  // const [isActiveStatusScraper, setIsActiveStatusScraper] = useState(false);

  // useEffect(() => {
  //   Api.getHeadlines(date, month, year)
  //     .then((result) => {
  //       if (result.data.headline.length === 0) setHeadlines(false);
  //       else setHeadlines(result.data.headline);
  //     })
  //     .catch((error) => {
  //       console.log("Api call error");
  //       console.log(error.message);
  //     });
  // }, []);
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // function handleClick(e) {
  //   e.preventDefault();
  //   let currentNode = e.target;
  //   let [path, root] = findPath(currentNode);
  //   console.log(path, root);
  //   let targetNode;
  //   try {
  //     targetNode = document.querySelector(root);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   for (let i = path.length - 1; i >= 0; i--) {
  //     targetNode = targetNode.children[path[i]];
  //   }
  //   setSelectedNode(targetNode);
  //   if (status === 1) {
  //     setTitleRoot(root);
  //     setTitlePath(path);
  //     setTitle(targetNode.innerText);
  //   } else if (status === 2) {
  //     setSummaryPath(path);
  //     setSummary(targetNode.innerText);
  //   } else if (status === 3) {
  //     if (
  //       targetNode.getAttribute("src") &&
  //       targetNode.getAttribute("src")[0] === "h"
  //     ) {
  //       setImage(targetNode.src);
  //       setImageTag("src");
  //     } else if (
  //       targetNode.getAttribute("data-src") &&
  //       targetNode.getAttribute("data-src")[0] === "h"
  //     ) {
  //       setImage(targetNode.getAttribute("data-src"));
  //       setImageTag("data-src");
  //     } else if (
  //       targetNode.parentNode.getAttribute("src") &&
  //       targetNode.parentNode.getAttribute("src")[0] === "h"
  //     ) {
  //       setImage(targetNode.parentNode.getAttribute("src"));
  //       setImageTag("src");
  //       path.shift();
  //     } else if (
  //       targetNode.parentNode.getAttribute("data-src") &&
  //       targetNode.parentNode.getAttribute("data-src")[0] === "h"
  //     ) {
  //       setImage(targetNode.parentNode.getAttribute("data-src"));
  //       setImageTag("data-src");
  //       path.shift();
  //     }
  //     setImagePath(path);
  //   } else if (status === 4) {
  //     if (targetNode.href) {
  //       if (targetNode.href.slice(0, 32) === "https://db-newsfeeds.netlify.com")
  //         setLink(concatWebLink + targetNode.href.slice(32));
  //       else setLink(targetNode.href);
  //     } else if (targetNode.parentNode.href) {
  //       path.shift();
  //       if (
  //         targetNode.parentNode.href.slice(0, 32) ===
  //         "https://db-newsfeeds.netlify.com"
  //       )
  //         setLink(concatWebLink + targetNode.parentNode.href.slice(32));
  //       else setLink(targetNode.parentNode.href);
  //     }
  //     setLinkPath(path);
  //   }
  // }
  // function findPath(currentNode) {
  //   let path = [];
  //   let root = "";
  //   let parentNode = currentNode.parentNode;
  //   let children = parentNode.children;
  //   while (currentNode.id !== "externalMaster") {
  //     if (currentNode.id) {
  //       root = "#" + currentNode.id.trim();
  //       break;
  //     }
  //     if (parentNode.id === "externalMaster") {
  //       let id = currentNode.id;
  //       let thisClass = currentNode.getAttribute("class");
  //       if (id) {
  //         root = "#" + id.trim();
  //       } else if (thisClass) {
  //         thisClass = thisClass.trim().split(" ").join(".");
  //         thisClass = "." + thisClass;
  //         root = thisClass;
  //       }
  //     } else {
  //       for (let i = 0; i < children.length; i++) {
  //         if (children[i] === currentNode) {
  //           path.push(i);
  //           break;
  //         }
  //       }
  //     }
  //     currentNode = parentNode;
  //     parentNode = currentNode.parentNode;
  //     children = parentNode.children;
  //   }
  //   return [path, root];
  // }
  // function deepSearch() {
  //   let currentNode = selectedNode.parentNode;
  //   let localArrayOfOptions = [];
  //   let localArrayOfNodes = [];
  //   let localArrayOfTags = [];

  //   function search(currentNode) {
  //     if (
  //       status <= 2 &&
  //       currentNode.innerText &&
  //       currentNode.innerText.trim().length > 5
  //     ) {
  //       localArrayOfOptions.push(currentNode.innerText.trim());
  //       localArrayOfNodes.push(currentNode);
  //     } else if (status === 3) {
  //       if (
  //         currentNode.getAttribute("src") &&
  //         currentNode.getAttribute("src")[0] === "h"
  //       ) {
  //         localArrayOfOptions.push(currentNode.getAttribute("src"));
  //         localArrayOfTags.push("src");

  //         localArrayOfNodes.push(currentNode);
  //       }
  //       if (
  //         currentNode.getAttribute("data-src") &&
  //         currentNode.getAttribute("data-src")[0] === "h"
  //       ) {
  //         localArrayOfOptions.push(currentNode.getAttribute("data-src"));
  //         localArrayOfTags.push("data-src");
  //         localArrayOfNodes.push(currentNode);
  //       }
  //       if (
  //         currentNode.getAttribute("srcset") &&
  //         currentNode.getAttribute("srcset")[0] === "h"
  //       ) {
  //         localArrayOfOptions.push(currentNode.getAttribute("srcset"));
  //         localArrayOfTags.push("srcset");
  //         localArrayOfNodes.push(currentNode);
  //       }
  //       if (
  //         currentNode.getAttribute("data-src-md") &&
  //         currentNode.getAttribute("data-src-md")[0] === "h"
  //       ) {
  //         localArrayOfOptions.push(currentNode.getAttribute("data-src-md"));
  //         localArrayOfTags.push("data-src-md");
  //         localArrayOfNodes.push(currentNode);
  //       }
  //     } else if (status === 4 && currentNode.href) {
  //       if (currentNode.href[7] === "l")
  //         localArrayOfOptions.push(concatWebLink + currentNode.href.slice(21));
  //       else localArrayOfOptions.push(currentNode.href);

  //       localArrayOfNodes.push(currentNode);
  //     }
  //     for (let i = 0; i < currentNode.children.length; i++) {
  //       search(currentNode.children[i]);
  //     }
  //   }
  //   search(currentNode);
  //   if (!localArrayOfOptions.length) alert("sorry no options available");
  //   else {
  //     setArrayOfOptions(localArrayOfOptions);
  //     setArrayOfNodes(localArrayOfNodes);
  //     setArrayOfTags(localArrayOfTags);
  //     setShowOptions(true);
  //   }
  // }

  // function changeStatus() {
  //   if (status <= 4) {
  //     setStatus(status + 1);
  //   }
  // }
  // function changeStatusBack() {
  //   if (status >= 1) {
  //     setStatus(status - 1);
  //   }
  // }
  // function toggleShow() {
  //   setShow(!show);
  //   setShowForm(true);
  // }
  // function submit() {
  //   Api.saveNewFeed(
  //     webLink,
  //     webName,
  //     titlePath,
  //     titleRoot,
  //     summaryPath,
  //     linkPath,
  //     imagePath,
  //     imageTag
  //   );
  //   toggleShow();
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 2000);
  // }
  // function previousOption() {
  //   if (currentOption > 1) setCurrentOption(currentOption - 1);
  // }
  // function nextOption() {
  //   if (currentOption < arrayOfOptions.length)
  //     setCurrentOption(currentOption + 1);
  // }
  // function selectOption() {
  //   let node = arrayOfNodes[currentOption - 1];
  //   let [path, root] = findPath(node);
  //   if (status === 1) {
  //     setTitleRoot(root);
  //     setTitlePath(path);
  //     setTitle(arrayOfOptions[currentOption - 1]);
  //   } else if (status === 2) {
  //     setSummaryPath(path);
  //     setSummary(arrayOfOptions[currentOption - 1]);
  //   } else if (status === 3) {
  //     setImagePath(path);
  //     setImage(arrayOfOptions[currentOption - 1]);
  //     setImageTag(arrayOfTags[currentOption - 1]);
  //   } else if (status === 4) {
  //     setLinkPath(path);
  //     setLink(arrayOfOptions[currentOption - 1]);
  //   }
  //   setCurrentOption(1);
  //   setShowOptions(false);
  // }

  return (
    <div className="app__container">
      <Header />
      <AddNewFeedMenu />
      {/* {show && (
          <HeadlineList
            headlines={headlines}
            deleteHeadline={deleteHeadline}
            deleteScraper={deleteScraper}
            isActiveStatus={isActiveStatus}
            isActiveStatusScraper={isActiveStatusScraper}
          />
        )}
        {!show && (
          <div className="second__container">
            <div className="first-form__container">
              {showForm && (
              
              )}
              {!showForm && (
                <Draggable>
                  <div className="second-form" id="form2">
                    <div className="form2Head" id="form2Head">
                      Click and drag
                    </div>
                    {!showOptions && (
                      <div>
                        {(() => {
                          switch (status) {
                            case 1:
                              return (
                                <div>
                                  <p className="formMessage">Select a title</p>
                                  <p className="formContent">{title}</p>
                                </div>
                              );
                            case 2:
                              return (
                                <div>
                                  <p className="formMessage">
                                    Select a summary (optional)
                                  </p>
                                  <p className="formContent">{summary}</p>
                                </div>
                              );
                            case 3:
                              return (
                                <div>
                                  <p className="formMessage">Select an image</p>
                                  <img
                                    src={image}
                                    style={{ width: 100, height: 100 }}
                                    alt="scraped"
                                  ></img>
                                </div>
                              );
                            case 4:
                              return (
                                <div>
                                  <p className="formMessage">Select a link</p>
                                  <p className="formContent">{link}</p>
                                </div>
                              );
                            case 5:
                              return (
                                <div>
                                  <h4>click SUBMIT to add your feed.</h4>
                                </div>
                              );
                            default:
                              return null;
                          }
                        })()}
                        <div className="action-buttons__container">
                          {status < 6 && status > 1 && (
                            <Button
                              size="small"
                              variant="contained"
                              onClick={changeStatusBack}
                            >
                              Back
                            </Button>
                          )}
                          {status < 5 && (
                            <Button
                              size="small"
                              variant="contained"
                              onClick={changeStatus}
                            >
                              Next
                            </Button>
                          )}
                          <Button
                            size="small"
                            variant="contained"
                            onClick={submit}
                          >
                            Submit
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={deepSearch}
                          >
                            Not what you are looking for?
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                    {showOptions && (
                      <div>
                        <div>
                          <div className="formMessage">
                            Option {currentOption} out of{" "}
                            {arrayOfOptions.length}
                          </div>
                          <div>
                            {status !== 3 && (
                              <div>{arrayOfOptions[currentOption - 1]}</div>
                            )}
                            {status === 3 && (
                              <img
                                src={arrayOfOptions[currentOption - 1]}
                                style={{ height: 100 }}
                                alt="scraped"
                              ></img>
                            )}
                          </div>
                        </div>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={previousOption}
                        >
                          Previous
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={selectOption}
                        >
                          Select
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={nextOption}
                        >
                          Next
                        </Button>
                      </div>
                    )}
                  </div>
                </Draggable>
              )}
            </div>
            {!showForm && (
              <div
                id="externalMaster"
                className="external"
                onClick={handleClick}
              >
                {renderHTML(website)}
              </div>
            )}
          </div>
        )} */}
    </div>
  );
}

export default App;
