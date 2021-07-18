import React, { useState } from "react";
import renderHTML from "react-render-html";

export default function ExternalSite({ html }) {
  const [concatWebLink, setConcatWebLink] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const [titleRoot, setTitleRoot] = useState("");
  const [titlePath, setTitlePath] = useState([]);
  const [summaryPath, setSummaryPath] = useState([]);
  const [linkPath, setLinkPath] = useState([]);
  const [imagePath, setImagePath] = useState([]);
  const [selectedNode, setSelectedNode] = useState([]);
  const [status, setStatus] = useState(1);

  const [imageTag, setImageTag] = useState("");

  function findPath(currentNode) {
    let path = [];
    let root = "";
    let parentNode = currentNode.parentNode;
    let children = parentNode.children;
    while (currentNode.id !== "externalMaster") {
      if (currentNode.id) {
        root = "#" + currentNode.id.trim();
        break;
      }
      if (parentNode.id === "externalMaster") {
        let id = currentNode.id;
        let thisClass = currentNode.getAttribute("class");
        if (id) {
          root = "#" + id.trim();
        } else if (thisClass) {
          thisClass = thisClass.trim().split(" ").join(".");
          thisClass = "." + thisClass;
          root = thisClass;
        }
      } else {
        for (let i = 0; i < children.length; i++) {
          if (children[i] === currentNode) {
            path.push(i);
            break;
          }
        }
      }
      currentNode = parentNode;
      parentNode = currentNode.parentNode;
      children = parentNode.children;
    }
    return [path, root];
  }

  function handleClick(e) {
    e.preventDefault();
    let currentNode = e.target;
    let [path, root] = findPath(currentNode);
    console.log(path, root);
    let targetNode;
    try {
      targetNode = document.querySelector(root);
    } catch (error) {
      console.log(error);
    }
    for (let i = path.length - 1; i >= 0; i--) {
      targetNode = targetNode.children[path[i]];
    }
    setSelectedNode(targetNode);
    if (status === 1) {
      setTitleRoot(root);
      setTitlePath(path);
      setTitle(targetNode.innerText);
    } else if (status === 2) {
      setSummaryPath(path);
      setSummary(targetNode.innerText);
    } else if (status === 3) {
      if (
        targetNode.getAttribute("src") &&
        targetNode.getAttribute("src")[0] === "h"
      ) {
        setImage(targetNode.src);
        setImageTag("src");
      } else if (
        targetNode.getAttribute("data-src") &&
        targetNode.getAttribute("data-src")[0] === "h"
      ) {
        setImage(targetNode.getAttribute("data-src"));
        setImageTag("data-src");
      } else if (
        targetNode.parentNode.getAttribute("src") &&
        targetNode.parentNode.getAttribute("src")[0] === "h"
      ) {
        setImage(targetNode.parentNode.getAttribute("src"));
        setImageTag("src");
        path.shift();
      } else if (
        targetNode.parentNode.getAttribute("data-src") &&
        targetNode.parentNode.getAttribute("data-src")[0] === "h"
      ) {
        setImage(targetNode.parentNode.getAttribute("data-src"));
        setImageTag("data-src");
        path.shift();
      }
      setImagePath(path);
    } else if (status === 4) {
      if (targetNode.href) {
        if (targetNode.href.slice(0, 32) === "https://db-newsfeeds.netlify.com")
          setLink(concatWebLink + targetNode.href.slice(32));
        else setLink(targetNode.href);
      } else if (targetNode.parentNode.href) {
        path.shift();
        if (
          targetNode.parentNode.href.slice(0, 32) ===
          "https://db-newsfeeds.netlify.com"
        )
          setLink(concatWebLink + targetNode.parentNode.href.slice(32));
        else setLink(targetNode.parentNode.href);
      }
      setLinkPath(path);
    }
  }
  return (
    <div id="externalMaster" className="external" onClick={handleClick}>
      {renderHTML(html)}
    </div>
  );
}
