import request from "@/plugins/request";

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}

export function getInfo() {
  return request({
    url: "/user/userinfo",
    method: "get"
    // params: { token }
  });
}

export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}
