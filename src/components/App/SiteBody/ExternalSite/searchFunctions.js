import unique from "unique-selector";

const domain = "http://localhost:3000/";
let optionsMap = {};
let options = [];
let targetDomain = "";
let originalNode = null;
let searchFunction = null;
let type = "";

const searchType = {
  1: textSearch,
  2: textSearch,
  3: imageSearch,
  4: linkSearch,
};
const typeMap = {
  1: "title",
  2: "summary",
  3: "image",
  4: "link",
};
function textSearch(node) {
  return node.innerText?.trim();
}
function imageSearch(node) {
  return node.src;
}
function linkSearch(node) {
  let href = node.href;
  if (!href) return;
  if (href.startsWith(domain)) {
    href = targetDomain + href.slice(domain.length);
  }
  return href;
}
function getPath(node) {
  try {
    const path = unique(node);
    path.replace("#externalMaster", "body");
    return path;
  } catch (error) {
    console.log(error);
  }
}
function checkNode(node) {
  const data = searchFunction(node);
  if (data) {
    const payload = {
      data,
      path: getPath(node),
      type: type,
    };
    if (!payload.path) return "error";
    //we want the original node's option to be shown first
    if (node === originalNode) {
      options.push(payload);
      //using a map to avoid duplicates
    } else if (!optionsMap[data]) {
      optionsMap[data] = payload;
    }
  }
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const error = checkNode(children[i]);
    if (error) return error;
  }
}

export const getOptions = (node, status, targetDomainArg) => {
  options = [];
  optionsMap = {};
  type = typeMap[status];
  searchFunction = searchType[status];
  targetDomain = targetDomainArg;
  originalNode = node;

  //start 1 level up then recurse down the tree
  const parent = node.parentNode;
  const error = checkNode(parent);
  if (error) return [];

  Object.values(optionsMap).forEach((value) => {
    if (value.data !== options[0]?.data) options.push(value);
  });
  return options;
};
