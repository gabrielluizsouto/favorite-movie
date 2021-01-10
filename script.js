new Vue({
  el: '#app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h1>What's your favorite movie?</h1>
          <div class="divider"></div>   
        </div>
      </div>

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12 m4">
              <input id="author" type="text" v-model="author">
              <label for="author">Name</label>
            </div>
            <div class="input-field col s12 m8">
              <input id="movie" type="text" v-model="message">
              <label for="movie">Movie(s)</label>
            </div>
          </div>
          <a v-on:click="addComment" class="waves-effect grey btn">Comment</a>
        </form>
      </div>
      <div class="divider"></div> 

      <div class="row">
        <div class='comments-list' v-for="(comment, index) in allComments">
            <div class="section">
              <p>Author: <b>{{ comment.author }}</b></p>
              <p>{{ comment.message }}</p>
              <a href='#' v-on:click.prevent="removeComment(index)">Excluir</a>
            </div>
            <div class="divider"></div> 
        </div>
      </div>  
    </div>
  `,
  data: function() {
    return {
      comments: [],
      author: '',
      message: ''
    }
  },
  methods: {
    addComment() {
      if(this.message.trim() === '') return;
      this.comments.push({
        author: this.author,
        message: this.message
      });
      this.author = '';
      this.message = '';
    },
    removeComment(index) {
      this.comments.splice(index, 1);
    }
  },
  computed: {
    allComments(){
      return this.comments.map(comment => ({
        ...comment,              
        author: comment.author.trim() === '' ? 'Anonymous' : comment.author
      }));
    }
  },
  watch: {
    comments(val) {
      console.log('val', val);
    }
  }
});