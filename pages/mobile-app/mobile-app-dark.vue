<template>
  <div>
    <Navbar ref="navbar" grLogo="1" />
    <Header />
    <Brands />
    <Services />
    <Features />
    <Screenshots />
    <Process />
    <TeamVid />
    <Pricing />
    <Testimonials />
    <CallToAction />
    <Blog />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Mobile-app/Navbar';
import Header from '../../components/Mobile-app/Header';
import Brands from '../../components/Mobile-app/Brands';
import Services from '../../components/Mobile-app/Services';
import Features from '../../components/Mobile-app/Features';
import Screenshots from '../../components/Mobile-app/Screenshots';
import Process from '../../components/Mobile-app/Process';
import TeamVid from '../../components/Mobile-app/TeamVid';
import Pricing from '../../components/Mobile-app/Pricing';
import Testimonials from '../../components/Mobile-app/Testimonials';
import CallToAction from '../../components/Mobile-app/CallToAction';
import Blog from '../../components/Mobile-app/Blog';
import Footer from '../../components/Mobile-app/Footer';

export default {
  layout: "mobile-app-dark",
  head() {
    return {
      titleTemplate: '%s - Mobile App Dark'
    };
  },
  components: {
    Navbar,
    Header,
    Brands,
    Services,
    Features,
    Screenshots,
    Process,
    TeamVid,
    Pricing,
    Testimonials,
    CallToAction,
    Blog,
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
