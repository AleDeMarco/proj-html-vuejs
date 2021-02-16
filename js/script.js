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
      }
    ],
    counterJumbotron: 0,
    jumbotron:[
      {
        src: 'img/h5-slide-1-background.jpg',
        h1: 'Internet of things',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        src: 'img/h5-slide-2-background.jpg',
        h1: 'Machine learning',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        src: 'img/h5-slide-3-background.jpg',
        h1: 'Contemporary ideas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ],
    counterReview: 0,
    reviews:[
      {
        src: 'img/instructor-img-1.jpg',
        content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
        name: 'Joan Collins',
        role: 'Student'
      },
      {
        src: 'img/instructor-img-2.jpg',
        content: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        name: 'Paul McTrevor',
        role: 'Ex-student'
      },
      {
        src: 'img/instructor-img-3.jpg',
        content: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
        name: 'Anastacia Smith',
        role: 'Partner'
      }
    ]
  },
  mounted(){
  },
  methods: {
    changeJumbotron(index){
      this.counterJumbotron = index;
    },
    changeReview(index){
      this.counterReview = index;
    }
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
