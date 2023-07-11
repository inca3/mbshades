<script>
  import { goto } from "$app/navigation";
  import { moneyboys, filteredMoneyboys, filteredBoy } from "../stores";
  import Moneyboy from "../lib/Moneyboy.svelte";

  let search = "";
  let warning = "";

  const filterBoys = () => {
    if (search > 4443 || search < 0) {
      warning = "ID must be between 0 - 4443!";
      filteredMoneyboys.set([]);
      filteredBoy.set({});
      setTimeout(() => {
        warning = "";
      }, 3000);
    } else {
      $filteredMoneyboys = $moneyboys.filter((boy) =>
        boy.name.endsWith(`Solana Money Boy #${search}`)
      );
      filteredBoy.set($filteredMoneyboys[0]);
    }
  };
</script>

<svelte:head>
  <title>MoneyBoy Shades</title>
</svelte:head>

<div class="page">
  <h1>get some shades on your moneyboy</h1>
  <div class="search">
    <form class="input-group" on:submit|preventDefault={() => filterBoys()}>
      <input
        type="number"
        bind:value={search}
        placeholder="enter your moneyboys ID, i.e. 3984"
      />
      <button>search</button>
    </form>
  </div>
  <h3 class="warning">{warning}</h3>

  <div class="boys">
    {#if $filteredMoneyboys.length}
      <Moneyboy />
    {:else}
      <h2>search for your moneyboy and select</h2>
    {/if}
  </div>
</div>

<p on:click={() => goto("/about")}>?</p>

<style>
  h1 {
    margin-top: 60px;
  }
  .page {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
  .search {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    position: relative;
    padding: 10px;
    width: 100%;
    height: 100%;
    border-radius: 10px 20px 20px 10px;
    outline: none;
    border: none;
    font-weight: 700;
  }
  .boys {
    margin-top: 30px;
    display: flex;
  }
  form {
    position: relative;
    width: 400px;
    height: 50px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 30px;
    height: 100%;
    border-radius: 0 10px 10px 0;
    border: none;
    color: #fff;
    background-color: #6a59c7;
    cursor: pointer;
    transition: all ease 0.3s;
  }
  button:hover {
    background-color: #4e3ea8;
  }
  p {
    font-weight: bold;
    background-color: #6a59c7;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 30px;
    width: 30px;
    border-radius: 50vmax;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    user-select: none;
    transition: all ease 0.3s;
  }
  p:hover {
    background-color: #4e3ea8;
  }
  h3 {
    opacity: 1;
    color: #f19217;
    transition: all ease 0.3s;
  }
  h3:empty {
    display: none;
    opacity: 0;
  }
  @media screen and (max-width: 640px) {
    form {
      max-width: 300px;
      height: 60px;
    }
    h1,
    h2 {
      max-width: 300px;
      text-align: center;
    }
  }
</style>
