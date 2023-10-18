<script>
  export default{
    name: 'Navbar'
  }
</script>

<template>
  <navbar class="navbar">
    <ul class="navbar-content">
        <li><router-link :to="{ name: 'Hotel'}" tag="li" class="list-group-item" active-class="active">Hotel</router-link></li>
        <li><router-link :to="{ name: 'About Us'}" tag="li" class="list-group-item" active-class="active">About Us</router-link></li>
        <li><router-link :to="{ name: 'Zimmer'}" tag="li" class="list-group-item" active-class="active">Zimmer</router-link></li>
        <li><router-link :to="{ name: 'Buchen'}" tag="li" class="list-group-item" active-class="active">Buchen</router-link></li>
        <li><router-link :to="{ name: 'Login'}" tag="li" class="list-group-item" active-class="active">Login</router-link></li>
        <li><router-link :to="{ name: 'Registrieren'}" tag="li" class="list-group-item" active-class="active">Registrieren</router-link></li>
    </ul>
  </navbar>
</template>

<style>
    .navbar {
    width: 100%;
    position: top static;
    bottom: 0;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  }
  
.navbar-content {
  display: flex;
  justify-content: center;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar router-link {
  text-decoration: none;
  color: inherit;
}

.navbar router-link:hover {
  text-decoration: underline;
}

</style>