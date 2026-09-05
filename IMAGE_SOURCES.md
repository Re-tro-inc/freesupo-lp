# Image quality update

## Delivery optimization (2026-09-05)

The 11 high-resolution content PNGs now have same-dimension WebP delivery copies.
Hero quality: 90; testimonial quality: 92; standalone photo quality: 85.
Combined content image size: 15,168,166 bytes to 1,428,178 bytes (91% reduction).
Original PNG files remain unchanged. No generative edits were used.
The verified official logo now has derived 256px page, 48px favicon and 180px
Apple touch PNG copies. These replace the full-size icon references described below.
Conversions used the existing local Sharp installation; no production dependency was added.

## Official browser icon (2026-09-05)

Verified `images/logo-hq.png` against the downloaded original from
https://drive.google.com/file/d/1fDY2vLQAyoaC17UEgNVUum_LkJUoCGw2/view.
Both files have SHA-256 `bba4afa1399505e1295227de98182d31b8edc1f32f8a3e28209fedd51fc2c557`.
The unchanged 1254 x 1254 PNG is used for the favicon and Apple touch icon,
as well as the existing page logos. No AI transformation was applied.

Original composite images remain unchanged in images/_original/.

## Original files restored

- hero-hq.png: hero-new4.png, 2800 x 1400. The embedded header is clipped by CSS; visible area is 2800 x 1242.
- hero-sp-hq.png: hero-sp-orig.png, 1180 x 2000.
- voice-*-hq.png: the four original 992 x 1354 testimonial cards, copied without regeneration or text changes.
- logo-hq.png: icon-orig.png, 1254 x 1254; the Japanese brand label is rendered as HTML text.

## Restored illustrative photos

The built-in image_gen tool restored five standalone images from the supplied composites. AI reconstruction can change fine details; these are illustrative photos, not new factual portraits or testimonials. No generated restoration was applied to testimonial cards.

### images/about-photo-hq.png

Source: images/_original/about.png

Prompt:

> Image edit / restoration for existing Japanese school website. Extract and restore ONLY the photograph of the young Japanese man in a white T-shirt sitting at a table holding a smartphone next to a silver laptop, in the lower center-right of the reference. Portrait 1024x1536. Keep his face, white shirt, pose, laptop and bright home background faithful. Output one standalone full-bleed high-resolution PHOTO, not a page screenshot or collage. Remove ALL graphic overlays, ALL Japanese text, numbers, badges, framing, rounded corners and page backgrounds. Reconstruct natural photo background where needed. Improve sharpness and natural detail in skin, hair, fabric, furniture; remove pixelation and compression artifacts. Do not change the people or turn them into different models. No text, logos, watermarks, artificial skin smoothing or oversharpening. This is an enhancement of an existing illustrative photo.

### images/support-01-hq.png

Source: images/_original/feature.png

Prompt:

> Image edit / restoration for existing Japanese school website. Extract and restore ONLY the FIRST photograph under section 01: young Japanese man wearing a teal blue shirt holding a smartphone with his other hand near his chin, green plant to his left, bright window. Landscape 1536x1024. Preserve his face, clothing, pose and scene. Output one standalone full-bleed high-resolution PHOTO, not a page screenshot or collage. Remove ALL graphic overlays, ALL Japanese text, numbers, badges, framing, rounded corners and page backgrounds. Reconstruct natural photo background where needed. Improve sharpness and natural detail in skin, hair, fabric, furniture; remove pixelation and compression artifacts. Do not change the people or turn them into different models. No text, logos, watermarks, artificial skin smoothing or oversharpening. This is an enhancement of an existing illustrative photo.

### images/support-02-hq.png

Source: images/_original/feature.png

Prompt:

> Image edit / restoration for existing Japanese school website. Extract and restore ONLY the SECOND photograph under section 02: young Japanese woman with tied-back brown hair wearing a light cream cardigan, seated at a laptop near a bright window and green plants. Landscape 1536x1024. Preserve her face, clothing, pose and scene. Output one standalone full-bleed high-resolution PHOTO, not a page screenshot or collage. Remove ALL graphic overlays, ALL Japanese text, numbers, badges, framing, rounded corners and page backgrounds. Reconstruct natural photo background where needed. Improve sharpness and natural detail in skin, hair, fabric, furniture; remove pixelation and compression artifacts. Do not change the people or turn them into different models. No text, logos, watermarks, artificial skin smoothing or oversharpening. This is an enhancement of an existing illustrative photo.

### images/support-03-hq.png

Source: images/_original/feature.png

Prompt:

> Image edit / restoration for existing Japanese school website. Extract and restore ONLY the THIRD photograph under section 03: two Japanese women, left in blue cardigan holding a white notebook, right in a grey jacket over white top, in a bright interior near windows. Landscape 1536x1024. Preserve their faces, clothes and arrangement. Output one standalone full-bleed high-resolution PHOTO, not a page screenshot or collage. Remove ALL graphic overlays, ALL Japanese text, numbers, badges, framing, rounded corners and page backgrounds. Reconstruct natural photo background where needed. Improve sharpness and natural detail in skin, hair, fabric, furniture; remove pixelation and compression artifacts. Do not change the people or turn them into different models. No text, logos, watermarks, artificial skin smoothing or oversharpening. This is an enhancement of an existing illustrative photo.

### images/support-04-hq.png

Source: images/_original/feature.png

Prompt:

> Image edit / restoration for existing Japanese school website. Extract and restore ONLY the FOURTH photograph under section 04: two young Japanese men on a sofa discussing an open laptop, left in black shirt, right in rust-colored overshirt, bright blinds and green plant behind. Landscape 1536x1024. Preserve their faces, clothes, poses and arrangement. Output one standalone full-bleed high-resolution PHOTO, not a page screenshot or collage. Remove ALL graphic overlays, ALL Japanese text, numbers, badges, framing, rounded corners and page backgrounds. Reconstruct natural photo background where needed. Improve sharpness and natural detail in skin, hair, fabric, furniture; remove pixelation and compression artifacts. Do not change the people or turn them into different models. No text, logos, watermarks, artificial skin smoothing or oversharpening. This is an enhancement of an existing illustrative photo.
