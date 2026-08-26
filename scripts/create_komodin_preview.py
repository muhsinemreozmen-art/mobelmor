from PIL import Image

# Let's inspect p11_3 (the komodin photo from the actual shoot)
im = Image.open("assets/minegolden_p11_3.jpg")
print(f"Original p11_3 size: {im.size}")

# Let's crop nicely around the komodin and LED panel if desired, or save as a preview
w, h = im.size
# Crop focused on the nightstand
cropped = im.crop((int(w * 0.25), int(h * 0.05), int(w * 0.95), int(h * 0.95)))
cropped.save("assets/zen_komodin_studio_crop.webp", "WEBP", quality=95)
print("Saved assets/zen_komodin_studio_crop.webp")
