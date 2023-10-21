<script>
    export default {
        name: 'Footer',
    }
</script>

<template>

    <div fluid class="container">
    <footer class="py-3 my-4">
      <b-nav align="center">
        <b-nav-item to="/impressum" class="nav-link px-2 text-body-secondary">Impressum</b-nav-item>
        <b-nav-item to="/account" class="nav-link px-2 text-body-secondary">Account</b-nav-item>
        <b-nav-item to="/about" class="nav-link px-2 text-body-secondary">Über Uns</b-nav-item>
      </b-nav>
      <p class="text-center text-body-secondary">&copy; 2023 Boutique-Hootel Technikum, GmbH</p>
    </footer>
  </div>
  
</template>
