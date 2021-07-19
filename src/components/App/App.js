import React, { useState, useEffect } from "react";

import Api from "../../api/api-client";

import Header from "./Header/Header";
import NewFeedMenus from "./NewFeed/NewFeedMenus";
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
    <>
      <Header />
      <NewFeedMenus />

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
    </>
  );
}

export default App;
