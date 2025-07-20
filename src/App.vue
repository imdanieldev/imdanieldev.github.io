<template>
     <div
          class="selection:bg-slate-900 montserrat-400 flex-col selection:text-white min-h-svh bg-transparent text-white w-full relative flex justify-center items-center">
          <div class="bg z-0">
               <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
               </div>
          </div>
          <section
               class="min-h-svh w-full flex flex-col bg-neutral-950 justify-center items-center px-4 py-4 relative overflow-hidden z-10">
               <div ref="animateBox"
                    class="relative w-full flex justify-around items-center flex-col py-5 px-3 sm:px-7 h-svh">
                    <h1 class="text-center text-4xl sm:text-6xl break-words montserrat-500 name">Danial Nasr</h1>
                    <p class="text-center mt-2 text-xl sm:text-2xl my-text">
                         I am a web developer who works part time.
                         <br />
                         I entered the field professionally from 2020.
                    </p>
                    <ul
                         class="grid grid-cols-1 mt-8 w-full justify-around text-center sm:grid-cols-2 text-lg sm:text-xl skills">
                         <li class="list-none sm:mt-1 mt-2 break-words">HTML - CSS</li>
                         <li class="list-none sm:mt-1 mt-2 break-words">JavaScript - VueJs</li>
                         <li class="list-none sm:mt-1 mt-2 break-words">Gsap - Tailwindcss</li>
                         <li class="list-none sm:mt-1 mt-2 break-words">Wordpress - PHP</li>
                    </ul>
                    <div
                         class="grid justify-around grid-cols-2 w-full sm:grid-cols-5 mt-2 items-center text-lg sm:text-xl contactbtn">
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1 decoration-white decoration-1 decoration-solid underline transition-colors hover:text-blue-400 hover:decoration-blue-400"
                              href="//t.me/D6NTR">Telegram</a>
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1 decoration-white decoration-1 decoration-solid underline transition-colors hover:text-blue-400 hover:decoration-blue-400"
                              href="//instagram.com/imdanieln2008">Instagram</a>
                         <a class="cursor-pointer mt-2 sm:mt-1 hidden sm:flex justify-center items-center animate-bounce godown"
                              href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white" viewBox="0 0 16 16">
                                   <path fill-rule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                              </svg>
                         </a>
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1 decoration-white decoration-1 decoration-solid underline transition-colors hover:text-blue-400 hover:decoration-blue-400"
                              href="//imdanieldev.github.io/blog">Blog</a>
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1 decoration-white decoration-1 decoration-solid underline transition-colors hover:text-blue-400 hover:decoration-blue-400"
                              href="//github.com/imdanieldev">Github</a>
                    </div>
                    <div class="block sm:hidden contactbtn2">
                         <a class="cursor-pointer mt-2 sm:mt-1 flex animate-bounce justify-center items-center godown"
                              href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white" viewBox="0 0 16 16">
                                   <path fill-rule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                              </svg>
                         </a>
                    </div>
               </div>
          </section>
          <section id="items"
               class="my-box-shadow min-h-svh w-full overflow-hidden relative bg-transparent px-2 py-4 border-t-2 border-solid border-white z-10">
               <div class="min-h-svh w-full lg:py-0 flex justify-center items-center">
                    <div class="flex justify-around px-2 items-center w-full gap-10 flex-col lg:flex-row">
                         <div
                              class="border-gradient3 relative bg-white/5 backdrop-blur mt-5 gap-6 flex justify-center items-center flex-col w-full lg:w-[30vw] min-h-[40vh] lg:min-h-[50vh] py-5 px-3 sm:px-7 translate-y-0 lg:translate-y-6 transition-transform duration-700 hover:-translate-y-3 lg:hover:translate-y-3">
                              <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center">Basic Plan</h3>
                              <p class="text-center">In this plan, we provide you with a static site using Vanilla JS
                                   and
                                   SCSS, which can be used
                                   to introduce a company or build a portfolio, and if you want a blog, we will create
                                   it
                                   using Zola, which is an SSG.</p>
                         </div>
                         <div
                              class="border-gradient2 relative bg-white/5 backdrop-blur mt-5 gap-6 flex justify-center items-center flex-col w-full lg:w-[30vw] min-h-[40vh] lg:min-h-[50vh] py-5 px-3 sm:px-7 translate-y-0 transition-transform duration-700 hover:-translate-y-3">
                              <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center">Standard Plan</h3>
                              <p class="text-center">In this plan, we design a site for you using WordPress and valid
                                   plugins
                                   and templates. Any type of site is possible, whether it is an introduction, a blog,
                                   or a
                                   store. If necessary, a special template will be created for your site. You can
                                   provide an
                                   SMS package for user registration. Hosting and domain provision are required and can
                                   be
                                   the responsibility of the customer.</p>
                         </div>
                         <div
                              class="border-gradient1 relative bg-white/5 backdrop-blur mt-5 gap-6 flex justify-center items-center flex-col w-full lg:w-[30vw] min-h-[40vh] lg:min-h-[50vh] py-5 px-3 sm:px-7 translate-y-0 lg:-translate-y-6 transition-transform duration-700 hover:-translate-y-3 lg:hover:-translate-y-9">
                              <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center">Essential Plan</h3>
                              <p class="text-center">In this plan, a site is designed for you with PHP and VueJS, and
                                   the
                                   coding is completely proprietary, and while fully respecting security, it is written
                                   in
                                   the most optimal way possible using Tailwind CSS. A separate fee is required for
                                   design,
                                   and the provision of hosting and domain is the same as in the standard plan.</p>
                         </div>
                    </div>
               </div>

          </section>
     </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

