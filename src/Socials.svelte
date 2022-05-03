<script>
    import Github from "../public/assets/Github.svelte";
    import Linkedin from "../public/assets/Linkedin.svelte";
</script>

<style>


    .button {
        cursor: pointer;
    }

    #socials {
        horiz-align: center;
        padding: 0;
    }

    #socials li {
        display: inline;
    }
</style>

<ul id="socials">
    <li>
        <a class=button href="https://www.linkedin.com/in/jonathan-a-racioppi/" id=linkedin type="submit">
            <Linkedin alt="LinkedIn"  id=linkedin />
        </a>
    </li>
    <li>
        <a class=button href="https://github.com/jonohiech/">
            <Github alt="Github" />
        </a>
    </li>

</ul>

