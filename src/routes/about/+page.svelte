<script>
  import Back from "../../assets/back_icon.png";
  import { goto } from "$app/navigation";
</script>

<div class="about">
  <p>
    created by <a href="https://twitter.com/cheeseslutt" target="_blank"
      >cheese</a
    >
    &
    <a href="https://twitter.com/b4crypt0" target="_blank">i3</a> <br /> all
    information is taken from
    <a href="https://moonrank.app" target="_blank">moonrank.app</a>
  </p>

  <h2><a href="https://moneyboys.io" target="_blank">moneyboys</a></h2>
</div>
<p class="back" on:click={() => goto("/")}><img src={Back} alt="" /></p>

<style>
  .about {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 30px;
  }
  p {
    color: rgb(228, 228, 228);
  }
  a {
    font-weight: bold;
    color: #fff;
  }
  .back {
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
  .back:hover {
    background-color: #4e3ea8;
  }
  img {
    max-width: 12px;
  }
</style>
