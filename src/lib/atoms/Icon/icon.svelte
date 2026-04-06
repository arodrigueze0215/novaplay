<script lang="ts">
  export let name: 'bookmark' | 'category' | 'dot' | 'search';
  export let classNames = '';
</script>

<div class="icon {classNames}" data-name={name} {...$$restProps}>
  {#if name === 'category'}
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        opacity="0.75"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.47778 0H1.52222C0.681522 0 0 0.681522 0 1.52222V8.47778C0 9.31848 0.681522 10 1.52222 10H8.47778C8.8815 10 9.26868 9.83962 9.55415 9.55415C9.83962 9.26868 10 8.8815 10 8.47778V1.52222C10 1.1185 9.83962 0.731321 9.55415 0.445849C9.26868 0.160377 8.8815 0 8.47778 0ZM2 4.5H1V3.5H2V4.5ZM2 5.5H1V6.5H2V5.5ZM9 4.5H8V3.5H9V4.5ZM9 5.5H8V6.5H9V5.5ZM9 1.37V2H8V1H8.63C8.72813 1 8.82224 1.03898 8.89163 1.10837C8.96102 1.17776 9 1.27187 9 1.37ZM2 1H1.37C1.27187 1 1.17776 1.03898 1.10837 1.10837C1.03898 1.17776 1 1.27187 1 1.37V2H2V1ZM1 8.63V8H2V9H1.37C1.27187 9 1.17776 8.96102 1.10837 8.89163C1.03898 8.82224 1 8.72813 1 8.63ZM8.63 9C8.83435 9 9 8.83435 9 8.63V8H8V9H8.63Z"
        fill="white"
      />
    </svg>
  {:else if name === 'dot'}
    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
      <circle opacity="0.5" cx="1" cy="1" r="1" fill="white" />
    </svg>
  {:else if name === 'search'}
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect opacity="0.01" width="32" height="32" fill="black" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.08 21.2L27.6133 25.72C27.8657 25.9704 28.0077 26.3111 28.0077 26.6667C28.0077 27.0222 27.8657 27.363 27.6133 27.6133C27.363 27.8657 27.0222 28.0077 26.6667 28.0077C26.3111 28.0077 25.9704 27.8657 25.72 27.6133L21.2 23.08C19.3366 24.5426 17.0355 25.3363 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667C25.3363 17.0355 24.5426 19.3366 23.08 21.2ZM14.6667 6.66667C10.2484 6.66667 6.66667 10.2484 6.66667 14.6667C6.66667 19.0849 10.2484 22.6667 14.6667 22.6667C19.0849 22.6667 22.6667 19.0849 22.6667 14.6667C22.6667 10.2484 19.0849 6.66667 14.6667 6.66667Z"
        fill="white"
      />
    </svg>
  {/if}
</div>

<style>
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
