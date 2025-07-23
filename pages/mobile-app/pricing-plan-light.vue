<template>
  <div>
    <Navbar ref="navbar" :theme="theme" />
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
  layout: "mobile-app-light",
  head() {
    return {
      titleTemplate: '%s - Pricing Light'
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
