<script>
  import Button from '$lib/atoms/Button/button.svelte';
</script>

<h1 class="t__base t__heading--l">Design System</h1>

<div class="ds__container">
  <span class="t__base t__heading--l"> Heading (L) - Outfit Light - 32px</span>
  <span class="t__base t__heading--m"> Heading (M) - Outfit Light - 24px</span>
  <span class="t__base t__heading--s"> Heading (S) - Outfit Medium - 24px</span>
  <span class="t__base t__heading--xs"> Heading (XS) - Outfit Medium - 18px</span>

  <span class="t__base t__body--m"> Body (M) - Outfit Light - 15px</span>
  <span class="t__base t__body--s"> Body (S) - Outfit Light - 13px</span>
  <Button text="Button" />
</div>

<style>
  .ds__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>
