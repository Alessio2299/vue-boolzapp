const app = new Vue({
  el: '#app',
  data: {
    changeNameUser:[
      {
        name:"",
        submenu: false
      }
    ],
    userName: "Nome Utente",
    actualMessage: "",
    searchName: "",
    contactsSearch: [],
    lastMessage: "",
    newMessage: "",
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
          status: "sent",
          info: false
        },
        {
          date: "10/01/2020",
          time: "15:32:34",
          text: "Si certo",
          status: "received",
          info: false
        },
        {
          date: "10/01/2020",
          time: "16:10:42",
          text: "Ok",
          status: "sent",
          info: false
        },
        {
          date: "10/01/2020",
          time: "16:10:58",
          text: "A stasera",
          status: "sent",
          info: false
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
          status: "sent",
          info: false
        },
        {
          date: "09/12/2021",
          time: "23:40:54",
          text: "No ci posso andare più tardi?",
          status: "received",
          info: false
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
          status: "sent",
          info: false
        },{
          date: "13/11/2021",
          time: "01:25:12",
          text: "Tutto bene, tu?",
          status: "received",
          info: false
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
          status: "sent",
          info: false
        },
        {
          date: "02/02/2022",
          time: "21:17:24",
          text: "Non ho molta voglia",
          status: "received",
          info: false
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
      if(this.newMessage != ""){
        this.contacts[this.active].messages.push({
          date: dayjs().format('D-MM-YYYY'),
          time: dayjs().format('H:mm:ss'),
          text: this.newMessage,
          status: "sent",
          info: false
        });
        this.newMessage = "";
        setTimeout(() => {
          this.contacts[this.active].messages.push({
            date: dayjs().format('D-MM-YYYY'),
            time: dayjs().format('H:mm:ss'),
            text: "ok",
            status: "received",
            info: false
          });
        }, 1000);
      }
    },
    selectLastMessage(indice){
      return this.contacts[indice].messages.length -1;
    },
    search(){ 
      this.contacts.forEach((element) => {
        if(!element.name.toLowerCase().includes(this.searchName.toLowerCase())){ 
          element.visible = false;  
        }else{
          element.visible = true;
        } 
      })
    },
    openSubMenuMessage(indice){
      this.actualMessage = indice;
      if(this.contacts[this.active].messages[indice].info == false){
        this.contacts[this.active].messages[indice].info = true;
      } else{
        this.contacts[this.active].messages[indice].info = false;
      }
    },
    remove(indice){
      console.log(this.contacts[this.active].messages.length);
      if(this.contacts[this.active].messages.length > 1){
        this.contacts[this.active].messages.splice(indice,1);
      }
    },
    openSubMenuUser(){
      if(this.changeNameUser[0].submenu == true){
        this.changeNameUser[0].submenu = false;
      } else {
        this.changeNameUser[0].submenu = true;
      }
    },
    clickChange(){
      console.log(this.userName)
      let name = prompt("Inserisci il tuo nome utente..");
      this.userName = name.charAt(0).toUpperCase() + name.slice(1);
      this.changeNameUser[0].submenu = false;
    },
    closeSubMenuMessage(indice){
      this.contacts[this.active].messages[indice].info = false;
    },
    closeSubMenuUser(){
      this.changeNameUser[0].submenu = false;
    }
  }
})