<script>
  import { filteredBoy as moneyboy } from "../stores";
  import { goto } from "$app/navigation";

  const generate = () => {
    goto(`/generate/${$moneyboy.crawl_id}`);
  };
</script>

<div class="page">
  <div class="moneyboy" on:click={generate}>
    <div class="titles">
      <h2>{$moneyboy.name}</h2>
      <h2>Rank {$moneyboy.rank}</h2>
    </div>
    <div class="info">
      <img
        class="image-replace"
        src={$moneyboy.image}
        alt="moneyboy"
        loading="lazy"
        width="300px"
        height="300px"
      />
      <div class="attr">
        <p class="attr-title"><u><b>attributes</b></u></p>
        {#each $moneyboy.rank_explain as attr}
          <p><b>{attr.attribute}:</b> {attr.value}</p>
        {:else}
          <p>Loading...</p>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .page {
    display: flex;
  }
  .moneyboy {
    background-color: #6a59c7;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.3s;
  }
  .moneyboy:hover {
    box-shadow: 0px 20px 30px #4e3ea8;
  }
  .titles {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .info {
    display: flex;
    gap: 30px;
  }
  .attr {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  img {
    border-radius: 10px;
  }
  .image-replace {
    background-image: url(../assets/mbgray.png);
    background-size: cover;
  }
  @media screen and (max-width: 640px) {
    .moneyboy {
      max-width: 360px;
      margin-bottom: 60px;
    }
    .titles {
      flex-wrap: wrap;
    }
    .info {
      flex-wrap: wrap;
      height: max-content;
    }
    .attr {
      height: max-content;
    }
    .attr-title {
      margin-bottom: 10px;
    }
  }
</style>
