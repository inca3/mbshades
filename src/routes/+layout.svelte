<script>
  import "./index.css";
  import { onMount } from "svelte";
  import { moneyboys } from "../stores";

  onMount(() => {
    const getData = async () => {
      const res = await fetch("/api/boys");
      const data = await res.json();
      moneyboys.set(data.mints);
    };
    getData();
  });
</script>

<slot />
