<template>
   <!-- Content -->
   <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

         <!-- Todo spinner -->
         <TodoSpinner />

         <!-- Todo form -->
         <TodoForm />

         <!-- Todo items -->
         <!-- <TodoItem /> -->
         <!-- <TodoItems /> -->

         <!-- Todo empty -->
         <TodoEmpty />
      </div>
   </div>
   <!--/ Content -->
</template>

<script>
// import TodoItems from '@/components/TodoItems.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoSpinner from '@/components/TodoSpinner.vue';
// import TodoItem from '@/components/TodoItem.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';
import axios from 'axios';

export default {
   name: "App",

   components: {
      TodoSpinner,
      // TodoItems,
      TodoForm,
      // TodoItem,
      TodoEmpty
   },

   data() {
      return {
         todos: []
      }
   },

   async created() {
      this.todos = await axios.get('http://localhost:3000/todos')
      .then((response) => response.data)
   },
};
</script>
