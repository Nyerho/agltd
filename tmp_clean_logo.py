from pathlib import Path

from PIL import Image


ROOT = Path(r"c:\Users\HP\OneDrive\Documents\Aquilagalaxy Solutions\indico-construction-building-html-template")
source = ROOT / "img" / "Aquilagalaxy logo.jpg (1).jpeg"
output = ROOT / "img" / "aquilagalaxy-logo-clean.png"

img = Image.open(source).convert("RGBA")
pixels = img.load()
width, height = img.size

turquoise = (25, 198, 207, 255)
white = (255, 255, 255, 255)

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]

        # Remove near-white background.
        if r > 232 and g > 232 and b > 232:
            pixels[x, y] = (255, 255, 255, 0)
            continue

        brightness = (r + g + b) / 3
        color_span = max(r, g, b) - min(r, g, b)

        # Keep brighter interior details white and force everything else to turquoise.
        if brightness > 170 and color_span < 120:
            pixels[x, y] = white
        else:
            pixels[x, y] = turquoise

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

canvas = Image.new("RGBA", (1200, 360), (255, 255, 255, 0))
logo = img.copy()
logo.thumbnail((1100, 300), Image.Resampling.LANCZOS)
x = (canvas.width - logo.width) // 2
y = (canvas.height - logo.height) // 2
canvas.alpha_composite(logo, (x, y))
canvas.save(output)

print(output)
