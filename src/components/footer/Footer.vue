<template>
    <footer class="footer">
      <ul class="footer-content">
        <li><router-link to="/impressum">Impressum</router-link></li>
        <li><router-link to="/help">Help</router-link></li>
        <li><router-link to="/account">My Account</router-link></li>
        <li><router-link to="/about-us">About</router-link></li>
      </ul>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    width: 100%;
    position: bottom fixed;
    bottom: 0;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  }
  
.footer-content {
  display: flex;
  justify-content: center;
}

.footer ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.footer router-link {
  text-decoration: none;
  color: inherit;
}

.footer router-link:hover {
  text-decoration: underline;
}

  </style>
  