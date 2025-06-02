<script>
  import '../app.css';
  import { onMount } from 'svelte';

  onMount(() => {
    document.body.classList.add('t__base');
  });
</script>

<slot />
