<template>
     <div
          class="selection:bg-slate-900 montserrat-400 flex-col selection:text-white min-h-svh bg-transparent text-white w-full relative flex justify-center items-center">
          <section
               class="min-h-svh w-full flex flex-col bg-neutral-950 justify-center items-center px-4 py-4 relative overflow-hidden z-10">
               <div ref="animateBox"
                    class="relative w-full flex justify-around items-center flex-col py-10 px-3 sm:px-7 min-h-svh">
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
                         <a class="flex justify-center gap-2 items-center cursor-pointer font-medium break-words text-center mt-2 sm:mt-1 decoration-white decoration-1 decoration-solid underline transition-colors hover:text-blue-400 hover:decoration-blue-400"
                              href="//t.me/D6NTR">
                              Telegram
                         </a>
                         <a class="cursor-pointer font-medium break-words text-center mt-2 sm:mt-1 decoration-white decoration-1 decoration-solid underline transition-colors hover:text-blue-400 hover:decoration-blue-400"
                              href="//instagram.com/imdanieln2008">Instagram</a>
                         <a class="cursor-pointer mt-2 sm:mt-1 hidden sm:flex justify-center items-center animate-bounce godown"
                              href="#">
                              <svg viewbox="0 0 32 32" class="w-8 h-8 fill-white">
                                   <path
                                        d="M26.7 16l-1.9-1.9L17.3 21.6V5.3h-2.6v16.3l-7.5-7.5L5.3 16l10.7 10.7 10.7-10.7z" />
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
                              <svg viewbox="0 0 32 32" class="w-8 h-8 fill-white">
                                   <path
                                        d="M26.7 16l-1.9-1.9L17.3 21.6V5.3h-2.6v16.3l-7.5-7.5L5.3 16l10.7 10.7 10.7-10.7z" />
                              </svg>
                         </a>
                    </div>
               </div>
          </section>
          <section id="items" class="my-box-shadow min-h-svh w-full overflow-hidden relative starsbg px-2 py-4 z-10">
               <div class="stars"></div>
               <div class="shooting-star"></div>
               <div class="shooting-star"></div>
               <div class="shooting-star"></div>
               <div class="shooting-star"></div>
               <div class="shooting-star"></div>
               <div class="shooting-star"></div>
               <div class="min-h-svh w-full lg:py-0 flex justify-center items-center">
                    <div id="panels"
                         class="flex min-h-[600svh] lg:min-h-[300svh] justify-start px-2 py-4 items-start w-full gap-10 flex-nowrap overflow-x-hidden relative">
                         <div class="w-full grow-0 shrink-0 basis-full flex justify-end lg:justify-between items-center panel">
                              <p class="text-2xl hidden lg:block">Start of plans (Scroll to see).</p>
                              <div
                                   class="border-gradient3 relative bg-white/5 backdrop-blur-lg mt-5 gap-6 flex justify-center items-center flex-col w-full lg:w-[30vw] min-h-[60vh] lg:min-h-[50vh] py-5 px-3 sm:px-7">
                                   <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center flex gap-2">
                                        <svg viewbox="0 0 32 32" class="w-8 h-8 fill-current stroke-black">
                                             <path d="M5.3 12h14v4.7H5.3z m0 7.3h14V24H5.3zM22 12H26.7v12h-4.7z"
                                                  opacity=".3" />
                                             <path
                                                  d="M26.7 5.3H5.3c-1.5 0-2.7 1.2-2.6 2.7L2.7 24c0 1.5 1.2 2.7 2.6 2.7h21.4c1.5 0 2.7-1.2 2.6-2.7V8c0-1.5-1.2-2.7-2.6-2.7z m-7.4 18.7H5.3v-4.7h14V24z m0-7.3H5.3V12h14v4.7zM26.7 24h-4.7V12H26.7v12z" />
                                        </svg>
                                        Basic Plan
                                   </h3>
                                   <p class="text-center">In this plan, we provide you with a static site using Vanilla
                                        JS
                                        and
                                        SCSS, which can be used
                                        to introduce a company or build a portfolio, and if you want a blog, we will
                                        create
                                        it
                                        using Zola, which is an SSG.</p>
                              </div>
                         </div>
                         <div class="w-full grow-0 shrink-0 basis-full flex justify-center items-center panel h-fit">
                              <div
                                   class="border-gradient2 relative bg-white/5 backdrop-blur-lg mt-5 gap-6 flex justify-center items-center flex-col w-full lg:w-[30vw] min-h-[60vh] lg:min-h-[50vh] py-5 px-3 sm:px-7">
                                   <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center flex gap-2">
                                        <svg viewbox="0 0 32 32" class="w-8 h-8 fill-current stroke-black">
                                             <path d="M16 20.5l-5 3.1 1.3-5.7-4.4-3.9 5.8-0.5L16 8.1l2.3 5.4 5.8 0.5-4.4 3.9 1.3 5.7z"
                                                  opacity=".3" />
                                             <path
                                                  d="M29.3 12.3l-9.6-0.8L16 2.7 12.3 11.5 2.7 12.3l7.2 6.3L7.8 28 16 23 24.2 28l-2.1-9.4L29.3 12.3zM16 20.5l-5 3.1 1.3-5.7-4.4-3.9 5.8-0.5L16 8.1l2.3 5.4 5.8 0.5-4.4 3.9 1.3 5.7L16 20.5z" />
                                        </svg>
                                        Standard Plan
                                   </h3>
                                   <p class="text-center">In this plan, we design a site for you using WordPress and
                                        valid
                                        plugins
                                        and templates. Any type of site is possible, whether it is an introduction, a
                                        blog,
                                        or a
                                        store. If necessary, a special template will be created for your site. You can
                                        provide an
                                        SMS package for user registration. Hosting and domain provision are required and
                                        can
                                        be
                                        the responsibility of the customer.</p>
                              </div>
                         </div>
                         <div class="w-full grow-0 shrink-0 basis-full flex justify-between items-center panel pr-6">
                              <div
                                   class="border-gradient1 relative bg-white/5 backdrop-blur-lg mt-5 gap-6 flex justify-center items-center flex-col w-full lg:w-[30vw] min-h-[60vh] lg:min-h-[50vh] py-5 px-3 sm:px-7">
                                   <h3 class="text-2xl montserrat-500 tracking-[0.5rem] text-center flex gap-2">
                                        <svg viewbox="0 0 32 32" class="w-8 h-8 fill-current stroke-black">
                                             <path d="M11.8 6.7H8.3l-2 4h3.5z m13.9 4l-2-4h-3.5l2 4zM14.7 22.2V13.3H7.3z m2.6 0L24.7 13.3H17.3zM17.2 6.7h-2.4l-2 4h6.4z"
                                                  opacity=".3" />
                                             <path
                                                  d="M25.3 4H6.7L2.7 12l13.3 16L29.3 12l-4-8z m-1.6 2.7l2 4h-3.6l-2-4h3.6zM8.3 6.7h3.6l-2 4H6.3l2-4zM14.7 22.2L7.3 13.3H14.7v8.9zM12.8 10.7l2-4h2.4l2 4H12.8zM17.3 22.2V13.3h7.4L17.3 22.2z" />
                                        </svg>
                                        Essential Plan
                                   </h3>
                                   <p class="text-center">In this plan, a site is designed for you with PHP and VueJS,
                                        and
                                        the
                                        coding is completely proprietary, and while fully respecting security, it is
                                        written
                                        in
                                        the most optimal way possible using Tailwind CSS. A separate fee is required for
                                        design,
                                        and the provision of hosting and domain is the same as in the standard plan.</p>
                              </div>
                              <p class="text-2xl hidden lg:block">The End (Prices are negotiable).</p>
                         </div>
                    </div>
               </div>
          </section>
          <section class="min-h-svh w-full flex flex-col bg-neutral-950 justify-center items-center px-4 py-4">
               <div>
                    Coming Soon...
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
window.addEventListener("resize",()=>{
     location.reload();
});
onMounted(() => {
     let smoother = ScrollSmoother.create({
          smooth: 0.1,
          effects: true,
          normalizeScroll: true,
     });
     const panel = gsap.utils.toArray("#panels .panel");
     let tween;
     tween = gsap.to(panel, {
          x: () => -1 * (document.querySelector("#panels").scrollWidth - innerWidth),
          ease: "none",
          scrollTrigger: {
               trigger: "#panels",
               pin: true,
               start: "top top",
               scrub: 1,
               // end:  () => "+=" + (document.querySelector("#panels").scrollWidth - innerWidth),
               end: "bottom bottom",
               pinReparent: false,
               pinSpacing: false,
               pinSpacer: false,
               snap: false,
          }
     });
     gsap.to(animateBox.value, {
          y: "100%",
          scale: 1.2,
          scrollTrigger: {
               trigger: animateBox.value,
               pin: true,
               scrub: true,
          }
     });
     console.log(document.querySelector("#panels").scrollWidth - innerWidth)
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
          x: 100,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 11
     });
     gsap.from(contactbtn2.lines, {
          opacity: 0,
          x: 50,
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
          y: -100,
          scale: 2,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 13
     });
     gsap.from(contactbtn4.lines, {
          opacity: 0,
          x: -50,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 15
     });
     gsap.from(contactbtn5.lines, {
          opacity: 0,
          x: -100,
          stagger: 0.05,
          duration: 1,
          ease: "power3.Out",
          delay: 14
     });
     document.querySelectorAll(".godown").forEach((item) => {
          item.addEventListener("click", (event) => {
               event.preventDefault();

               gsap.to(window, {
                    duration: 2,
                    scrollTo: document.querySelector("#items"),
                    ease: "power1.inOut"
               });
          });
     });
     ScrollTrigger.refresh();
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

