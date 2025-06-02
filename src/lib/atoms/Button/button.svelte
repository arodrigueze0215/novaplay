<script lang="ts">
  let { text } = $props();
</script>

<button class="button t__body--m">{text}</button>

<style>
  .button {
    background-color: var(--color-red);
    color: var(--color-pure-white);
    border: none;
    padding: 14px 20px;
    cursor: pointer;
    border-radius: 6px;
    min-width: 336px;
  }
  .button:hover {
    background-color: var(--color-pure-white);
    color: var(--color-semi-dark-blue);
  }
</style>