const animateBox = ref(null);
onMounted(() => {
     let smoother = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          normalizeScroll: true,
     });
     gsap.to(animateBox.value, {
          y: "100%",
          scale: 1.1,
          scrollTrigger: {
               trigger: animateBox.value,
               pin: true,
               scrub: true,
          }
     });
     let split = new SplitText(".name", { type: "chars" });
     let words = new SplitText(".my-text", { type: "words" });
     let skill1 = new SplitText(".skills li:nth-child(1)", { type: "words" });
     let skill2 = new SplitText(".skills li:nth-child(2)", { type: "words" });
     let skill3 = new SplitText(".skills li:nth-child(3)", { type: "words" });
     let skill4 = new SplitText(".skills li:nth-child(4)", { type: "words" });
     let contactbtn1 = new SplitText(".contactbtn a:nth-child(1)", { type: "lines" });
     let contactbtn2 = new SplitText(".contactbtn a:nth-child(2)", { type: "lines" });
     let contactbtn3 = new SplitText(".contactbtn a:nth-child(3)", { type: "lines" });
     let contactbtn4 = new SplitText(".contactbtn a:nth-child(4)", { type: "lines" });
     let contactbtn5 = new SplitText(".contactbtn a:nth-child(5)", { type: "lines" });
     let contactbtn6 = new SplitText(".contactbtn2", { type: "lines" });
     gsap.from(split.chars, {
          opacity: 0,
          y: 200,
          duration: 4,
          ease: "bounce.out",
          stagger: 0.04
     });
     gsap.from(words.words, {
          opacity: 0,
          x: 50,
          stagger: 0.2,
          duration: 0.2,
          delay: 4
     });
     gsap.from(skill1.words, {
          opacity: 0,
          y: 200,
          scale: 2,
          stagger: 0.05,
          duration: 1,
          ease: "power3.inOut",
          delay: 7
     });
     gsap.from(skill2.words, {
          opacity: 0,
          y: 200,
          scale: 2,
          stagger: 0.05,
          duration: 1,
          ease: "power3.inOut",
          delay: 8
     });
     gsap.from(skill3.words, {
          opacity: 0,
          y: 200,
          scale: 2,
          stagger: 0.05,
          duration: 1,
          ease: "power3.inOut",
          delay: 9
     });
     gsap.from(skill4.words, {
          opacity: 0,
          y: 200,
          scale: 2,
          stagger: 0.05,
          duration: 1,
          ease: "power3.inOut",
          delay: 10
     });
     gsap.from(contactbtn1.lines, {
          opacity: 0,
          x: 200,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 11
     });
     gsap.from(contactbtn2.lines, {
          opacity: 0,
          x: 300,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 12
     });
     gsap.from(contactbtn3.lines, {
          opacity: 0,
          y: 100,
          scale: 2,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 13
     });
     gsap.from(contactbtn6.lines, {
          opacity: 0,
          y: 100,
          scale: 2,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 13
     });
     gsap.from(contactbtn4.lines, {
          opacity: 0,
          x: -200,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 15
     });
     gsap.from(contactbtn5.lines, {
          opacity: 0,
          x: -300,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 14
     });
     document.querySelectorAll(".godown").forEach((item) => {
          item.addEventListener("click", (event) => {
               event.preventDefault();

               gsap.to(window, {
                    duration: 3,
                    scrollTo: document.querySelector("#items"),
                    ease: "elastic.out(1,0.5)"
               });
          });
     });
});