.starsbg {
     /* background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f); */
     background-color: #0b0b2b;
}

.stars {
     width: 1px;
     height: 1px;
     position: fixed;
     top: 0;
     left: 0;
     background: white;
     box-shadow: 2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white, 22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white, 38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white, 53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white, 68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white, 83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white, 98vw 35vh 2px white, 5vw 60vh 1px white, 12vw 65vh 2px white, 18vw 72vh 1px white, 25vw 78vh 2px white, 30vw 85vh 1px white, 35vw 68vh 2px white, 40vw 82vh 1px white, 45vw 92vh 2px white, 50vw 75vh 1px white, 55vw 88vh 2px white, 60vw 95vh 1px white, 65vw 72vh 2px white, 70vw 85vh 1px white, 75vw 78vh 2px white, 80vw 92vh 1px white, 85vw 82vh 2px white, 90vw 88vh 1px white, 95vw 75vh 2px white;
     animation: twinkle 8s infinite linear;
}

.shooting-star {
     position: fixed;
     width: 30px;
     height: 1px;
     background: linear-gradient(90deg, white, transparent);
     animation: shoot 3s infinite cubic-bezier(0.95, 0.05, 0.8, 0.85);
}

.shooting-star:nth-child(1) {
     top: 5%;
     left: -100px;
     animation-delay: 0s;
}

