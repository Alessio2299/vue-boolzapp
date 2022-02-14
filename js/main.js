const app = new Vue({
  el: '#app',
  data: {
    active: "0",
    contacts: [{
      name: "Michele",
      avatar: "./img/avatar_1.jpg",
      visible: true,
      messages: [
        {
          date: "10/01/2020",
          time: "15:30:55",
          text: "Hai portato a spasso il cane?",
          status: "sent"
        },
        {
          date: "10/01/2020",
          time: "15:32:34",
          text: "Si certo",
          status: "received"
        }
      ]
    },
    {
      name: "Fabio",
      avatar: "./img/avatar_4.jpg",
      visible: true,
      messages: [
        {
          date: "09/12/2021",
          time: "23:40:12",
          text: "Sei uscito a fare la spesa?",
          status: "sent"
        },
        {
          date: "09/12/2021",
          time: "23:40:54",
          text: "No ci posso andare più tardi?",
          status: "received"
        }
      ]
    },
    {
      name: "Samuele",
      avatar: "./img/avatar_3.jpg",
      visible: true,
      messages: [
        {
          date: "13/11/2021",
          time: "01:23:31",
          text: "Come stai?",
          status: "sent"
        },{
          date: "13/11/2021",
          time: "01:25:12",
          text: "Tutto bene, tu?",
          status: "received"
        }
      ]
    },
    {
      name: "Luisa",
      avatar: "./img/avatar_6.jpg",
      visible: true,
      messages: [
        {
          date: "02/02/2022",
          time: "21:10:17",
          text: "Ci vediamo oggi?",
          status: "sent"
        },
        {
          date: "02/02/2022",
          time: "21:17:24",
          text: "Non ho molta voglia",
          status: "received"
        }
      ]
    }
    ]
  },
  methods:{
    selectContact(indice){
      this.active=indice;
      console.log(this.active);
      console.log(this.contacts[this.active].messages[1].text);
    }
  }
})