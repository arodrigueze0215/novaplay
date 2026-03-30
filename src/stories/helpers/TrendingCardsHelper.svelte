<script lang="ts">
  import cardsData from '../constants/cardsData';
  import TrendingLayout from '$lib/layout/TrendingLayout.svelte';
  import RectangleCard from '../../lib/molecules/Cards/RectangleCard.svelte';
</script>

{#snippet rectangleCards()}
  {#each cardsData as card}
    <RectangleCard {...card} />
  {/each}
{/snippet}

<TrendingLayout {rectangleCards} />
