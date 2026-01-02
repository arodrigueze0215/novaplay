<script lang="ts">
  import Grid from '../../lib/layout/grid.svelte';
  import Card from '../../lib/molecules/Card/card.svelte';

  const cardsData = [
    {
      image: 'https://placehold.co/164x110',
      year: 2025,
      category: 'Movie',
      rating: 'PG',
      title: 'Card Title 1',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 2',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2025,
      category: 'Movie',
      rating: 'PG',
      title: 'Card Title 3',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
    {
      image: 'https://placehold.co/164x110',
      year: 2024,
      category: 'TV Show',
      rating: 'E',
      title: 'Card Title 4',
    },
  ];
</script>

{#snippet cards()}
  {#each cardsData as card}
    <Card {...card} />
  {/each}
{/snippet}

<Grid {cards} />
