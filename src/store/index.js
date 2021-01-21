import Vue from "vue";
import Vuex from "vuex";
import { getArticles } from "@/api/article";
import { login, getInfo, logout } from "@/api/user";
import { getToken, setToken, removeToken } from "@/plugins/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    token: getToken(),
    data: {}
  },
  mutations: {
    SET_ITEMS: (state, items) => {
      state.items = items;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INFO: (state, data) => {
      state.data = data;
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    getArticles({ commit }, data) {
      const { pageIndex, pageSize, keywords } = data;
      return new Promise((resolve, reject) => {
        getArticles({
          pageIndex: pageIndex,
          pageSize: pageSize,
          keywords: keywords
        })
          .then(response => {
            const { data } = response;
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    login({ commit }, data) {
      const { username, password } = data;
      return new Promise((resolve, reject) => {
        login({
          password: password,
          username: username
        })
          .then(response => {
            const { data } = response;
            commit("SET_TOKEN", data.token);
            setToken(data.token);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then(response => {
            const { data } = response;
            if (!data) {
              reject("Verification failed, please Login again.");
            }
            commit("SET_INFO", data);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(response => {
            const { data } = response;
            commit("SET_TOKEN", "");
            removeToken();
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },

  modules: {}
});
