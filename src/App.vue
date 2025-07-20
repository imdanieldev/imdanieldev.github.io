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
               class="min-h-svh w-full flex flex-col justify-center items-center px-4 py-4 relative overflow-hidden z-10">
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
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1"
                              href="//t.me/D6NTR">Telegram</a>
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1"
                              href="//instagram.com/imdanieln2008">Instagram</a>
                         <a class="cursor-pointer mt-2 sm:mt-1 hidden sm:flex justify-center items-center animate-bounce godown"
                              href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white" viewBox="0 0 16 16">
                                   <path fill-rule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                              </svg>
                         </a>
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1"
                              href="//imdanieldev.github.io/blog">Blog</a>
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1"
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
               class="my-box-shadow min-h-svh w-full overflow-hidden relative bg-white/5 px-2 py-4 border-t-2 border-solid border-white z-10">
               <div class="min-h-svh w-full lg:py-0 flex justify-center items-center">
                    <div class="flex justify-around px-2 items-center w-full gap-10 flex-col lg:flex-row">
                         <div
                              class="border-gradient3 relative bg-white/5 backdrop-blur mt-5 gap-6 flex justify-between items-center flex-col w-full lg:w-[30vw] min-h-[60vh] lg:min-h-[70vh] py-5 px-3 sm:px-7 translate-y-0 transition-transform duration-700 hover:-translate-y-3">
                              <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center">Basic Plan</h3>
                              <p class="text-center">In this plan, we provide you with a static site using Vanilla JS
                                   and
                                   SCSS, which can be used
                                   to introduce a company or build a portfolio, and if you want a blog, we will create
                                   it
                                   using Zola, which is an SSG.</p>
                              <div class="flex flex-wrap gap-4 items-center justify-around w-full">
                                   <a href="//t.me/D6NTR"><button class="cursor-pointer">
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  class="h-10 w-10 fill-white transition-colors hover:fill-blue-600"
                                                  viewBox="0 0 16 16">
                                                  <path
                                                       d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                             </svg>
                                        </button></a>
                                   <a href="//instagram.com/imdanieln2008"><button class="cursor-pointer">
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  class="h-10 w-10 fill-white transition-colors hover:fill-blue-600"
                                                  viewBox="0 0 16 16">
                                                  <path
                                                       d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                             </svg>
                                        </button></a>
                              </div>
                         </div>
                         <div
                              class="border-gradient2 relative bg-white/5 backdrop-blur mt-5 gap-6 flex justify-between items-center flex-col w-full lg:w-[30vw] min-h-[60vh] lg:min-h-[70vh] py-5 px-3 sm:px-7 translate-y-0 transition-transform duration-700 hover:-translate-y-3">
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
                              <div class="flex flex-wrap gap-4 items-center justify-around w-full">
                                   <a href="//t.me/D6NTR"><button class="cursor-pointer">
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  class="h-10 w-10 fill-white transition-colors hover:fill-blue-600"
                                                  viewBox="0 0 16 16">
                                                  <path
                                                       d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                             </svg>
                                        </button></a>
                                   <a href="//instagram.com/imdanieln2008"><button class="cursor-pointer">
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  class="h-10 w-10 fill-white transition-colors hover:fill-blue-600"
                                                  viewBox="0 0 16 16">
                                                  <path
                                                       d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                             </svg>
                                        </button></a>
                              </div>
                         </div>
                         <div
                              class="border-gradient1 relative bg-white/5 backdrop-blur mt-5 gap-6 flex justify-between items-center flex-col w-full lg:w-[30vw] min-h-[60vh] lg:min-h-[70vh] py-5 px-3 sm:px-7 translate-y-0 transition-transform duration-700 hover:-translate-y-3">
                              <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center">Essential Plan</h3>
                              <p class="text-center">In this plan, a site is designed for you with PHP and VueJS, and
                                   the
                                   coding is completely proprietary, and while fully respecting security, it is written
                                   in
                                   the most optimal way possible using Tailwind CSS. A separate fee is required for
                                   design,
                                   and the provision of hosting and domain is the same as in the standard plan.</p>
                              <div class="flex flex-wrap gap-4 items-center justify-around w-full">
                                   <a href="//t.me/D6NTR"><button class="cursor-pointer">
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  class="h-10 w-10 fill-white transition-colors hover:fill-blue-600"
                                                  viewBox="0 0 16 16">
                                                  <path
                                                       d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                             </svg>
                                        </button></a>
                                   <a href="//instagram.com/imdanieln2008"><button class="cursor-pointer">
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  class="h-10 w-10 fill-white transition-colors hover:fill-blue-600"
                                                  viewBox="0 0 16 16">
                                                  <path
                                                       d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                             </svg>
                                        </button></a>
                              </div>
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
          x: 200,
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
          rotateY: 360,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 11
     });
     gsap.from(contactbtn2.lines, {
          opacity: 0,
          x: 300,
          rotateY: -360,
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
          rotateY: 360,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 14
     });
     gsap.from(contactbtn5.lines, {
          opacity: 0,
          x: -300,
          rotateY: 360,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 15
     });
     document.querySelectorAll(".godown").forEach((item) => {
          item.addEventListener("click", (event) => {
               event.preventDefault();

               gsap.to(window, {
                    duration: 3,
                    scrollTo: document.querySelector("#items"),
                    ease: "elastic.out(2,0.5)"
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
