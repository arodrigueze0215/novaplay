<script lang="ts">
  import Bookmark from '$lib/atoms/Bookmark/bookmark.svelte';
  import Icon from '$lib/atoms/Icon/icon.svelte';

  export let image = '';
  export let year = 2025;
  export let category = 'Movie';
  export let rating = 'PG';
  export let title = 'Card Title';
</script>

<li class="card">
  <div class="card__image__container">
    <img class="card__image" src={image} alt={title} />
    <Bookmark classNames="bookmark__position" />
    <div class="card__gradient"></div>
  </div>
  <div class="t__base card__content">
    <h2 class="t__body--r card__title">{title}</h2>
    <div class="card__metadata">
      <p class="t__body--xs card__year">{year}</p>
      <Icon name="dot" aria-hidden="true" />
      <div class="t__body--xs card__category">
        <Icon name="category" aria-hidden="true" />
        <p>{category}</p>
      </div>
      <Icon name="dot" classNames="card__content" aria-hidden="true" />
      <p class="t__body--xs card__rating">{rating}</p>
    </div>
  </div>
</li>

<style>
  .card {
    position: relative;
    width: 100%;
    min-width: 240px;
    aspect-ratio: 240 / 140;
  }

  .card__image__container {
    position: absolute;
    inset: 0;
    width: 100%;
  }

  .card__image {
    border-radius: 8px;
    width: 100%;
  }

  .card__gradient {
    position: absolute;
    inset: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
  }
  .card__content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 16px;
    padding-bottom: 16px;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
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
