<template>
  <div>
    <Navbar ref="navbar" />
    <Header :headerData="headerData" />
    <Works theme="dark" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Mobile-app/Navbar';
import Header from '../../components/Mobile-app/AltHeader';
import Works from '../../components/Mobile-app/Works';
import Footer from '../../components/Mobile-app/Footer';

export default {
  layout: "mobile-app-dark",
  head() {
    return {
      titleTemplate: '%s - Portfolio Dark'
    };
  },
  components: {
    Navbar,
    Header,
    Works,
    Footer
  },
  data() {
    return {
      headerData: {
        title: "Latest Works",
        page: "Portfolio"
      }
    };
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
