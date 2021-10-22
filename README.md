# swords-n-magic-and-maps

Fan creation for the game [Swords n Magic and Stuff](https://store.steampowered.com/app/810040/Swords_n_Magic_and_Stuff/)

The purpose of this project is to create a custom map with labels to easily find different resources and NPCs.

https://implodingduck.github.io/swords-n-magic-and-maps/

## Local Setup
```
conda create -n gdal
conda activate gdal
conda install -c conda-forge gdal
gdal2tiles.py swords-n-magic-and-maps.tif ./app/public/tiles -p raster 
```

## Resources
* https://store.steampowered.com/app/810040/Swords_n_Magic_and_Stuff/
* https://dev.to/maj07/tutorial-react-leaflet-d65