</script>
<style scoped>
.border-gradient1 {
     border: 6px solid;
     border-image: linear-gradient(60deg, #00fcdb, #e500ff) 1;
}

.border-gradient2 {
     border: 6px solid;
     border-image: linear-gradient(120deg, #00fcdb, #e500ff) 1;
}

.border-gradient3 {
     border: 6px solid;
     border-image: linear-gradient(180deg, #00fcdb, #e500ff) 1;
}

.my-box-shadow {
     box-shadow: 0 -18px 100px 24px rgba(0, 0, 0, 1);
     -webkit-box-shadow: 0 -18px 100px 24px rgba(0, 0, 0, 1);
     -moz-box-shadow: 0 -18px 100px 24px rgba(0, 0, 0, 1);
}

.montserrat-100 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 100;
     font-style: normal;
}

.montserrat-200 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 200;
     font-style: normal;
}

.montserrat-300 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 300;
     font-style: normal;
}

.montserrat-400 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 400;
     font-style: normal;
}

.montserrat-500 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 500;
     font-style: normal;
}

.montserrat-600 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 600;
     font-style: normal;
}

.montserrat-700 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 700;
     font-style: normal;
}

.montserrat-800 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 800;
     font-style: normal;
}

.montserrat-900 {
     font-family: "Montserrat", sans-serif;
     font-optical-sizing: auto;
     font-weight: 900;
     font-style: normal;
}

.bg {
     display: table;
     width: 100%;
     height: 100%;
     background-color: #111111;
     line-height: 1.6;
     position: fixed;
     overflow: hidden;
     top: 0;
     left: 0;
}

.lines {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     height: 100%;
     margin: auto;
     width: 90vw;
     display: flex;
     justify-content: space-between;
}

.line {
     position: relative;
     width: 3px;
     height: 100%;
     background: transparent;
     overflow: hidden;
}

.line::after {
     content: '';
     display: block;
     position: absolute;
     height: 15vh;
     width: 100%;
     top: -50%;
     left: 0;
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
     animation: drop 5s 0s infinite;
     animation-fill-mode: forwards;
     animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

/* Different colors for each line's pseudo-element */
.line:nth-child(1)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF4500 75%, #FF4500 100%);
     animation-delay: 1s;
}

.line:nth-child(2)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #32CD32 75%, #32CD32 100%);
     animation-delay: 2s;
}

.line:nth-child(3)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #1E90FF 75%, #1E90FF 100%);
     animation-delay: 3s;
}

.line:nth-child(4)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FFD700 75%, #FFD700 100%);
     animation-delay: 4s;
}

.line:nth-child(5)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #8A2BE2 75%, #8A2BE2 100%);
     animation-delay: 5s;
}

.line:nth-child(6)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #20B2AA 75%, #20B2AA 100%);
     animation-delay: 6.5s;
}

.line:nth-child(7)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #DC143C 75%, #DC143C 100%);
     animation-delay: 7.5s;
}

.line:nth-child(8)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #00FA9A 75%, #00FA9A 100%);
     animation-delay: 8.5s;
}

.line:nth-child(9)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF1493 75%, #FF1493 100%);
     animation-delay: 9.5s;
}

.line:nth-child(10)::after {
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #00BFFF 75%, #00BFFF 100%);
     animation-delay: 10.5s;
}

@keyframes drop {
     0% {
          top: -50%;
     }

     100% {
          top: 110%;
     }
}
</style>
