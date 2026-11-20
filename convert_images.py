
from PIL import Image
from pathlib import Path

# Use the current project folder, without typing its Arabic path
folder = Path(__file__).resolve().parent / "images"

files = [
    "imagesloqma-preview.png",
    "mihwar-preview.png",
    "next-preview.png",
    "profile1.png",
]

for filename in files:
    source = folder / filename

    if not source.exists():
        print(f"NOT FOUND: {filename}")
        continue

    destination = source.with_suffix(".webp")

    with Image.open(source) as img:
        img.save(destination, "WEBP", quality=85, method=6)

    old_size = source.stat().st_size / 1024
    new_size = destination.stat().st_size / 1024
    reduction = (1 - new_size / old_size) * 100

    print(f"\n{filename}")
    print(f"PNG:  {old_size:.1f} KB")
    print(f"WebP: {new_size:.1f} KB")
    print(f"Reduced: {reduction:.1f}%")

print("\nConversion completed!")
