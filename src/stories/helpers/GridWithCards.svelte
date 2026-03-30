<script lang="ts">
  import cardsData from '../constants/cardsData';
  import Grid from '../../lib/layout/Grid.svelte';
  import Card from '../../lib/molecules/Cards/Card.svelte';
</script>

{#snippet cards()}
  {#each cardsData as card}
    <Card {...card} />
  {/each}
{/snippet}

<Grid {cards} />
