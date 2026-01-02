<script lang="ts">
  export let title = 'Recommended for you';
  export let cards;
</script>

<div class="grid-container">
  <h2 class="t__base t__heading--l grid-title">{title}</h2>
  <section class="grid">
    {@render cards()}
  </section>
</div>

<style>
  .grid-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .grid-title {
    margin-inline: 15px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    gap: 15px;
    padding-inline: 15px;
  }

  @media (max-width: 767px) {
    .grid-title {
      font-size: 20px;
      font-weight: var(--font-weight-regular);
    }
  }
  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(12, 1fr);
      row-gap: 25px;
      column-gap: 30px;
      padding-inline: 25px;
    }
  }
  @media (min-width: 1025px) {
    .grid {
      row-gap: 32px;
      column-gap: 40px;
      padding-inline: 36px;
    }
  }
</style>
