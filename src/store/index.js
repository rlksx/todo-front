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

      deleteTodo(state, id) {
         const index = state.todos.findIndex((todo) => todo.id === id);
         if (index >= 0) {
            state.todos.splice(index, 1);
         }
      },
   },

   actions: {
      getTodos({ commit }) {
         return new Promise((resolve) => {
            return setTimeout(async () => {
               const response = await axios
                  .get("http://localhost:3000/todos");
               commit("storeTodos", response.data);
               resolve();
            }, 500);
         });
      },

      async addTodo({ commit }, data) {
         const response = await axios
            .post("http://localhost:3000/todos", data);
         commit("storeTodo", response.data);
      },

      async updateTodo({ commit }, { id, data }) {
         const response = await axios
            .put(`http://localhost:3000/todos/${id}`, data);
         commit("storeTodo", response.data);
      },

      async deleteTodo({ commit }, id) {
         await axios.delete(`http://localhost:3000/todos/${id}`);
         commit("deleteTodo", id);
      },
   },

   modules: {},
});
