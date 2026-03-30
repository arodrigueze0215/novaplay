<script lang="ts">
  export let title = 'Recommended for you';
  export let rectangleCards;
</script>

<div class="trending-container">
  <h2 class="t__base t__heading--l trending-title">{title}</h2>
  <ul class="carousel">
    {@render rectangleCards()}
  </ul>
</div>

<style>
  .trending-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .trending-title {
    margin-inline: 15px;
  }

  .carousel {
    display: flex;
    gap: 15px;
    overflow-x: scroll;
    padding-inline: 15px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    list-style-type: none;
  }

  @media (max-width: 767px) {
    .trending-title {
      font-size: 20px;
      font-weight: var(--font-weight-regular);
    }
  }
  @media (min-width: 768px) {
    .carousel {
      padding-inline: 25px;
    }
  }
</style>
