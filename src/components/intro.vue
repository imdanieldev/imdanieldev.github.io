<template>
     <section :id="section['id']" :class="section['class']">
          <div :class="div['class']">
               <h1 :class="title['class']">{{ title["text"] }}</h1>
               <p :class="about['class']">
                    {{ about["one"] }} <br/>
                    {{ about["two"] }}
               </p>
               <ul :class="ul['class']">
                    <li :class="skills['one']['class']">{{ skills["one"]["text"] }}</li>
                    <li :class="skills['two']['class']">{{ skills["two"]["text"] }}</li>
                    <li :class="skills['three']['class']">{{ skills["three"]["text"] }}</li>
                    <li :class="skills['four']['class']">{{ skills["four"]["text"] }}</li>
               </ul>
               <div :class="contact['class']">
                    <a :class="email['class']" :href="email['link']">{{ email["text"] }}</a>
                    <a :class="github['class']" :href="github['link']">{{ github["text"] }}</a>
               </div>

          </div>
     </section>
</template>


<script>
export default {
     name: "intro",
     data() {
          return {
               section: {
                    id: "intro",
                    class: "min-h-screen w-full flex flex-col justify-center items-center",
               },
               contact: {
                    class: "grid justify-around grid-cols-1 w-full sm:grid-cols-2",
               },
               title: {
                    text: "Hi I'm Daniel",
                    class: "text-center text-3xl break-words",
               },
               div: {
                    class:
                         "border-gradient relative z-10 bg-white text-black min-w-full min-h-screen flex justify-center items-center flex-col md:min-w-[50vw] md:min-h-[50vh]",
               },
               ul: {
                    class:
                         "grid grid-cols-1 mt-8 w-full justify-around text-center sm:grid-cols-2",
               },
               email: {
                    link: "mailto: imdanieldev@outlook.com",
                    text: "Contact Me",
                    class:
                         "cursor-pointer font-medium text-gradient break-words text-center mt-2 sm:mt-1",
               },
               github: {
                    link: "https://github.com/imdanieldev",
                    text: "GitHub",
                    class:
                         "cursor-pointer font-medium text-gradient break-words text-center mt-2 sm:mt-1",
               },
               about: {
                    one: "I am a web developer who works part time.",
                    two: "I entered the field professionally from 2020.",
                    class: "max-w-2xs text-center mt-2 text-base break-words",
               },
               skills: {
                    one: {
                         text: "HTML CSS",
                         class: "list-none break-words",
                    },
                    two: {
                         text: "JavaScript VueJs",
                         class: "list-none sm:mt-0 mt-2 break-words",
                    },
                    three: {
                         text: "Bootstrap Tailwindcss",
                         class: "list-none sm:mt-1 mt-2 break-words",
                    },
                    four: {
                         text: "Git GitHub",
                         class: "list-none sm:mt-1 mt-2 break-words",
                    },
               },
          };
     },
     methods: {
          load() {
               document.querySelectorAll("#intro")[0].scrollIntoView();
               document.querySelector("html").classList.add("scroll-smooth");
          },
          goTo(element) {
               let el = document.querySelectorAll(element);
               el[0].scrollIntoView();
          },
     },

     mounted() {
          this.load();
     },
     setup() {
          let deg = 0;
          setInterval(() => {
               deg += 3;
               document
                    .querySelector(":root")
                    .style.setProperty(
                    "--gradient",
                    `linear-gradient(${deg}deg, #00fcdb, #e500ff) 1`
               );
               if (deg == 360) {
                    deg = 0;
               }
          }, 50);
     },
};
</script>

<style>
:root {
     --gradient: linear-gradient(0deg, #00fcdb, #e500ff) 1;
}

.border-gradient {
     border: 8px solid;
     border-image: var(--gradient);
}

.text-gradient {
     background: linear-gradient(45deg, #006dfc, #7300ff);
     background-clip: text;
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}
</style>
     