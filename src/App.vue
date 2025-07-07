<template>
     <div
          class="selection:bg-slate-900 selection:text-white min-h-svh bg-neutral-900 text-white w-full relative flex justify-center items-center">
          <section id="intro" class="min-h-svh w-full flex flex-col justify-center items-center px-2 py-4">
               <div
                    class="border-gradient relative z-10 bg-white text-black min-w-full flex justify-center items-center flex-col md:min-w-[50vw] min-h-[50vh] py-5 px-3 sm:px-7">
                    <h1 class="text-center text-3xl break-words text-gradient2">Danial Nasr</h1>
                    <p class="text-center mt-2 break-words">
                         I am a web developer who works part time.
                         <br />
                         I entered the field professionally from 2020.
                    </p>
                    <ul
                         class="grid grid-cols-1 mt-8 w-full justify-around text-center sm:grid-cols-2">
                         <li class="list-none sm:mt-1 mt-2 break-words">HTML CSS</li>
                         <li class="list-none sm:mt-1 mt-2 break-words">JavaScript VueJs</li>
                         <li class="list-none sm:mt-1 mt-2 break-words">Bootstrap Tailwindcss</li>
                         <li class="list-none sm:mt-1 mt-2 break-words">Wordpress PHP</li>
                    </ul>
                    <div class="grid justify-around grid-cols-1 w-full sm:grid-cols-3 mt-2">
                         <a class="cursor-pointer font-medium text-gradient break-words text-center mt-2 sm:mt-1"
                              href="//t.me/D6NTR">Contact Me</a>
                         <a class="cursor-pointer font-medium text-gradient break-words text-center mt-2 sm:mt-1"
                              href="/blog">Blog</a>
                         <a class="cursor-pointer font-medium text-gradient break-words text-center mt-2 sm:mt-1"
                              href="//github.com/imdanieldev">Github</a>
                    </div>
               </div>
          </section>
     </div>
</template>
<script setup>
let deg = 0;

setInterval(() => {
     deg += 2;
     document
          .querySelector(":root")
          .style.setProperty(
               "--gradient",
               `linear-gradient(${deg}deg, #00fcdb, #e500ff) 1`
          );
     if (deg == 360) {
          deg = 0;
     }
}, 200);
</script>
<style scoped>
:root {
     --gradient: linear-gradient(0deg, #00fcdb, #e500ff) 1;
}

.border-gradient {
     border: 6px solid;
     border-image: var(--gradient);
}

.text-gradient {
     background: linear-gradient(45deg, #006dfc, #7300ff);
     background-clip: text;
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}
</style>