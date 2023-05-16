import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  actions: {
    asyncAddOne(context) {
      setTimeout(() => {
        context.commit('addOne');
      }, 2000);
    },
  },
  mutations: {
    addOne(state) {
      state.count += 1;
    },
    addTenCount(state, payload) {
      state.count += payload;
    },
    addObjCount(state, payload) {
      state.count += payload.num;
    },
  },
  getters: {
    // 복잡한 계산식을 처리 : computed
    countMsg(state) {
      // return state.count + '번 호출됨';
      let msg = '10번보다 ';
      if (state.count > 10) {
        msg += '많이 ';
      } else {
        msg += '적게 ';
      }
      return msg + ' 호출됨(' + state.count + ')';
    },
  },
});
