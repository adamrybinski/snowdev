import React from "./_snowpack/pkg/react.js";
import {useQuery} from "./_snowpack/pkg/react-query.js";
export default function Example() {
  const {isLoading, error, data, isFetching} = useQuery("repoData", () => fetch("https://api.github.com/repos/arybins/snowdev").then((res) => res.json()));
  if (isLoading)
    return "Loading...";
  if (error)
    return "An error has occurred: " + error.message;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, data.name), /* @__PURE__ */ React.createElement("p", null, data.description), /* @__PURE__ */ React.createElement("strong", null, "\u{1F440} ", data.subscribers_count), " ", /* @__PURE__ */ React.createElement("strong", null, "\u2728 ", data.stargazers_count), " ", /* @__PURE__ */ React.createElement("strong", null, "\u{1F374} ", data.forks_count), /* @__PURE__ */ React.createElement("div", null, isFetching ? "Updating..." : ""));
}
