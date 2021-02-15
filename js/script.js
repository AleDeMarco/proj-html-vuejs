var app = new Vue({
  el: '#app',
  data: {
    logoUrl: 'img/logo-light.png',
    pageMenu: [
      {
        name: 'Home',
        url: '#'
      },
      {
        name: 'Courses',
        url: '#'
      },
      {
        name: 'Instructors',
        url: '#'
      },
      {
        name: 'Events',
        url: '#'
      },
      {
        name: 'Pages',
        url: '#'
      },
      {
        name: 'Elements',
        url: '#'
      },
      {
        icon: 'search',
        url: '#'
      },
      {
        icon: 'shopping-bag',
        url: '#'
      },
      {
        icon: 'bars',
        url: '#'
      }
    ],
    cartItem: 0,
    sectorMenu:[
      {
        subject: 'Languages',
        src: 1
      },
      {
        subject: 'Software',
        src: 2
      },
      {
        subject: 'Business',
        src: 3
      },
      {
        subject: 'Chemistry',
        src: 4
      },
      {
        subject: 'Science',
        src: 5
      },
      {
        subject: 'DIY&Craft',
        src: 6
      },
    ]
  },
  mounted(){
  },
  methods: {
    starConverter(index,vote){
        return index <= Math.floor(vote / 2) ? 'fas fa-star' : 'far fa-star';
    },
    langFlag(lang){
      if (this.flags.includes(lang)) {
        return 'img/' + lang + '.svg'
      }
    },
  }
});





















// backdrop_path
// genre_ids
// id
// title --> name-(serie)
// original_language
// original_title --> original_name-(serie)
// overview
// vote_average
// poster_path
// popularity
// vote_count
