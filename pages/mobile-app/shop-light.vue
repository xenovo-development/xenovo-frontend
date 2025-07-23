<template>
  <div>
    <Navbar ref="navbar" :theme="theme" />
    <Header :headerData="headerData" />
    <Shop />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Mobile-app/Navbar';
import Header from '../../components/Mobile-app/AltHeader';
import Shop from '../../components/Mobile-app/Shop';
import Footer from '../../components/Mobile-app/Footer';

export default {
  layout: "mobile-app-light",
  head() {
    return {
      titleTemplate: '%s - Shop Light'
    };
  },
  components: {
    Navbar,
    Header,
    Shop,
    Footer
  },
  data() {
    return {
      headerData: {
        title: "Shop",
        page: "Shop"
      },
      theme: "light"
    };
  },
  mounted() {
    var navbar = this.$refs.navbar.$el;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
      this.theme = "light";
    } else {
      navbar.classList.remove("nav-scroll");
      this.theme = "";
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        this.theme = "light";
      } else {
        navbar.classList.remove("nav-scroll");
        this.theme = "";
      }
    });
  },
};
</script>
