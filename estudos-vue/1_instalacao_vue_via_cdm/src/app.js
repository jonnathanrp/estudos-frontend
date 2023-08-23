const MyNameApp = {
    data(){
        return{
            name: "Jonnathan",
            age: 33
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")