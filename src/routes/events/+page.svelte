<script lang="ts">
  export let data
</script>

<!-- The event structure is no longer like this -->
{#each data.events as event}
  <div class="px-[5vw] mb-40 mt-20">
    <h2 class="mb-5">{event.title}</h2>
    <p>{event.content}</p>
  </div>
{/each}