<script>
  import "../app.css";

  // TODO: Script to mark the current page in the navbar
</script>

<!-- TODO: New navbar styling -->
<nav class="flex justify-between mx-[5%] md:mx-[20%]">
  <a href="/">
    <img class="flex h-16 m-2" src="/img/logo.png" alt="Museo TIME" />
  </a>

  <div class="flex my-auto font-museosans300">
    <a href="/" class="text-xl mr-5 m-auto uppercase">Home</a>
    <a href="/history" class="text-xl mr-5 m-auto uppercase">Storia</a>
    <a href="/projects" class="text-xl mr-5 m-auto uppercase">Progetti</a>
    <a href="/events" class="text-xl mr-5 m-auto uppercase">Eventi</a>
    <a
      href="/login"
      class="text-xl px-5 py-2 border border-black hover:bg-black hover:text-white transition uppercase font-museosans700"
      >Login</a
    >
  </div>
</nav>

<slot />

<footer class="bg-neutral-200 text-center lg:text-left p-4 text-neutral-700">
  &copy; {new Date().getFullYear()} | Museo Time
</footer>
