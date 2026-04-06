<script lang="ts">
  import Input from '$lib/atoms/Input/input.svelte';
  import Icon from '$lib/atoms/Icon/icon.svelte';

  let {
    placeholder = 'Search for movies or TV series',
    value = $bindable(''), // This will sync with the atom input value
  } = $props();
</script>

<div class="search-input">
  <div class="search-icon" aria-hidden="true">
    <Icon name="search" />
  </div>
  <Input type="text" {placeholder} bind:value />
</div>

<style>
  .search-input {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
    margin: 24px auto;
  }

  .search-icon {
    display: flex;
    align-items: center;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .search-input {
      gap: 16px;
      padding-top: 24px;
    }
  }
</style>
