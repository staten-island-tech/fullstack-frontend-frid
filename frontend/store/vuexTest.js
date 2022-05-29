export const state = {
  postIDs: [1233434, 12312412, 123989],
};

export const mutations = {
  ADD_POSTID(state, PostIDs) {
    state.events.push(PostIDs);
  },
};
