# Gallery image sources

The gallery combines five existing project photographs with three service illustrations generated using the built-in image generation tool on 2026-11-02. At the user's request, all gallery thumbnails and the image viewer use the label **Dokumentasi**, and filters group images by service category. The three generated images remain AI illustrations; their provenance is retained here and in each image's internal `source` field.

The original PNG files are committed in `public/images/`. `scripts/optimize-images.mjs` creates the responsive WebP variants before development or build.

Gallery images must show equipment and installations only, with no people, body parts, human characters, silhouettes, or human reflections.

## Generation prompts

### `public/images/gallery-pemeriksaan-ai-v2.png`

Use case: photorealistic-natural. Asset type: landscape 4:3 editorial service illustration photograph for an Indonesian residential water pump website gallery, labeled as AI illustration by the UI. Primary request: an equipment-only scene about water pump inspection with absolutely no humans or human characters. Show one compact blue residential water pump with closed motor cover, disconnected and securely resting on a dry low concrete service bench in a modest shaded Indonesian utility courtyard. Beside it, neatly place one adjustable wrench, a screwdriver and a small closed tool bag. Simple grey PVC pipes and an off-white textured plaster wall in the background, a little tropical greenery at one edge. Medium close-up from a slightly elevated three-quarter angle; pump and tools occupy the center of the frame with room for 4:3 cropping. Soft natural daylight, authentic metal and concrete textures, restrained navy blue and warm grey tones, realistic practical scale, visually coherent with domestic plumbing service photos. Equipment only: no person, no technician, no face, no body, no hands, no arms, no human silhouettes, no human reflections, no photos or graphics of people, no mascot, no text, no branding, no logo, no watermark. Generic service illustration, not an actual completed company job or a technical instruction diagram.

### `public/images/gallery-instalasi-ai-v1.png`

Use case: photorealistic-natural. Asset type: landscape 4:3 editorial service illustration photo for an Indonesian domestic water service website, captioned as AI illustration by the UI. A clean, believable compact residential installation: small blue booster water pump securely on a low concrete base in a shaded Indonesian utility courtyard, tidy grey PVC inlet and outlet pipe runs, sensible brass unions and red shutoff valves, a compact grey pressure vessel, neatly protected electrical cabling, off-white textured plaster wall and grey tiled floor, one tropical plant at edge. Natural soft daylight, realistic material detail, not an unreal luxury showroom, medium wide composition with entire assembly centered for crop. No people, no diagrams, no text, no labels, no brand logos, no watermark. Generic conceptual installation, not a certified technical diagram or actual company project.

### `public/images/gallery-filter-ai-v1.png`

Use case: photorealistic-natural. Asset type: landscape 4:3 service gallery illustration photograph on an Indonesian water service website, AI illustration disclosed by UI. Show a believable domestic water filtration setup in a shaded modest Indonesian home's utility area: two transparent filter housings with blue mounting heads and visible pale filter cartridges, securely attached to a wall bracket, connected to simple grey PVC pipes with neat fittings and a blue shutoff valve, tiled pale-grey wall and natural daylight from the left. Medium close up, material detail, realistic glass and plastic with gentle reflections, clean practical installation, subtle blue and neutral palette. Frame the actual filtration equipment as the focal point, leave breathing room for cropping. No human, no text, no labels, no branding, no logos, no watermark. A generic illustration, not evidence of an actual job or a promised filtration result.

