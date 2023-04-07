import cv2
from collections import Counter
import random
import warnings
warnings.filterwarnings('ignore')

def findDominantColor(img,  error_range=50):
    # Get the dimensions of the image
    height, width, _ = img.shape

    # Create a list to store all the pixel values
    allPixels = []

    # Loop through each pixel in the image and add it to the list
    for y in range(height):
        for x in range(width):
            pixel = tuple(map(int, img[y, x]))
            allPixels.append(pixel)

    # Count the frequency of each pixel value
    pixel_freq = Counter(allPixels)

    # Get the 5 most common pixel values and their frequencies
    most_common_pixels = pixel_freq.most_common(1)

    #most_common_pixel's color
    r,g,b = most_common_pixels[0][0]   

    #Calculating the hex of most_common_pixel
    color_hex = '#{0:02x}{1:02x}{2:02x}'.format(r, g, b)
    
    # Calculate complementary color and convert to hex
    comp_r, comp_g, comp_b = 255 - r, 255 - g, 255 - b
    comp_hex = '#{0:02x}{1:02x}{2:02x}'.format(comp_r, comp_g, comp_b)
    
    # Calculate the range of complementary colors
    min_comp_r, min_comp_g, min_comp_b = max(0, comp_r - error_range), max(0, comp_g - error_range), max(0, comp_b - error_range)
    max_comp_r, max_comp_g, max_comp_b = min(255, comp_r + error_range), min(255, comp_g + error_range), min(255, comp_b + error_range)
    
    # Convert the extreme complementary colors to hex
    min_extreme = '#{0:02x}{1:02x}{2:02x}'.format(min_comp_r, min_comp_g, min_comp_b)
    max_extreme = '#{0:02x}{1:02x}{2:02x}'.format(max_comp_r, max_comp_g, max_comp_b)
    
    return (color_hex, (min_extreme, comp_hex, max_extreme))