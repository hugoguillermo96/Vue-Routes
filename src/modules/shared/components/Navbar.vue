<template>
  <div id="navbar">
    <router-link to="/">Lista de pokemons</router-link>
    <router-link to="/id">Ver pokemon</router-link>
    <router-link to="/about">About Pokemon</router-link>
  </div>
</template>

<style scoped>
div{

padding: 0 30px;
}
div a {
  font-weight: bold;
  color:rgb(0, 88, 88);
  margin: 0 10px;
}

div .router-link-exact-active {
  color:rgb(3, 165, 165);
}
</style>>
