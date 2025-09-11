<script lang="ts">
  let { placeholder, type, text } = $props();
</script>

<input class="input" type={type} placeholder={placeholder} value={text} />

<style>
  .input {
    border: none;
    outline: none;
    padding: 14px 20px;
    border-radius: 6px;
    min-width: 336px;
  }
  .input::placeholder {
    color: var(--color-text-light);
    opacity: 0.5;
  }
</style>