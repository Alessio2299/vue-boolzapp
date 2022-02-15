const app = new Vue({
  el: '#app',
  data: {
    searchName: "",
    contactsSearch: [],
    lastMessage: "",
    newReceivedMessage:{
      date: dayjs().format('D-MM-YYYY'),
      time: dayjs().format('H:mm:ss'),
      text: "ok",
      status: "received"
    },
    newMessage: {
      date: dayjs().format('D-MM-YYYY'),
      time: dayjs().format('H:mm:ss'),
      text: "",
      status: "sent"
    },
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
        },
        {
          date: "10/01/2020",
          time: "16:10:42",
          text: "Ok",
          status: "sent"
        },
        {
          date: "10/01/2020",
          time: "16:10:58",
          text: "A stasera",
          status: "sent"
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
    },
    addMessage(){
      if(this.newMessage.text == ""){
      } else{
        this.contacts[this.active].messages.push(this.newMessage);
        this.newMessage = {date: dayjs().format('D-MM-YYYY') , time: dayjs().format('H:mm:ss'), text: "", status: "sent"};
        setTimeout(() => {
          this.contacts[this.active].messages.push(this.newReceivedMessage);
          this.newReceivedMessage = {date: dayjs().format('D-MM-YYYY'), time: dayjs().format('H:mm:ss'), text: "ok", status: "received"};
        }, 1000);
      }

    },
    selectLastMessage(indice){
      return this.contacts[indice].messages.length - 1;
    },
    search(){ 
      this.contactsSearch = this.contacts.filter(object => {
        if(!object.name.includes(this.searchName)){ 
          object.visible = false;
        }else{
          object.visible = true;
        }
        console.log(object.visible)
        return object.visible
      })
    }
  }
})