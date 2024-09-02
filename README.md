# Blog 

This blog is based on [Frosti](https://github.com/EveSunMaple/Frosti)

## Preview

![view](./public/images/preview.png)

##  Article Information

|    Name     |      Meaning       | Required |
| :---------: | :----------------: | :------: |
|    title    |   Article title    |   Yes    |
| description |  Article summary   |   Yes    |
|   pubDate   |    Article date    |   Yes    |
|    image    |   Article cover    |    No    |
| categories  | Article categories |    No    |
|    tags     |    Article tags    |    No    |
|    badge    |   Article badge    |    No    |

## Development [Nix]
```bash
# Enter dev env [Nix]
nix develop --impure

# Install node_modules
bun install

# Run dev server
bun run dev
```

## Technology
- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [Pagefind](https://pagefind.app/)
- [daisyUI](https://daisyui.com/)
- [Bun](https://bun.sh/)
