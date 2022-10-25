<template>
    <div :class="'chat-container my-2 '">
      <div class="chat-component">
        <div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex items-center justify-between">
            <div class="flex pb-2 items-center justify-center space-x-2">
              <div class="h-9 w-9 flex-shrink-0 rounded-full overflow-hidden object-cover">
                <img :src="user.image" alt="" class="h-full w-full" />
              </div>
              <span class="font-medium text-dark-blue text-sm lowercase">
                {{ user.username }}
              </span>
              <span
                class="font-bold text-sm text-white bg-moderate-blue rounded-sm px-1.5"
                v-if="currentUser == user.username"
              >
                you
              </span>
              <span class="text-greyish-blue">{{ time }}</span>
            </div>
          </div>
          <p class="text-greyish-blue">
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    emits: ["score-changed", "replied", "delete", "updated"],
    props: {
      id: {
        type: Number,
        default: 0,
      },
      currentUser: {
        type: String,
      },
      content: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        min: 0,
      },
      user: {
        type: Object,
        validator: (obj) => {
          if (!(obj["image"] && obj["username"])) return false;
          else return true;
        },
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
    data() {
      return {

      };
    },
    methods: {
      updateScore(score) {
        if (this.currentUser.username != this.user.username)
          this.$emit("score-changed", score, this.id);
      },
    },
  };
  </script>