# Storybook demo images

Ten original images generated with OpenAI's built-in ImageGen on 2026-09-25: four landscapes, four views of an unbranded cap, one shoe and one abstract card. The exact generation prompts are in [prompts.json](./prompts.json).

These assets are used only by Storybook. `ui-kit/preview/demo-images.js` maps the original demo image URLs to local imports before the preview enters the document. Files in `core` and the original HTML displayed in the code panel are unchanged. The Diff example reuses the forest image with a preview-only blur.

Images were visually inspected and resized/compressed with Sharp to WebP at quality 76:

| Images | Dimensions | Total bytes |
| --- | --- | ---: |
| Four landscapes | 960 × 640 | 325,504 |
| Four cap views | 640 × 640 | 106,752 |
| Shoe and abstract card | 800 × 533 | 33,642 |

These ten files total 465,898 bytes. Together with the four optimized avatars, all fourteen images total 484,264 bytes. Vite emits eleven local fingerprinted WebP assets for caching and embeds three avatars smaller than 4 KB as data URIs in JavaScript. Separate image files are requested when used in a preview; embedded avatars load with the preview code. Large generated source PNGs are not imported or included in the Storybook build.
