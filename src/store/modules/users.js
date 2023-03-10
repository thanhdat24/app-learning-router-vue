const state = function () {
  return {
    userList: [
      {
        id: 1,
        name: "Lê Thành Đạt",
        age: 22,
        email: "dat@gmail.com",
        avatar:
          "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-cho-con-gai-1.jpg",
        typePets: ["Chó", "Mèo"],
      },
      {
        id: 2,
        name: "Vương Mộng Hùng",
        age: 21,
        email: "hung@gmail.com",
        avatar:
          "https://i.pinimg.com/564x/f1/03/79/f10379c52c42c90b7f2e9830b2258880.jpg",
        typePets: ["Chuột", "Cá"],
      },
    ],
    userDetail: null,
  };
};

const mutations = {
  setUserDetailMutation(state, payload) {
    const userDetail = state.userList.find(
      (user) => user.id === Number(payload)
    );
    state.userDetail = userDetail;
  },
};

const actions = {
  getUserDetailAction(context, payload) {
    context.commit("setUserDetailMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
