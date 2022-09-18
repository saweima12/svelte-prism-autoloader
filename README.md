# svelte-prism-autoloader

A prismjs autoloader plugin for svelte

## Install

```bash
npm i svelte-prism-autoloader prismjs

# optional: install themes
npm i prism-themes
```

## Props

| Name               | Default                                                         |
|--------------------|-----------------------------------------------------------------|
| `languagesPath`     | https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/ |
| `useMinified`      | true                                                            |
| `autoHighlightAll` | false                                                           |


## Usage

```Svelte
<!-- Use languagesPath to specify the loaded CDN -->
<AutoLoader 
    languagesPath="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/" 
    useMinified
    autoHighlightAll
/>
```


## Example

- Use `Prismjs.highlightAll()`

```svelte
<script lang="ts">
import { onMount } from 'svelte';
import Prism from 'prismjs'
import "prism-themes/themes/prism-dracula.min.css"
import AutoLoader from '$lib/autoloader.svelte'

 let code = `<pre><code class="language-python">print("hello, world")</code></pre>`

onMount(() => {
    Prism.highlightAll()
})
</script>


{@html code}

<AutoLoader 
    languagesPath="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/" 
/>
```

- or use Autoloader's prop `autoHighlightAll`

```svelte
<script lang="ts">
    import type { PageData } from './$types';
    // @ts-ignore
    import 'prismjs/components/prism-core';
    import "prism-themes/themes/prism-dracula.min.css"
    import AutoLoader from '$lib/autoloader.svelte'

    // load page data.
    export let data: PageData;
    export let { metadata, content } = data;

    let code = `<pre><code class="language-python">print("hello, world")</code></pre>`
</script>

<article>
    <div class="goback">
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

```