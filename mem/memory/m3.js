
SOUTH

Lat max	42.646396
Lat min	42.637936
Long max	-71.355322
Long max	-71.3282


NORTH
Lat max 42.660481
Lat min	42.651581
Long max	-71.32983
Long min	-71.31996

EAST (there is overlap with north giving preference
to north, need at least one more zone to distinguish
or point in poly test)

Lat max	42.654989
Lat min	42.647793
Long max	-71.302107
Long max	-71.32982
* just east of north's max	

south_lat = range(42637936,42646396)
south_lon = range(-71355322,-71328200)

north_lat = range(42651581,42660481)
north_lon = range(-7132983,-7131996)

east_lat = range(42654989,42647793)
east_lon = range(-71302107,-71329820)


#check south first start with lat
if 42.637936 <= lat <= 42.646396:
	if -71.355322 <= lon <= -71.3282
		UMLlocation = "SOUTH"

#now north
if 42.651581 <= lat <= 42.660481:
	if -71.32983 <= lon <= -71.31996
		UMLlocation = "NORTH"
