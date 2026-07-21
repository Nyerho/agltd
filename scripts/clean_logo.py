from pathlib import Path

from PIL import Image


ROOT = Path(r"c:\Users\HP\OneDrive\Documents\Aquilagalaxy Solutions\indico-construction-building-html-template")
SOURCE = ROOT / "img" / "Aquilagalaxy logo.jpg (1).jpeg"
TARGET = ROOT / "img" / "aquilagalaxy-logo-clean.png"

TURQUOISE = (25, 198, 207, 255)
WHITE = (255, 255, 255, 255)
TRANSPARENT = (255, 255, 255, 0)


def is_background(r, g, b):
    return r > 215 and g > 215 and b > 215


def is_white_detail(r, g, b):
    brightness = (r + g + b) / 3
    color_span = max(r, g, b) - min(r, g, b)
    return brightness > 172 and color_span < 125


def main():
    image = Image.open(SOURCE).convert("RGBA")
    pixels = image.load()
    width, height = image.size

    # First pass: remove the light background and reduce the mark to turquoise and white only.
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if is_background(r, g, b):
                pixels[x, y] = TRANSPARENT
                continue

            if is_white_detail(r, g, b):
                pixels[x, y] = WHITE
            else:
                pixels[x, y] = TURQUOISE

    # Tight crop to the visible logo.
    bbox = image.getbbox()
    if bbox:
        image = image.crop(bbox)

    # Place the transparent logo on a predictable canvas for better header/footer sizing.
    padded = Image.new("RGBA", (1200, 360), TRANSPARENT)
    logo = image.copy()
    logo.thumbnail((1100, 300), Image.Resampling.LANCZOS)
    x = (padded.width - logo.width) // 2
    y = (padded.height - logo.height) // 2
    padded.alpha_composite(logo, (x, y))
    padded.save(TARGET)


if __name__ == "__main__":
    main()
