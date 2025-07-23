<template>
  <div>
    <Navbar ref="navbar" />
    <Header :headerData="headerData" />
    <Features />
    <Statstics theme="dark" />
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
  layout: "mobile-app-dark",
  head() {
    return {
      titleTemplate: '%s - Services Dark'
    };
  },
  data() {
    return {
      headerData: {
        title: "Popular Services",
        page: "Services"
      }
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
