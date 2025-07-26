
from PIL import Image, ImageDraw, ImageFont
import random

# Create a simple procedural background
def create_tech_background(width=1200, height=600):
    # Create image with blue gradient
    img = Image.new('RGB', (width, height), color='#f0f4f8')
    draw = ImageDraw.Draw(img)
    
    # Add gradient effect
    for y in range(height):
        alpha = y / height
        color = (
            int(240 + (59 - 240) * alpha),
            int(244 + (130 - 244) * alpha), 
            int(248 + (246 - 248) * alpha)
        )
        draw.line([(0, y), (width, y)], fill=color)
    
    # Add some geometric shapes
    for _ in range(20):
        x = random.randint(0, width)
        y = random.randint(0, height)
        size = random.randint(20, 100)
        draw.ellipse([x, y, x+size, y+size], fill='#e0e7ff', outline='#3b82f6')
    
    return img

# Generate and save
img = create_tech_background()
img.save('public/images/hero-generated.jpg', 'JPEG', quality=95)
print('Generated: public/images/hero-generated.jpg')
