<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  let { children, ...rest }: HTMLButtonAttributes = $props();
</script>

<button {...rest}>
  {@render children?.()}
</button>

<style>
  button {
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background: linear-gradient(0deg, var(--color-primary), var(--color-secondary));
    color: var(--color-background-secondary);
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: var(--color-secondary);
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
