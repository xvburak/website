<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let duration: number;
  const screencastDurationMinutes = Math.floor(duration / 60);
  const screencastDurationSeconds = duration % 60;
</script>

<time class="text-dark-grey {clazz}">
  Duration: {screencastDurationMinutes}m {screencastDurationSeconds}s
</time>
