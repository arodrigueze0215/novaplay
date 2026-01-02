<script lang="ts">
  import Bookmark from '$lib/atoms/Bookmark/bookmark.svelte';
  import Icon from '$lib/atoms/Icon/icon.svelte';

  export let image = '';
  export let year = 2025;
  export let category = 'Movie';
  export let rating = 'PG';
  export let title = 'Card Title';
</script>

<article class="card">
  <div class="card__image__container">
    <img class="card__image" src={image} alt={title} />
    <Bookmark classNames="bookmark__position" />
  </div>
  <div class="t__base card__content">
    <div class="card__metadata">
      <p class="t__body--xs card__year">{year}</p>
      <Icon name="dot" />
      <div class="t__body--xs card__category">
        <Icon name="category" />
        <p>{category}</p>
      </div>
      <Icon name="dot" />
      <p class="t__body--xs card__rating">{rating}</p>
    </div>
    <h2 class="t__body--r card__title">{title}</h2>
  </div>
</article>

<style>
  .card {
    width: 100%;
    grid-column: span 2;
  }
  .card__image__container {
    position: relative;
    width: 100%;
    aspect-ratio: 82 / 55;
  }

  .card__image {
    position: absolute;
    border-radius: 8px;
    width: 100%;
    aspect-ratio: 82 / 55;
  }

  .card__metadata {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    opacity: 0.75;
  }
  .card__category {
    display: flex;
    gap: 4px;
  }
  .card__title {
    margin-block: -4px;
  }

  @media (min-width: 768px) {
    .card {
      width: 100%;
      grid-column: span 4;
    }
  }

  @media (min-width: 1025px) {
    .card {
      width: 100%;
      grid-column: span 3;
    }
  }

  :global(.bookmark__position) {
    position: absolute;
    top: 8px;
    right: 8px;

    @media (min-width: 768px) {
      top: 16px;
      right: 16px;
    }
  }
</style>
