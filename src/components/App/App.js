import React, { useState, useEffect } from "react";

import Api from "../../api/api-client";

import Draggable from "react-draggable";

import Header from "./Header/Header";
import AddNewFeedMenu from "./AddNewFeedMenu/AddNewFeedMenu";
import SiteBody from "./SiteBody/SiteBody";

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

  // const [titleRoot, setTitleRoot] = useState("");
  // const [titlePath, setTitlePath] = useState([]);
  // const [summaryPath, setSummaryPath] = useState([]);
  // const [linkPath, setLinkPath] = useState([]);
  // const [imagePath, setImagePath] = useState([]);
  // const [selectedNode, setSelectedNode] = useState([]);
  // const [arrayOfOptions, setArrayOfOptions] = useState([]);
  // const [arrayOfNodes, setArrayOfNodes] = useState([]);
  // const [arrayOfTags, setArrayOfTags] = useState([]);

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
      <SiteBody />
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
                    {!showForm && (
               
              )}
            </div>
            {!showForm && (
            
            )}
          </div>
        )} */}
    </div>
  );
}

export default App;
