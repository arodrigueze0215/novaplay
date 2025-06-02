<script lang="ts">
  export let placeholder: string;
  export let type: string;
</script>

<input type={type} placeholder={placeholder} />

<style>
  input {
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid var(--color-greyish-blue);
    background-color: transparent;
    padding-left: 16px;
    padding-bottom: 18px;
    color: var(--color-pure-white);
  }
  input:focus {
    outline: none;
    border-bottom: 1px solid var(--color-pure-white);
  }

  input::placeholder {
    opacity: 0.5;
    font-size: 15px;
    font-weight: var(--font-weight-light);
  }
</style>