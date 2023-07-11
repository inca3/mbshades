<script>
  import { filteredBoy as moneyboy, filteredMoneyboys } from "../../../stores";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import mergeImages from "merge-images";
  import BackIcon from "../../../assets/back_icon.png";
  import Shades from "../../../assets/sample-shade.png";
  import Loading from "../../../lib/Loading.svelte";

  const goBack = () => {
    goto("/");
    filteredMoneyboys.set([]);
    moneyboy.set({});
  };

  let generatedImage;

  let isLoading = true;

  onMount(() => {
    const createImage = async () => {
      const src = await mergeImages([$moneyboy?.image, Shades], {
        crossOrigin: "anonymous",
      });
      generatedImage = src;
      isLoading = false;
    };
    createImage();
  });
</script>

<svelte:head>
  <title>{$moneyboy?.name}</title>
</svelte:head>

{#if isLoading}
  <Loading />
{:else}
  <div class="page">
    <div class="back" on:click={goBack}>
      <img src={BackIcon} alt="goback" class="back-icon" />
      <p>go back</p>
    </div>
    <div class="generate">
      <div class="image">
        <h2>{$moneyboy?.name}</h2>
        <img src={generatedImage} alt="" />
        <a href={generatedImage} download="shaded_moneyboy">Download</a>
      </div>
    </div>
  </div>
{/if}

<style>
  .page {
    max-width: 1200px;
    margin: 0 auto;
  }
  .generate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .back {
    margin: 60px 0;
    cursor: pointer;
    display: flex;
    gap: 10px;
    padding: 0 20px;
    width: max-content;
    transition: all ease 0.3s;
  }
  img {
    max-width: 600px;
    border-radius: 10px;
  }
  a {
    padding: 10px 20px;
    height: 60px;
    background-color: #6a59c7;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    transition: all ease 0.3s;
  }
  a:hover {
    background-color: #4e3ea8;
  }
  .back-icon {
    max-width: 20px;
  }
  .back:hover {
    gap: 20px;
  }
  @media screen and (max-width: 640px) {
    img {
      max-width: 360px;
    }
  }
</style>
