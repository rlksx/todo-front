import { createStore } from "vuex";
import axios from "axios";

export default createStore({
   state: {
      todos: [],
   },

   getters: {},

   mutations: {
      storeTodos(state, payload) {
         state.todos = payload;
      },

      storeTodo(state, payload) {
         const index = state.todos.findIndex((todo) => todo.id == payload.id);
         if (index >= 0) {
            state.todos.splice(index, 1, payload);
         } else {
            state.todos.unshift(payload);
         }
      },
   },

   actions: {
      getTodos({ commit }) {
         return new Promise((resolve) => {
            return setTimeout(() => {
               return axios
                  .get("http://localhost:3000/todos")
                  .then((response) => {
                     commit("storeTodos", response.data);
                     resolve();
                  });
            }, 500);
         });
      },

      addTodo({ commit }, data) {
         return axios
            .post("http://localhost:3000/todos", data)
            .then((response) => {
               commit("storeTodo", response.data);
            });
      },

      updateTodo({ commit }, { id, data }) {
         return axios
            .put(`http://localhost:3000/todos/${id}`, data)
            .then((response) => {
               commit("storeTodo", response.data);
            });
      },
   },
 
   modules: {},
});
