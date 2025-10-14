<script lang="ts">
  import { ErrorMessages } from "../../../constants/errors";


    //These props are used to control the input, pretty similar than useState in React.
  export let type: 'email' | 'password' | 'text';
  export let placeholder = '';
  export let errorMessage = ErrorMessages.REQUIRED;
  export let value = '';
  export let required = false;
  export let isValid = true;


  //Events
  function handleBlur(event: Event) {
    value = (event.target as HTMLInputElement).value;
    switch (type) {
      case 'email': {
        const inputValue = (event.target as HTMLInputElement).value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputValue.length === 0) {
          isValid = !required; // If not required, an empty field is valid
          errorMessage = required ? ErrorMessages.REQUIRED : '';
        } else if (!emailRegex.test(inputValue)) {
          isValid = false;
          errorMessage = ErrorMessages.EMAIL;
        } else {
          isValid = true;
          errorMessage = ErrorMessages.REQUIRED;
        }
        break;
      }
      default: // For 'text' and 'password' types
        isValid = !required || value.length > 0;
        errorMessage = required && value.length === 0 ? ErrorMessages.REQUIRED : '';
        break;
    }
  }
</script>

<div class="input-container">
  <input
    class="input t__base t__body--m"
    class:invalid-email={!isValid}
    {type}
    {placeholder}
    bind:value
    {required}
    on:blur={handleBlur}
    aria-describedby={!isValid ? 'error-message' : undefined}
    aria-invalid={!isValid}
  />
  {#if !isValid}
    <span id="error-message" class="error-message t__base t__body--m">{errorMessage}</span>
  {/if}
</div>


<style>
  .input-container {
    display: flex;
    
    position: relative;
    min-width: 336px;
    width: fit-content;

  }
  .error-message {
    color: var(--color-red);
    position: absolute;
    right: 17px;
    bottom: 19px;
  }
  .input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-greyish-blue);
    background-color: transparent;
    color: var(--color-pure-white);
    padding-bottom: 18px;
    padding-left: 16px;
    padding-right: 16px;
    caret-color: var(--color-red);
  }
.input::placeholder {
    color: var(--color-pure-white);
    opacity: 0.5;
  }
  
  .input:focus {
    border-bottom: 1px solid var(--color-pure-white);
  }
  .input.invalid-email {
    border-bottom: 1px solid var(--color-red);
  }
</style>