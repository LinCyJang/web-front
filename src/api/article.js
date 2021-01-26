import request from "@/plugins/request";

export function articleDetail(data) {
  return request({
    url: "/article/articleDetail",
    method: "post",
    data
  });
}

export function getArticles(data) {
  return request({
    url: "/article/query",
    method: "post",
    data
  });
}

export function createArticle(data) {
  return request({
    url: "/article/create",
    method: "post",
    data
  });
}
