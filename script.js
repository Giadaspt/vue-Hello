const root = new Vue({

  el: '#root',

  data: {
    greeting: "Hello World",
    add: '',
    image: '<img class="image" src="jae-park-7GX5aICb5i4-unsplash.jpg">',
    color: '',
    color2: 'violet',
    count: 0,
  },


  methods: {

    miaFunct(){
      this.color = 'green';
      console.log('click');
    },

    miaFunct2(){
      this.color = 'violet';
      console.log('click2');
    },

    miaFunct3(colore){
      this.color = colore;
      console.log('click3');
    },

    funzioneKeyup(){
      ++ this.count;
      if(this.count >= 10){
        console.log('10 letter');
      }
    }
  }
});


                          