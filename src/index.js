import Header from "./components/Header";
import Home from "./screens/Home.js";
import Post from "./screens/Post.js";
import About from "./screens/About.js";
import Contact from "./screens/Contact.js";
import ErrorPage from "./screens/ErrorPage.js";
import { parseRequestUrl, showLoading, hideLoading } from "./utils.js";

const routes = {
  "/": Home,
  "/blogs/:slug": Post,
  "/about": About,
  "/contact": Contact,
};

const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.slug ? "/:slug" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : ErrorPage;
  const header = document.getElementById("header");
  header.innerHTML = await Header.render();
  await Header.after_render();
  const main = document.getElementById("content");
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
  hideLoading();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);