from pathlib import Path

from PIL import Image


ROOT = Path(r"c:\Users\HP\OneDrive\Documents\Aquilagalaxy Solutions\indico-construction-building-html-template")
SOURCE = ROOT / "img" / "aquilagalaxy-logo.jpeg"
TARGET = ROOT / "img" / "aquilagalaxy-logo-clean.png"

TRANSPARENT = (255, 255, 255, 0)


def is_background(r, g, b, threshold=215):
    return r > threshold and g > threshold and b > threshold


def main():
    image = Image.open(SOURCE).convert("RGBA")
    pixels = image.load()
    width, height = image.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if is_background(r, g, b):
                pixels[x, y] = TRANSPARENT

    bbox = image.getbbox()
    if bbox:
        image = image.crop(bbox)

    padded = Image.new("RGBA", (1200, 360), TRANSPARENT)
    logo = image.copy()
    logo.thumbnail((1100, 300), Image.Resampling.LANCZOS)
    x = (padded.width - logo.width) // 2
    y = (padded.height - logo.height) // 2
    padded.alpha_composite(logo, (x, y))
    padded.save(TARGET)

    print(f"Saved: {TARGET}")


if __name__ == "__main__":
    main()
