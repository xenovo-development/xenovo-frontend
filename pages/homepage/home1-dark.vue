<template>
  <div>
    <Navbar ref="navbar" />
    <IntroWithSlider ref="fixedSlider" />
    <div class="main-content" ref="MainContent">
      <AboutUs1 />
      <Services1 />
      <Works1 />
      <FunFacts1 />
      <VideoWithTestimonials />
      <SkillsCircle theme="dark" />
      <Clients1 theme="dark" />
      <Blogs1 />
      <CallToAction />
      <Footer />
    </div>
  </div>
</template>

<script>
import { SendApplicationMail } from '@/services/main/XenovoServices';
import { RequestApplicationMail } from '@/services/Model/RequestXenovoServices';
import useGoogleRecaptcha from '~/composables/useGoogleRecaptcha'

export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: 'Xenovo'
    };
  },
  methods: {
     async apiTest() {
      const { executeRecaptcha } = useGoogleRecaptcha();
      const { token } = await executeRecaptcha('submit');

      if (!token) {
        console.error('reCAPTCHA başarısız');
        return;
      }

      // Factory fonksiyonu çağır (parantez ekledik!)
      const payload = RequestApplicationMail();

      // Gerekli alanları doldur
      payload.name = "Oğuzhan";
      payload.email = "oguzhan@xenovo.com";
      payload.phone = "(555) 555 55 55";
      payload.subject = "Frontend Başvuru";
      payload.message = "Ben bu pozisyon için uygunum.";
      payload.recaptcha_token = token;

      try {
        const res = await SendApplicationMail(payload);
        console.log('Başarılı:', res.data);
      } catch (err) {
        console.error('Hata:', err);
      }
    }
  },
  mounted() {
    if (this.$refs.fixedSlider?.$el && this.$refs.MainContent) {
      const slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }
    const navbar = this.$refs.navbar.$el;
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };
    handleScroll(); // ilk durumda kontrol et
    window.addEventListener("scroll", handleScroll);
  },
  created(){
    this.apiTest();
  }
};
</script>

<style scoped></style>