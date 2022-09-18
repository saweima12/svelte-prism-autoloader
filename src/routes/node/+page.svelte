<script lang="ts">
    import type { PageData } from './$types';
    // @ts-ignore
    import 'prismjs/components/prism-core.min.js';
    import 'prismjs/plugins/line-numbers/prism-line-numbers'
    import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
    import "prism-themes/themes/prism-dracula.min.css"
    import AutoLoader from '$lib/autoloader.svelte'

    // load page data.
    export let data: PageData;
    export let { metadata, content } = data;

    let code = `<pre><code class="language-python">print("hello, world")</code></pre>`
</script>

<article class="line-numbers">
    <div class="goback" >
        <a href="/">← Home</a>
    </div>

    <h1 class="letter-title-font">
        {metadata.title}
    </h1>

    {@html code}

    <div class="content">
        {@html content}
    </div>    
</article>

<AutoLoader 
    languagesPath="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/" 
    useMinified
    autoHighlightAll
/>

<style>

    .letter-title-font {
	    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
</style>