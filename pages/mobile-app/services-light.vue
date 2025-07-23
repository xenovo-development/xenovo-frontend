<template>
  <div>
    <Navbar ref="navbar" :theme="theme" />
    <Header :headerData="headerData" />
    <Features />
    <Statstics theme="light" />
    <Pricing bgGray="1" />
    <FAQ />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Mobile-app/Navbar';
import Header from '../../components/Mobile-app/AltHeader';
import Features from '../../components/Mobile-app/Features';
import Statstics from '../../components/Mobile-app/Stats';
import Pricing from '../../components/Mobile-app/Pricing';
import FAQ from '../../components/Mobile-app/FAQ';
import Footer from '../../components/Mobile-app/Footer';

export default {
  layout: "mobile-app-light",
  head() {
    return {
      titleTemplate: '%s - Services Light'
    };
  },
  data() {
    return {
      headerData: {
        title: "Popular Services",
        page: "Services"
      },
      theme: "light"
    };
  },
  components: {
    Navbar,
    Header,
    Features,
    Statstics,
    Pricing,
    FAQ,
    Footer
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
  }
};
</script>
