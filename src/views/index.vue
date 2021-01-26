<template>
  <v-form @submit.prevent="handleSubmit">
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-btn small type="submit" color="success">{{
        $t("m.PublishArticle")
      }}</v-btn>
    </v-app-bar>
    <v-card class="mt-3" tile>
      <v-row class="px-4 mb-4">
        <v-col>
          <v-text-field
            :label="$t('m.title')"
            hide-details
            v-model="postForm.title"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="px-4 mb-4">
        <v-col cols="6" md="4">
          <v-text-field
            :label="$t('m.type')"
            dense
            hide-details
            v-model="postForm.type"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="4" @mouseleave="expand = false">
          <v-menu
            ref="menu"
            :close-on-content-click="false"
            transition="scroll-y-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="postForm.display_time"
                :label="$t('m.pubdate')"
                prepend-icon="mdi-calendar"
                readonly
                dense
                v-bind="attrs"
                hide-details
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="postForm.display_time"
              style="z-index:9999"
              no-title
              scrollable
            >
              <!-- <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn> -->
            </v-date-picker>
          </v-menu>
          <!-- <v-text-field
            :label="$t('m.time')"
            outlined
            dense
            hide-details
            @click="expand = true"
            :value="$utils.formatTime('yyyy-MM-dd', displayTime)"
          ></v-text-field>
          <v-expand-transition>
            <v-date-picker v-if="expand" class="abs" style="z-index:9999" elevation="2"></v-date-picker>
          </v-expand-transition> -->
        </v-col>
        <v-col cols="6" md="4" class="flex-y-center">
          <v-rating :label="$t('m.type')" background-color="grey lighten-1">
            <template v-slot:item="props">
              <v-icon
                :color="
                  props.isFilled ? genColor(props.index) : 'grey lighten-1'
                "
                @click="props.click"
                >{{ props.isFilled ? "mdi-star" : "mdi-star-outline" }}</v-icon
              >
            </template>
          </v-rating>
        </v-col>
      </v-row>
      <v-row class="px-4 mb-4">
        <v-col>
          <v-text-field
            :label="$t('m.briefIntroduction')"
            dense
            hide-details
            v-model="postForm.content_short"
          ></v-text-field>
        </v-col>
      </v-row>
      <mavon-editor v-model="postForm.content"></mavon-editor>
    </v-card>
  </v-form>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { createArticle } from "../api/article";

const defaultForm = {
  status: "0",
  title: "", // 文章题目
  content: "", // 文章内容
  content_short: "", // 文章摘要
  source_uri: "", // 文章外链
  // image_uri: '', // 文章图片
  display_time: undefined, // 前台展示时间
  // id: undefined,
  // platforms: ['a-platform'],
  comment_disabled: 0,
  importance: 0,
  type: ""
};
export default {
  name: "Markdown",
  components: {
    mavonEditor
  },
  data: () => {
    return {
      colors: ["green", "purple", "orange", "indigo", "red"],
      content: null,
      expand: false,
      postForm: Object.assign({}, defaultForm)
    };
  },
  computed: {
    displayTime: {
      // set and get is useful when the data
      // returned by the back end api is different from the front end
      // back end return => "2013-06-25 06:59:25"
      // front end need timestamp => 1372114765000
      get() {
        return new Date();
      },
      set(val) {
        this.postForm.display_time = new Date(val).getTime();
      }
    }
  },
  methods: {
    genColor(i) {
      return this.colors[i];
    },
    handleSubmit() {
      this.postForm.auth_id = this.$store.state.data.userId;
      createArticle(this.postForm).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
