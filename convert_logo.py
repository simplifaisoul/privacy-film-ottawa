from PIL import Image

# Open the existing favicon
img = Image.open(r'c:\Users\mrads\.gemini\antigravity\privacy-film-ottawa\public\favicon.png')

# Convert RGBA to RGB if needed (PDF doesn't support transparency well)
if img.mode == 'RGBA':
    # Create white background
    background = Image.new('RGB', img.size, (255, 255, 255))
    background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
    img = background

# Resize to high resolution (10 inches at 300 DPI = 3000 pixels)
img = img.resize((3000, 3000), Image.Resampling.LANCZOS)

# Save as PDF with 300 DPI
img.save(r'c:\Users\mrads\.gemini\antigravity\privacy-film-ottawa\Privacy_Film_Ottawa_Logo.pdf', 
         'PDF', 
         resolution=300.0,
         quality=100)

print("PDF created successfully!")
