<script lang="ts">
  let { text } = $props();
</script>

<button class="button t__body--m">{text}</button>

<style>
  .button {
    background-color: var(--color-accent-primary);
    color: var(--color-text-light);
    border: none;
    padding: 14px 20px;
    cursor: pointer;
    border-radius: 6px;
    min-width: 336px;
  }
  .button:hover {
    background-color: var(--color-text-light);
    color: var(--color-background-medium);
  }
</style>
