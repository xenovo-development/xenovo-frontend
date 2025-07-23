<template>
  <div>
    <Navbar ref="navbar" />
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
  layout: "mobile-app-dark",
  head() {
    return {
      titleTemplate: '%s - Shop Dark'
    };
  },
  data() {
    return {
      headerData: {
        title: "Shop",
        page: "Shop"
      }
    };
  },
  components: {
    Navbar,
    Header,
    Shop,
    Footer
  },
  mounted() {
    var navbar = this.$refs.navbar.$el;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>
