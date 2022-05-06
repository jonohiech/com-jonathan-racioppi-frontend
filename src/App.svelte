<script>
import Home from './Pages/Home.svelte'
import NavBar from "./NavBar.svelte";
import About from "./Pages/About.svelte";

    let body = Home;

     function updateBody(comp) {
        body = comp;
    }

</script>

<style>
    :global(body){
        background: #614051;
                      }
    #home{
        background: #f1eaee;
        margin-right: 12vmin;
        margin-left: 12vmin;
        display: block;
        overflow: hidden;

    }



</style>

<NavBar on:home ={() =>{updateBody(Home)}} on:about={() => {updateBody(About)}} />

<div id="home" class="body">
    <svelte:component this="{body}"/>
</div>