.shooting-star:nth-child(2) {
     top: 15%;
     left: -100px;
     animation-delay: 1s;
}

.shooting-star:nth-child(3) {
     top: 25%;
     left: -100px;
     animation-delay: 2s;
}

.shooting-star:nth-child(4) {
     top: 35%;
     left: -100px;
     animation-delay: 3.5s;
}

.shooting-star:nth-child(5) {
     top: 45%;
     left: -100px;
     animation-delay: 4.5s;
}

.shooting-star:nth-child(6) {
     top: 50%;
     left: -100px;
     animation-delay: 5.5s;
}

@keyframes twinkle {

     0%,
     100% {
          opacity: 0.8;
     }

     50% {
          opacity: 0.4;
     }
}

@keyframes shoot {
     0% {
          transform: translateX(0) translateY(0) rotate(25deg);
          opacity: 1;
     }

     100% {
          transform: translateX(120vw) translateY(50vh) rotate(25deg);
          opacity: 0;
     }
}

.stars::after {
     content: "";
     position: absolute;
     width: 1px;
     height: 1px;
     background: white;
     box-shadow: 8vw 12vh 2px white, 16vw 18vh 1px white, 24vw 25vh 2px white, 33vw 15vh 1px white, 41vw 28vh 2px white, 49vw 35vh 1px white, 57vw 22vh 2px white, 65vw 42vh 1px white, 73vw 28vh 2px white, 81vw 48vh 1px white, 89vw 32vh 2px white, 97vw 45vh 1px white, 3vw 68vh 2px white, 11vw 75vh 1px white, 19vw 82vh 2px white, 27vw 88vh 1px white, 35vw 72vh 2px white, 43vw 85vh 1px white, 51vw 92vh 2px white, 59vw 78vh 1px white;
     animation: twinkle 6s infinite linear reverse;
}
</style>
