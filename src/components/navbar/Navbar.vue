<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="">
      <b-navbar-brand>
        <img src="../assets/logo1-klein.png" height="32" />
        Hotel Technikum
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Hotel</b-nav-item>
          <b-nav-item to="/about">Über uns</b-nav-item>
          <b-nav-item to="/zimmer">Zimmer</b-nav-item>
          <b-nav-item to="/impressum">Impressum</b-nav-item>
          <b-dropdown id="dropdown-login" text="Account" dropup>
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/logout">Logout</b-nav-item>
            <b-nav-item to="/registrierung">Registrierung</b-nav-item>
            <b-nav-item to="/account">Account-History</b-nav-item>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
  </div>
</template>