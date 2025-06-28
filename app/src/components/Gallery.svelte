<script>
  import { onMount, onDestroy } from "svelte";

  export let items = [];

  let lightbox;

  const isVideo = (src) =>
    /\.(mp4|webm|mov|mkv|avi|m4v|ogg|3gp|flv|ogv)$/i.test(src);

  const toLightboxElement = (item) => {
    const src = item.src || item.url || item;
    const video = isVideo(src);

    return {
      href: src,
      type: video ? "video" : "image",
      title: item.title || item.caption || "",
      description: item.description || "",
      ...(video && item.poster ? { poster: item.poster } : {}),
    };
  };

  onMount(async () => {
    if (typeof window === "undefined") return;

    // Load CSS
    if (!document.querySelector('link[href*="glightbox"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/css/glightbox.min.css";
      document.head.appendChild(link);
    }

    // Load JS
    if (!window.GLightbox) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/js/glightbox.min.js";
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    const GLightbox = window.GLightbox.default || window.GLightbox;

    lightbox = GLightbox({
      elements: items.map(toLightboxElement),
      loop: true,
      touchNavigation: true,
      autoplayVideos: true,
      videosWidth: "1280px",
      plyr: {
        css: "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.css",
        js: "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.polyfilled.js",
      },
    });
  });

  onDestroy(() => {
    lightbox?.destroy();
  });

  function openAt(index) {
    if (lightbox) {
      lightbox.openAt(index);
    }
  }
</script>

{#if items.length > 0}
  <div class="w-full h-full cursor-pointer" on:click={() => openAt(0)}>
    {#if /\.(mp4|webm|mov|mkv|avi|m4v|ogg|3gp|flv|ogv)$/i.test(items[0].src || items[0].url)}
      <img
        src={items[0].poster || "/fallback.jpg"}
        alt={items[0].title || ""}
        loading="eager"
        class="object-contain w-full h-full hover:scale-125 transition duration-500"
      />
      <span class="badge">🎬</span>
    {:else}
      <img
        src={items[0].src || items[0].url}
        alt={items[0].title || ""}
        class="object-contain w-full h-full hover:scale-125 transition duration-500"
        loading="eager"
      />
    {/if}
    {#if items.length > 1}
      <div class="media-count">+{items.length - 1}</div>
    {/if}
  </div>
{/if}

<style>
  .badge {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 12px;
    padding: 4px 6px;
    border-radius: 4px;
  }

  .media-count {
    position: absolute;
    top: 8px;
    left: 8px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 14px;
    padding: 4px 6px;
    border-radius: 4px;
  }
</style>
