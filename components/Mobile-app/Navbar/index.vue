<template>
  <nav 
    :ref="nr"
    class="navbar navbar-expand-lg"
  >
    <div class="container">
      <!-- Logo -->
      <NuxtLink to="/" class="logo">
        <img ref="lr" src="/img/logo-gr.png" v-if="grLogo" alt="logo" />
        <img
          ref="lr"
          src="/img/logo-dark.png"
          v-else-if="theme && theme === 'light'"
          alt="logo"
        />
        <img
          ref="lr"
          src="/img/logo-light.png"
          v-else-if="theme && theme === 'themeD'"
          alt="logo"
        />
        <img ref="lr" src="/img/logo-light.png" v-else alt="logo" />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="handleMobileDropdown"
      >
        <span class="icon-bar"><i class="fas fa-bars"></i></span>
      </button>

      <!-- navbar links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown" @click="handleDropdown">
              <span
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div class="dropdown-menu">
                <NuxtLink class="dropdown-item" :to="`/homepage/home1-${theme === 'light' ? 'light':'dark'}`">Main Home</NuxtLink>
                <NuxtLink class="dropdown-item" :to="`/homepage/home2-${theme === 'light' ? 'light':'dark'}`">Creative Agency</NuxtLink>
                <NuxtLink class="dropdown-item" :to="`/homepage/home5-${theme === 'light' ? 'light':'dark'}`">Digital Agency</NuxtLink>
                <NuxtLink class="dropdown-item" :to="`/homepage/home4-${theme === 'light' ? 'light':'dark'}`">Business One Page</NuxtLink>
                <NuxtLink class="dropdown-item" :to="`/homepage/home3-${theme === 'light' ? 'light':'dark'}`">Corporate Business</NuxtLink>
                <NuxtLink class="dropdown-item" :to="`/homepage/home6-${theme === 'light' ? 'light':'dark'}`">Modern Agency</NuxtLink>
                <NuxtLink class="dropdown-item" :to="`/homepage/home7-${theme === 'light' ? 'light':'dark'}`">Freelancer</NuxtLink>
                <NuxtLink class="dropdown-item" :to="`/homepage/home8-${theme === 'light' ? 'light':'dark'}`">Architecture</NuxtLink>
              </div>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="`/mobile-app/services-${theme === 'light' ? 'light':'dark'}`">Services</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="`/mobile-app/pricing-plan-${theme === 'light' ? 'light':'dark'}`">Pricing</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="`/mobile-app/portfolio-${theme === 'light' ? 'light':'dark'}`">Portfolio</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="`/mobile-app/shop-${theme === 'light' ? 'light':'dark'}`">Products</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="`/contact/contact-${theme === 'light' ? 'light':'dark'}`">Contact</NuxtLink>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import getSiblings from "../../../common/getSiblings";

export default {
  name: "navbar-mobile-app",
  props: ["lr", "theme", "nr", "grLogo"],
  methods: {
    handleDropdown: (e) => {
      getSiblings(e.target.parentElement).filter((item) => item.classList.contains("show")).map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) item.childNodes[0].setAttribute("aria-expanded", false);
        if (item.childNodes[2]) item.childNodes[2].classList.remove("show");
      });

      e.target.setAttribute("aria-expanded", true);

      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) dropdownMenu.classList.toggle("show");
      }
    },
    handleMobileDropdown: (e) => {
      document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    }
  }
}
</script>
