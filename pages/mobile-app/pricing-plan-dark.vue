<template>
  <div>
    <Navbar ref="navbar" />
    <Header :headerData="headerData" />
    <Pricing />
    <CallToAction />
    <FAQ />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Mobile-app/Navbar';
import Header from '../../components/Mobile-app/AltHeader';
import Pricing from '../../components/Mobile-app/Pricing2';
import CallToAction from '../../components/Mobile-app/CallToAction';
import FAQ from '../../components/Mobile-app/FAQ';
import Footer from '../../components/Mobile-app/Footer';

export default {
  layout: "mobile-app-dark",
  head() {
    return {
      titleTemplate: '%s - Pricing Dark'
    };
  },
  components: {
    Navbar,
    Header,
    Pricing,
    CallToAction,
    FAQ,
    Footer
  },
  data() {
    return {
      headerData: {
        title: "Pricing Package",
        page: "Pricing"
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
