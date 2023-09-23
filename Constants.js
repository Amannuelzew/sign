const notAllowed = [
  "nooverturn",
  "noparkbothside",
  "closed1",
  "two_way_pull",
  "no_truks",
  "no_hazard_car",
  "no_park_end",
  "distance_to_car",
  "no_car_width",
  "hand_cart",
  "aimal_drawn",
  "minispal_area",
  "close_to_all_motors",
  "no_this_car_weight",
  "no_this_car_length",
  "no_cars1",
  "width_restriction",
  "height_restriction",
  "closed_for_all",
  "no_motorcycles",
  "no_horns",
  "speed_limit",
  "no_lorries",
  "end_of_all_restrictions",
  "end_no_overtake",
  "axle_weight_limit",
  "no_park1",
  "weight_limit",
  "customs",
  "no_cycles",
  "no_cars",
  "no_pedestrians",
  "no_overtake",
  "no_right_turn",
  "no_left_turn",
  "no_u_turn1",
  "no_u_turn",
  "closed",
  "no_park",
].reverse();
const mandatory = [
  "cycle_pedisterian",
  "right_side",
  "left_side",
  "left_and_right",
  "speedpermitedend",
  "speedpermited",
  "pedistonly",
  "keep_left",
  "keep_right",
  "track_allowed",
  "allowed_hazard_car",
  "turn_only_right",
  "turn_only_left",
  "allowed_cycles",
  "allowed_right_turn",
  "allowed_left_turn",
  "straight_and_right",
  "straight_and_left",
  "allowed_round_about",
].reverse();
const warning = [
  "flagger",
  "atwork",
  "deer",
  "school",
  "pedestrian",
  "bicycle",
  "road_lead_to_rever",
  "swing_brigde",
  "pavment_end",
  "pavment_begin",
  "rail_cross_road",
  "rail_cross_road1",
  "cross_road",
  "survay",
  "y_intersection",
  "side_road",
  "yild_sign",
  "stop_sign",
  "divid_road_end",
  "divid_road",
  "play_ground",
  "lory",
  "fire_fighting",
  "winding_road",
  "machiery_ahead",
  "disabled",
  "wild_animal",
  "congestion_ahead",
  "other_danger",
  "tarin_ahead",
  "cross_oneway_road",
  "to_oneway",
  "strong_wind",
  "signal",
  "barrier_gate1",
  "barrier_gate",
  "t_junction",
  "low_lay_aircarft",
  "cattles",
  "zebra_road",
  "uneven_road",
  "two_way_traffic",
  "takecare_pedestrians",
  "take_cycles",
  "steep_hill_up",
  "steep_hill_down",
  "speed_bump",
  "sheeps",
  "round_about",
  "rood_narrow_right",
  "rood_narrow_left",
  "rock_falling_right",
  "rock_falling_left",
  "loose_stones",
  "high_suface_road",
  "dangerous_intersection_side_roads",
  "dangerous_intersection_from_right1",
  "dangerous_intersection_from_right",
  "dangerous_intersection_from_left1",
  "dangerous_intersection_from_left",
  "dangerous_intersection",
  "man_work_ahead",
  "slippery_road",
  "left_reverse_bend",
  "right_reverse_bend",
  "school_arround",
  "narrow_rood",
  "narrow_bridge",
  "take_right_turn",
  "take_left_turn",
].reverse();
const priority = [
  "give_way",
  "stop1",
  "priority_on_incom_traffic",
  "stop",
  "priority_road_end",
  "priority_road",
].reverse();
const body = [
  "tyre",
  "spring",
  "handbreak",
  "fuse",
  "differential",
  "body",
  "balestra",
  "clutches",
  "camshaft",
  "gearchangera",
  "gearchangerm",
  "sidemirror",
  "sparkplug",
  "enginfun",
  "brakes",
  "dashboard",
  "radiator",
  "carburetor",
  "battery",
  "piston",
].reverse();
const information = [
  "yellowlight",
  "two_cars_4",
  "yellowflashlight",
  "two_cars_3",
  "redyellowlight",
  "two_cars_2",
  "redlight",
  "two_cars_1",
  "redflashlight",
  "greenlight",
  "stoping",
  "breaking",
  "rightturn",
  "leftturn",
  "roundabout",
  "timetostop",
  "timetogo",
  "pedastergo",
  "traficlight1",
  "pedasterstop",
  "traficlight",
  "highway_crossin6",
  "road_markings7",
  "highway_crossin5",
  "road_markings6",
  "highway_crossing4",
  "road_markings5",
  "highway_crossing3",
  "road_markings4",
  "direction_plate2",
  "road_markings3",
  "direction_plate1",
  "road_markings2",
  "direction",
  "road_markings1",
  "distance_idicator",
  "speed_limit3",
  "speed_limit2",
  "speed_limit1",
  "first_aid",
  "park_here",
  "no_road_ahead",
  "no_road_right",
  "no_road_left",
  "fuel",
  "phone",
  "restorant",
  "parkforcycle",
  "parkoneside",
  "bending",
  "parkboth",
  "hotel",
  "hospital",
  "coffee",
].reverse();
const plate = [
  "sm",
  "or",
  "hr",
  "dr",
  "beg",
  "am",
  "supportc",
  "supprt",
  "auc",
  "au",
  "unc",
  "un",
  "cdeplomat",
  "police",
  "special",
  "temp",
  "tempo",
  "ngo",
  "gov",
  "busness",
  "personal",
  "taxi",
].reverse();
const map = new Map([
  [
    "no_park",
    "ይህ ምልክት በዚህ ቦታ መኪና አቁሞ መሄድ (ፓርክ ማድረግ) ክልክል መሆኑን የሚገልፅ ነው። This sign indicates that parking is prohibited in this area.",
  ],

  [
    "closed",
    "ይህ ምልክት በእጅ ለሚገፉትም ጭምር ለማንኛውም ተሽከርካሪ ከአንድ አቅጣጫ የተዘጋ መንገድ። Closed to all vehicles including handcarts (one way road)",
  ],

  [
    "no_u_turn",
    "ይህ ምልክት በቀኝ በኩል ወደኋላ ዞሮ መመለስ የተከለከለ ነው። This sign is forbidden U-turn to the right",
  ],

  [
    "no_u_turn1",
    "ይህ ምልክት በስተግራ በኩል ወደኋላ ዞሮ መመለስ የተከለከለ ነው። This sign is forbidden U-turn to the left",
  ],

  [
    "no_left_turn",
    "ይህ ምልክት ወደግራ መታጠፍ የተከለከለ ነው። This sign is prohibited to turn left.",
  ],

  [
    "no_right_turn",
    "ይህ ምልክት ወደ ቀኝ መታጠፍ ክልክል ነው። This sign is prohibited to turn right.",
  ],

  [
    "no_overtake",
    "ይህ ምልክት ከሁለት እግር በላይ ያላቸው የሞተር ተሽከርካሪዎች መቅደም የተከለከለ ነው። No overtaking of motor vehicles on move than two wheels",
  ],

  ["no_pedestrians", "ይህ ምልክት ለእግረኞች የተከለከለ። Closed to Pedestrians "],

  [
    "no_cars",
    "ይህ ምልክት ከሁለት እግር በላይ ላላቸው የሞተር ተሽከርካሪዎች የተከለከለ። Closed to motor vehicles on more than two wheels",
  ],

  [
    "no_cycles",
    "ይህ ምልክት ብስክሌት እያሽከረከሩ ማለፍ የተከለከለ ነው። Riding a bicycle is prohibited.",
  ],

  ["customs", "ይህ ምልክት ቁም የጉምሩክ መሥሪያ ቤት። Stop! Customs office."],

  [
    "weight_limit",
    "ይህ ምልክት ጠቅላላ ክብደቱ በምልክቱ ላይ ከተመለከተው በላይ ለሆነ የጭነት ተሽከርካሪ የተከለከለ። Closed to truck of total weight above the weight indicated on the sign",
  ],

  [
    "no_park1",
    "ይህ ምልክት ይህ ምልክት ካለበት ጀምሮ እስከሚቀጥለው መስቀለኛ መንገድ ወይም 'መጨረሻ' ከሚለው ቃል ጋር ቀጥሎ የሚገኝ የዚህ ዓይነት ምልክት እስከአለበት ድረስ በመዘግየት ለማቆም ያልተፈቀደ ቦታ። No parking from this sign to the next intersection, or to the next sign of this kind with the inscription 'End'",
  ],

  [
    "axle_weight_limit",
    "ይህ ምልክት የአክስሉ ጭነት በምልክቱ ላይ ከተመለከተው ጭነት በላይ ለሆነ ተሽከርካሪ የተከለከለ። Closed to vehicles where the load on any one axle exceeds the load indicated on the sign ",
  ],

  [
    "end_no_overtake",
    "ይህ ምልክት እንደሚያመላክተው እግድ የተደረገበት ክልል መጨረሻ። End of area of restriction as indicated on sign ",
  ],

  [
    "end_of_all_restrictions",
    "ይህ ምልክት የከተማ ክልል ወሰን መጨረሻ። End of Municipal area.",
  ],

  [
    "no_lorries",
    "ይህ ምልክት ባለበት የጭነት መኪናዎች ማለፍ የተከለከለ ነው። Passing trucks is prohibited.",
  ],

  [
    "speed_limit",
    "ይህ ምልክት የፍጥነት የተወሰነበት ክልል ፣ በኪሎ ሜትር በምልክቱ ላይ ከተመለከተው ፍጥነት በላይ የተከለከለ። Area of restricted speed: speeds exceeding that indicated on the sign in kilometers",
  ],

  [
    "no_horns",
    "ይህ ምልክት የጥሩምባ ድምጽ ማሰማት የተከለከለበት። Prohibition of use of audible warning appliances ",
  ],

  ["no_motorcycles", "ይህ ምልክት ለሞተር ብስክሌት የተከለከለ። Closed to motor cycles "],

  [
    "closed_for_all",
    "ይህ ምልክት በእጅ ለሚገፉትም ጭምር ለማንኛውም ተሽከርካሪ ከሁለቱም አቅጣጫ የተዘጋ መንገድ። Closed to all vehicles including handcarts",
  ],

  [
    "height_restriction",
    "ይህ ምልክት ጠቅላላ ከፍታው በምልክቱ ላይ ከተመለከተው በላይ ለሆነ ተሽከርካሪ ማለፍ የተከለከለ ነው። Closed to vehicles of a total height exceeding that indicated in meter on the sign",
  ],

  [
    "width_restriction",
    "ይህ ምልክት በሰሌዳው ላይ የተመለከተው የጎን ስፋት በላይ ያለው መኪና ማለፍ የተከለከለ መንገድ ነው። Passing a car over the width of the sidewalk is prohibited.",
  ],

  [
    "no_cars1",
    "ይህ ምልክት ለመኪናዎች ያልተፈቀደ መንገድን የሚያመለክት ነው። Indicates unauthorized access to cars.",
  ],

  [
    "no_this_car_length",
    "ይህ ምልክት ጠቅላላ እርዝመቱ በምልክቱ ላይ ከተጠቀሰው ሜትር በላይ ለሆኑ ተሽከርካሪ ወይም የተቀጣጠሉ ተሽከርካሪዎች የተከለከለ። No vehicle or combination of vehicles over shown length",
  ],

  [
    "no_this_car_weight",
    "ይህ ምልክት ጠቅላላ ክብደቱ በምልክቱ ላይ ከተመለከተው በላይ ለሆነ ተሽከርካሪ የተከለከለ። Closed to vehicle a total weight above the weight indicated on the sign",
  ],

  [
    "close_to_all_motors",
    "ይህ ምልክት ለባለ ሞተር ተሽከርካሪዎች የተከለከለ። Closed to motor vehicles ",
  ],

  ["minispal_area", "ይህ ምልክት የከተማ ክልል። Municipal area"],

  [
    "aimal_drawn",
    "ይህ ምልክት በእንሰሣት ለሚሣቡ ተሽከርካሪዎችና ለእንሰሶች የተከለከለ። Closed to animal-drawn vehicles and to animals ",
  ],

  ["hand_cart", "ይህ ምልክት በእጅ ለሚገሩ ተሽከርካሪዎች የተከለከለ። Closed to handcarts "],

  [
    "no_car_width",
    "ይህ ምልክት ጠቅላላ ስፋቱ በሜትር በምልክቱ ላይ ከተመለከተው በላይ ለሆነ ተሽከርካሪ የተከለከለ። Closed to vehicle of a total width exceeding that indicated in meters on the sign",
  ],

  [
    "distance_to_car",
    "ይህ ምልክት በምልክቱ ላይ ከሚታየው ባነሰ እርቀት ተጠግቶ ማሽከርከር ክልክል ነው። Driving of vehicles less than over shown length apart prohibited",
  ],

  [
    "no_park_end",
    "ይህ ምልክት ካለበት ጀምሮ እስከሚቀጥለው መስቀለኛ መንገድ ወይም 'መጨረሻ' ከሚለው ቃል ጋር ቀጥሎ የሚገኝ የዚህ ዓይነት ምልክት እስከአለበት ድረስ ለአጭር ሆነ ለረጅም ጊዜ ለማቆም የተከለከለ። No stopping and parking from this sign to the next intersection, or to the next sign of this kind with the inscription ' End' ",
  ],

  [
    "no_hazard_car",
    "ይህ ምልክት አደገኛ ፍንዳታ የሚያስከትል ጭነት ለጫነ ተሽከርካሪ የተከለከለ። Closed to hazardous cargo",
  ],

  ["no_truks", "ይህ ምልክት ለጭነት ተሽከርካሪ የተከለከለ። closed to truck "],

  ["two_way_pull", "ይህ ምልክት የተሽከርካሪ መጐተቻ ክልል። Tow away zone plaque"],

  [
    "closed1",
    "ይህ ምልክት ባለበት መንገዱ ወደፊት ለፊት የማይቀጥል ስለሆነ ማልፍ የተከለከለ ነው የሚል ምልክት ነው። No entry or restricted area ahead and no traffic is allowed",
  ],

  [
    "noparkbothside",
    "ይህ ምልክት ቀስቱ ወደ ሚያመለክተው በሁለቱም አቅጣጫ ተሽከርካሪን ማቆም የተከለከለ ነው። Parking on both directions is not allowed",
  ],

  [
    "nooverturn",
    "ይህ ምልክት መቅደም የተከለለከለ ነው። Overtaking is not allowed at this point",
  ],
  [
    "allowed_round_about",
    "ይህ ምልክት በዚህ ቦታ አደባባይ የለ መሆኑን የሚገልፅ ምልክት ነው። This sign indicates that there is roundabout here.",
  ],

  [
    "straight_and_left",
    "ይህ ምልክት ቀጥታ የሚያልፍ እና ወደ ግራ የሚታጠፍ መንገድን የሚያሳይ ምልክት ነው። A sign that shows a straight path and a left turn.",
  ],

  [
    "straight_and_right",
    "ይህ ምልክት ቀጥታ የሚያልፍ እና ወደ ቀኝ የሚታጠፍ መንገድን የሚያሳይ ምልክት ነው። A sign that shows a straight path and a right turn",
  ],

  [
    "allowed_left_turn",
    "ይህ ምልክት ወደ ግራ የሚታጠፍ መንገድን የሚያሳይ ምልክት ነው። A sign indicating the path to the left.",
  ],

  [
    "allowed_right_turn",
    "ይህ ምልክት ወደ ቀኝ የሚታጠፍ መንገድን የሚያሳይ ምልክት ነው። A sign indicating the path to the right.",
  ],

  [
    "allowed_cycles",
    "ይህ ምልክት የብስክሌት መጓዣን የሚያሳይ ምልክት ነው። A sign indicating a bicycle ride.",
  ],

  [
    "turn_only_left",
    "ይህ ምልክት ወደ ግራ የሚታጠፍ መንገድን የሚያሳይ ምልክት ነው። A sign indicating the path to turn left.",
  ],

  [
    "turn_only_right",
    "ይህ ምልክት ወደ ቀኝ የሚታጠፍ መንገድን የሚያሳይ ምልክት ነው። A sign indicating the path to turn right.",
  ],

  [
    "allowed_hazard_car",
    "ይህ ምልክት አደገኛ ፍንዳታ የሚያስከትል ጭነት ለጫነ ተሽከርካሪ የተፈቀደበት መንገድ። Hazardous cargo road ",
  ],

  ["track_allowed", "ይህ ምልክት የጭነት ተሽከርካሪ መተላለፊያ። Truck's road "],

  ["keep_right", "ይህ ምልክት የደሴቱን ቀኝ ያዝ። Keep right "],

  ["keep_left", "ይህ ምልክት የደሴቱን ግራ ያዝ። Keep left "],

  ["pedistonly", "ይህ ምልክት ለእግረኞች ብቻ ለማለፍ የተፈቀደ። Route for pedestrians only"],

  [
    "speedpermited",
    "ይህ ምልክት በመንገዱ ላይ የተፈቀደ አነስተኛ ፍጥነት መጠን። Minimum speed permitted in KM per hour",
  ],

  [
    "speedpermitedend",
    "ይህ ምልክት በመንገዱ ላይ የተፈቀደ አነስተኛ ፍጥነት መጨረሻ። End of minimum speed permit",
  ],

  [
    "left_and_right",
    "ተሽከርካሪዎች ወደ ተመሳሳይ መድረሻ ለመጓዝ በሁለቱም በኩል ሊያልፉ ይችላሉ። Vehicles may pass either side to reach same destination.",
  ],

  ["left_side", "በግራ በኩል ያሽከርክሩ። Keep left side."],

  ["right_side", "በቀኝ በኩል ያሽከርክሩ። Keep right side."],

  [
    "cycle_pedisterian",
    "የብስክሌት እና የእግረኛ መጓዣን የሚያመለክት። Segregated pedal cycle and pedestrian route.",
  ],
  [
    "take_left_turn",
    "ይህ ምልክት ወደግራ የሚታጠፍ መንገድ ስለሚያጋጥምህ የቀኝ ረድፍህን ይዘህ ተጠንቅቀህ አሽከርክር። You will encounter a sign that turns left, so grab your right row and drive carefully.",
  ],

  [
    "take_right_turn",
    "ይህ ምልክት ወደቀኝ የሚታጠፍ መንገድ ስለሚያጋጥምህ የቀኝ ረድፍህን ይዘህ አሽከርክር። Take your right lane, as this signal will cause you to turn right.",
  ],

  [
    "narrow_bridge",
    "ይህ ምልክት ጠባብ ድልድይ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ። Narrows bridge ahead, be careful",
  ],

  [
    "narrow_rood",
    "ይህ ምልክት በሁለቱም አቅጣጫ እየጠበበ የሚሄድ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር። Drive carefully, as you will encounter a narrow lane in both directions.",
  ],

  [
    "school_arround",
    "ይህ ምልክት ሕፃናት የሚበዙበት አካባቢ ስለሆነ በጥንቃቄ አሽከርክር። School crossing patrol ahead (some signs have amber lights which flash when children are crossing)",
  ],

  [
    "right_reverse_bend",
    "ይህ ምልክት መጀመሪያ ወደቀኝ ቀጥሎ ወደግራ የሚያስኬድ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ። Double bend first to left (turn right then to left)",
  ],

  [
    "left_reverse_bend",
    "ይህ ምልክት መጀመሪያ ወደግራ ቀጥሎ ወደቀኝ የሚያስኬድ ጠመዝማዛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር። Double bend first to left (turn left then to right)",
  ],

  [
    "slippery_road",
    "ይህ ምልክት የሚያንሸራትት መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ። You will encounter a slippery slope, so be careful and drive slow",
  ],

  [
    "man_work_ahead",
    "ይህ ምልክት መንገዱን የሚጠግኑ ሰራተኞች ስላሉ ፍጥነትህን በመቀነስ ተጠንቅቀህ ንዳ። This sign has workers on the road, so slow down and drive carefully.",
  ],

  [
    "dangerous_intersection",
    "ይህ ምልክት ወደፊት አደገኛ መስቀለኛ መተላለፊያ ስላለ ተጠንቅቃችሁ አሽከርክሩ ማለት ነው። This sign means drive carefully because there is a dangerous crossroads in the future",
  ],

  [
    "dangerous_intersection_from_left",
    "ይህ ምልክት ወደፊት ከግራ በኩል የሚገናኝ አደገኛ መንገድ ስላለ ተጠንቅቃችሁ አሽከርክሩ ማለት ነው። This sign indicates that there is a dangerous path to the left, so drive with caution.",
  ],

  [
    "dangerous_intersection_from_left1",
    "ይህ ምልክት ፊት ለፊትና ወደግራ ብቻ የሚያስኬድ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር። Drive carefully, as you will encounter a sign that faces only the front and the left.",
  ],

  [
    "dangerous_intersection_from_right",
    "ይህ ምልክት ወደፊት ከቀኝ በኩል የሚገናኝ አደገኛ መንገድ ስላለ ተጠንቅቃችሁ አሽከርክሩ ማለት ነው። This sign indicates that there is a dangerous path to the right, so drive with caution.",
  ],

  [
    "dangerous_intersection_from_right1",
    "ይህ ምልክት ወደቀኝና ፊት ለፊትና የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Drive carefully, as you will encounter a junction to bend to right and straight ahead",
  ],

  [
    "dangerous_intersection_side_roads",
    "ይህ ምልክት ባለ አራት አቅጣጫ መስቀለኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Drive carefully, as you will encounter this sign at a four-way intersection.",
  ],

  [
    "high_suface_road",
    "ይህ ምልክት የመንገዱ ዳር አደገኛ ስለሆነ ተጠንቅቀህ ንዳ። Drive carefully, dangerous on the side of the road.",
  ],

  [
    "loose_stones",
    "ይህ ምልክት የሚፈናጠሩ ጠጠሮች ያሉበት መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Drive carefully, as you will encounter loose stone on road",
  ],

  [
    "rock_falling_left",
    "ይህ ምልክት ወደፊት አደገኛ ናዳ ከበስተ ግር በኩል ስለሚያጋጥምህ ተጠንቅቀህ ንዳ ማለት ነው። This is a sign that you may be in danger of being hit by a danger of filling rocks on the left side.",
  ],

  [
    "rock_falling_right",
    "ይህ ምልክት ወደፊት አደገኛ ናዳ ከበስተ ቀኝ በኩል ስለሚያጋጥምህ ተጠንቅቀህ ንዳ ማለት ነው።This is a sign that you may be in danger of being hit by a danger of filling rocks on the right side",
  ],

  [
    "rood_narrow_left",
    "ይህ ምልክት ወደ ግራ በኩል እየጠበበ ስለሚሄድ ተጠንቅቀህ ንዳ። Drive carefully, as this signal is narrowing to the left.",
  ],

  [
    "rood_narrow_right",
    "ይህ ምልክት መንገዱ በስተቀኝ በኩል እየጠበበ ስለሚሄድ ተጠንቅቀህ ንዳ። Drive carefully, as this signal is narrowing to the right.",
  ],

  [
    "round_about",
    "ይህ ምልክት ወደ አደባባይ ስለተቃረብክ ተጠንቅቀህ አሽከርክር። As you approach a roundabout, drive carefully.",
  ],

  [
    "sheeps",
    "ይህ ምልክት ወደፊት እንስሳት ስላሉ በጥንቃቄ ይለፉ ማለት ነው። This sign means that there are animals in the future, so be careful.",
  ],

  [
    "speed_bump",
    "ይህ ምልክት ወደፊት የፍጥነት መገደቢያ ከፍያለ በመንገዱለይ የተሰራ ከፍታ ስላለ በጥንቃቄ ይለፉ ማለት ነው። This sign means that in the future, the speed limit will be higher than the highway, so pass carefully.",
  ],

  [
    "steep_hill_down",
    "ይህ ምልክት አደገኛ ቁልቁለት ስለሚያጋጥምህ ከባድ ማርሽ በማስገባት ተጠንቅቀህ ንዳ። Be careful and use heavy gear, as you are approaching a dangerous slope.",
  ],

  [
    "steep_hill_up",
    "ይህ ምልክት ወደፊት አደገኛ ዳገት ስለሚያጋጥምህ ከባድ ማርሽ በማስገባት ተጠንቅቀህ ንዳ ማለት ነው። This sign indicates that you may be facing a dangerous climb in the future. Use heavy gear",
  ],

  [
    "take_cycles",
    "ይህ ምልክት ወደፊት የብስክሌት ማለፊያ ስላለ በጥንቃቄ ይለፉ ማለት ነው። This sign means that there is a bicycle lane in the future, so be careful.",
  ],

  [
    "takecare_pedestrians",
    "ይህ ምልክት ወደፊት መንገደኛ በመኖሩ በጥንቃቄ ይለፉማለት ነው። This is a sign that there will be passengers in the future.",
  ],

  [
    "two_way_traffic",
    "ይህ ምልክት አንድ አቅጣጫ ብቻ በነበረው ለጊዜው በሁለቱም አቅጣጫ መተላለፍ ስለተፈቀደ ተጠንቅቀህ ንዳ። Drive cautiously, as this signal is temporarily allowed in both directions.",
  ],

  [
    "uneven_road",
    "ይህ ምልክት ወደፊት የተበላሸ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Be careful Uneven road in future",
  ],

  [
    "zebra_road",
    "ይህ ምልክት እግረኞች የሚያቋርጡበት መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር። Drive carefully, as you will encounter pedestrian crossings.",
  ],

  [
    "cattles",
    "ይህ ምልክት እንስሳት የሚያቋርጡበት መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Drive with caution, as you may encounter cattle cross paths ",
  ],

  [
    "low_lay_aircarft",
    "ይህ ምልክት ወደ ታች ዝቅ ብሎ አውሮፕላን ስለሚበር በጥንቃቄ ይለፉ ማለት ነው። This sign means that the plane is flying low, so you have to be careful.",
  ],

  [
    "t_junction",
    "ይህ ምልክት ወደግራና ወደቀኝ ብቻ የሚታጠፍ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። T-junction (Intersection to left and right. No straight road ahead). ",
  ],

  [
    "barrier_gate",
    "ይህ ምልክት መዝጊያ ያለው የባቡር ሐዲድ መስመር ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Level crossing with barrier or gate ahead",
  ],

  [
    "barrier_gate1",
    "ይህ ምልክት መዝጊያ የሌለው የባቡር ሐዲድ መስመር ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Level crossing without barrier or gate ahead",
  ],

  ["signal", "ይህ ምልክት የትራፊክ መብራት ስለተቃረበ ተጠንቅቀህ አሽከርክር። Traffic signals"],

  [
    "strong_wind",
    "ይህ ምልክት በመንገድ አግድም የሚነፍስ ሃይለኛ ንፋስ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Strong cross wind ",
  ],

  [
    "to_oneway",
    "ይህ ምልክት ባለሁለት መተላለፊያው መንገድ ስለሚያበቃ ተጠንቅቀህ እለፍ። Dual carriage-way ends",
  ],

  [
    "cross_oneway_road",
    "ይህ ምልክት ባለአንድ አቅጣጫ መንገድን ባለሁለት አቅጣጫ መንገድ ያቋርጠዋል። To way traffic crosses one way road ",
  ],

  [
    "tarin_ahead",
    "ይህ ምልክት የባቡር ሐዲድ ማቋረጫ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Railway crossing ",
  ],

  [
    "other_danger",
    "ይህ ምልክት ከፊት ለፊት አደገኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ። Other danger; plate indicates nature of danger",
  ],

  [
    "congestion_ahead",
    "ይህ ምልክት ወደፊት የትራፊክ መጨናነቅ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Traffic congestion ahead ",
  ],

  [
    "wild_animal",
    "ይህ ምልክት መንገዱን የሚያቋርጡ የዱር እንሰሳት ስለሚኖሩ ጥንቃቄ አድርግ። take care of, wild animals may cross the road",
  ],

  ["disabled", "ይህ ምልክት ማስጠንቀቂያ ስለአካል ጉዳተኞች። Attention disabled persons"],

  [
    "machiery_ahead",
    "ይህ ምልክት ወደፊት የእርሻ መሣሪያዎች አሉ (መንገዱን ያቋርጣሉ)። Farm machinery ahead/crossing",
  ],

  ["winding_road", "ይህ ምልክት ጠመዝማዛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Winding road"],

  [
    "fire_fighting",
    "ይህ ምልክት ወደፊት የእሳት አደጋ መከላከያ ጣቢያ አለ (የእሳት አደጋ መከላከያ ተሽከርካሪ ያቋርጣል)። Fire station ahead/fire fighting vehicle crossing",
  ],

  [
    "lory",
    "ይህ ምልክት ወደፊት የጭነት ተሽለርካሪዎች አሉ (መንገዱን ያቋርጣሉ)። Trucks ahead/crossing",
  ],

  ["play_ground", "ይህ ምልክት ወደፊት የህፃናት መጫወቻ ቦታ አለ። Play ground "],

  ["divid_road", "ይህ ምልክት መንገድ ለሁለት መከፈል የሚጀምርበት። Divided road begins "],

  ["divid_road_end", "ይህ ምልክት ለሁለት ተከፍሎ የነበረ መንገድ ማብቂያ። Divided road ends "],

  ["stop_sign", "ይህ ምልክት ቁም የሚል ምልክት ወደፊት አለ። Stop sign ahead "],

  ["yild_sign", "ይህ ምልክት ቅድሚያ ስጥ የሚል ምልክት ወደፊት አለ። Yield sign ahead "],

  [
    "side_road",
    "ይህ ምልክት በጐን በኩል ማዕዘናዊ ቅርፅ ሰርቶ የሚገናኝ መንገድ አለ። Side road (angled) ",
  ],

  ["y_intersection", "ይህ ምልክት Y ቅርፅ ያለው መገናኛ መንገድ። Y Intersection "],

  ["survay", "ይህ ምልክት መንገድ ቀያሽ አለ። Survey crew"],

  [
    "cross_road",
    "ይህ ምልክት ከባለ አራት አቅጣጫ መንገድ ትይዩ የባቡር ሀዲድ ማቋረጫ አለ። Parallel rail road crossing (cross road) ",
  ],

  [
    "rail_cross_road1",
    "ይህ ምልክት በጐን በኩል ከተገናኘው መንገድ ትይዩ የባቡር ሀዲድ ማቋረጫ መንገድ አለ። Parallel rail road crossing (side road)",
  ],

  [
    "rail_cross_road",
    "ይህ ምልክት T ቅርፅ ካለው መንገድ ትይዩ የባቡር ሀዲድ ማቋረጫ መንገድ አለ። Parallel rail road crossing (T intersection) ",
  ],

  [
    "pavment_begin",
    "ይህ ምልክት የአስፋልት መንገድ መጀመሪያ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Pavement begins",
  ],

  [
    "pavment_end",
    "ይህ ምልክት የአስፋልት መንገድ መጨረሻ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Pavement ends ",
  ],

  [
    "swing_brigde",
    "ይህ ምልክት ከፊት ለፊት ጉድጓድ ወይም ተከፋች ድልደይ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Opening or swing bridge ahead",
  ],

  [
    "road_lead_to_rever",
    "ይህ ምልክት ወደ ወንዝ ዳርቻ የሚወስድ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ ንዳ። Road leads to quay or river bank ",
  ],

  ["bicycle", "ይህ ምልክት የብስክሌት መሻገሪያ ቦታን አመላካች ምልክት ነው። Bicycle crossing sign"],

  [
    "pedestrian",
    "ይህ ምልክት የእግረኛ መሻገሪያ ቦታን አመላካች ምልክት ነው። Pedestrian warning sign",
  ],

  [
    "school",
    "ይህ ምልክት የትምህርት ቤት ተማሪዎች መሻገሪያ ቦታን አመላካች ምልክት ነው። School crossing warning sign",
  ],

  ["deer", "ይህ ምልክት የዱር እንሳ መኖራቸውን የሚያስጠነቅቅ አመላካች ምልክት ነው። Deer warning sign"],

  [
    "atwork",
    "ይህ ምልክት የግንባታ ሰራተኛ መኖሩን የሚያስጠነቅቅ አመላካች ምልክት ነው። Man at work warning sign",
  ],

  [
    "flagger",
    "ይህ ምልክት የመንገድ አስተላላፊ መኖሩን የሚያስጠነቅቅ አመላካች ምልክት ነው። Flagger ahead sign",
  ],
  ["priority_road", "ይህ ምልክት ቅድሚያ ያለው መንገድ። Priority road"],

  [
    "priority_road_end",
    "ይህ ምልክት ቅድሚያ ያለው መንገድ የሚለው ምልክት ትዕዛዝ መጨረሻ። End of priority road",
  ],

  [
    "stop",
    "ይህ ምልክት ከማለፍዎ በፊት ቆመህ ቅድሚያ ስጥ የሚል ግዴታ መሆኑን ያመለክታል። Stop, this sign restrict to give priority to others",
  ],

  [
    "priority_on_incom_traffic",
    "ይህ ምልክት ከወደፊት ለሚመጣ ተሽከርካሪ ቅድሚያ። Give priority to oncoming vehicles",
  ],

  [
    "stop1",
    "ይህ ምልክት ቁም ሲሆን ምልክቱ ባለበት ማንኛውም ተሽከርካሪ ከመስቀለኛ መንገድ ከመግባቱ በፊት መቆም አለበት። Stop! All vehicle will be brought to a complete Standstill before entering intersection ",
  ],

  ["give_way", "ይህ ምልክት ለተለላፊ ቅድሚያ ስጥ። Distance to 'Give Way' line ahead"],
  [
    "piston",
    "የመኪና መቂናጥ። Piston is a component of reciprocating engines, reciprocating pumps, gas compressors and pneumatic cylinders.",
  ],

  [
    "battery",
    "የመኪና ባትሪ። Battery is a rechargeable power source that supplies electric energy to an automobile.",
  ],

  [
    "carburetor",
    "የመኪና ካርቡሬተር። Carburetor is a device that blends air and fuel for an internal combustion engine.",
  ],

  [
    "radiator",
    "የመኪና ራዲያተር። Radiators are heat exchangers used to transfer thermal energy from one medium to another for the purpose of cooling and heating.",
  ],

  [
    "dashboard",
    "የመኪና ዳሽቦርድ። Dashboard is a control panel placed in front of the driver of an automobile, housing instrumentation and controls for operation of the vehicle.",
  ],

  [
    "brakes",
    "የመኪና ፍሬን። Brake is a mechanical device that inhibits motion by absorbing energy from a moving system",
  ],

  [
    "enginfun",
    "የመኪና ማቀዝቀዣ። Engine Fun is cooling fan that it allows the engine to maintain a constant temperature.",
  ],

  [
    "sparkplug",
    "የመኪና እሳት ፈንጣቂ። Spark Plug is a device for delivering electric current from an ignition system by an electric spark",
  ],

  [
    "sidemirror",
    "የመኪና የጎን መስተዋት። Side mirror is a mirror found on the exterior of motor vehicles for the purposes of helping the driver see areas behind and to the sides of the vehicle, outside of the driver's peripheral vision",
  ],

  [
    "gearchangerm",
    "የመኪና ማርሽ (ማንዋል)። Manual transmission is uses a driver-operated clutch engaged and disengaged by a foot pedal for regulating torque transfer from the engine to the transmission.",
  ],

  [
    "gearchangera",
    "የመኪና ማርሽ (አውቶማቲ)። Automatic transmission is uses a driver-operated clutch engaged and disengaged by a foot pedal for regulating torque transfer from the engine to the transmission.",
  ],

  [
    "camshaft",
    "የመኪና ካምሻፍት ወይም ክራንክሻፍት። Camshaft helps let the air/fuel mixture into the engine and get the exhaust out.",
  ],

  [
    "clutches",
    "የመኪና ፍሪሲዮን ዲስክ። Clutches used to transmits engine power to the gearbox, and allows transmission to be interrupted while a gear is selected to move off from a stationary position, or when gears are changed while the car is moving.",
  ],

  [
    "balestra",
    "የመኪና ሊፍት ስፕሪንግ ወይም ባሌስትራ ሲሆን እንደ ስፕሪንግ በወጣ ገባ መንገድ ላይ የሚፈጠርን ንቅናቄ በቶሎል ለመቆጣጠር ያገለግላል። This is car's Leaf Spring or Balestra, which is used to adjust the movement of car.",
  ],

  [
    "body",
    "የመኪና አካል ወይም ቦዲ የተሽከርካሪው የውጭ አካል ነው። The body is the outer part of the vehicle",
  ],

  [
    "differential",
    "ዲፍረንሻል በውስጡ የተለያዩ ጥርሶች ያሉት ሲሆን እንደ መንገዱ ሁኔታ የተለያየ ሀይል ለማስተላለፍ የሚያገለግል ነው። Differential has different teeth in it and is used to transmit different energy depending on the condition of the road.",
  ],

  [
    "fuse",
    "ፊውዝ የተመጣጠነ የኤሌክትሪክ ሃይል ለማስተላለፍ የተዘጋጀ ሲሆን በዝቶ ሲመጣ የመክናው ክፍሎች እንዳይቃጠሉ የሚያድን ነው። The fuse is designed to provide adequate electrical power and to prevent overheating and damage of units in the car.",
  ],

  [
    "handbreak",
    "የመኪና የእጅ ፍሬን ተሽከርካሪውን ለረጅም ወይም ለአጭር ጊዜ ለማቆም የሚያገለግል ነው። Car hand brakes are used to stop the vehicle for a long or short period of time.",
  ],

  [
    "spring",
    "የመኪና ኮይል ስፕሪንግ እንደ ስፕሪንግ በወጣ ገባ መንገድ ላይ የሚፈጠርን ንቅናቄ በቶሎል ለመቆጣጠር ያገለግላል። Car coil Spring is used as a spring to control the movement of car.",
  ],

  [
    "tyre",
    "የመኪና ጎማ የመኪናውን ክብደት የሚሽከም ችና ከሞተር በሀይል አስተላላፊዎች በኩል የሚመጣን ሃይል ተቀብሎ በመዞር መኪናውን የሚያንቀሳቅስ ክፍል ነው። A car tire is a part of the car that carries the weight of the car and receives the power from the motor transmitters.",
  ],
  [
    "coffee",
    "ይህ ምልክት መዝናኛ ወይም ቡና ቤት መኖሩን የሚያመለክት። Light refreshment or snack bar",
  ],

  ["hospital", "ይህ ምልክት ሆስፒታል መኖሩን የሚያመለክት። Hospital this side"],

  ["hotel", "ይህ ምልክት ሆቴል መኖሩን የሚያመለክት። Hotel or resting place"],

  [
    "parkboth",
    "ይህ ምልክት ቀስቱ እንደሚያመለክተው ከሁለቱም አቅጣጫ የማቆሚያ ቦታ መኖሩን የሚያመለክት። Park both side",
  ],

  [
    "bending",
    "ይህ ምልክት ወደ ግራ የሚታጠፍ አደገኛ ኩርባ (ምልክቱ ሲዞር ወደ ቀኝ የሚታጠፍ አደገኛ ኩርባ)። Sharp deviation of route to left (to right if chevrons reversed) ",
  ],

  [
    "parkoneside",
    "ይህ ምልክት በቀስቱ አቅጣጫ የማቆሚያ ቦታ መኖሩን የሚያመለክት። Parking th the direction shown",
  ],

  [
    "parkforcycle",
    "ይህ ምልክት ለብስክሌቶች የማቆሚያ ቦታ መኖሩን የሚያመለክት። Parking place for Bicycles",
  ],

  ["restorant", "ይህ ምልክት ምግብ ቤት አለ። Restaurant "],

  ["phone", "ይህ ምልክት ቴሌፎን (ስልክ አለ)። Telephone "],

  ["fuel", "ይህ ምልክት የነዳጅ ማደያ ጣቢያ አለ። Fuel station "],

  ["no_road_left", "ይህ ምልክት ወደ ግራ የሚያስኬድ መንገድ የለም። No through road on left "],

  ["no_road_right", "ይህ ምልክት ወደ ቀኝ የሚያስኬድ መንገድ ነው። No through road on right "],

  ["no_road_ahead", "ይህ ምልክት ፊት ለፊት የሚያስኬድ መንገድ የለም። No through road ahead "],

  ["park_here", "ይህ ምልክት የማቆሚያ ቦታ ነው። Parking "],

  ["first_aid", "ይህ ምልክት የመጀመሪያ ዕርዳታ መስጫ ቦታ አለ። First aid station "],

  [
    "speed_limit1",
    "ይህ ምልክት ለአንድ ረድፍ ከተቀመጠው አነስተኛ ፍጥነት በላይ ማሽከርከርን የሚያስገድድ። Compulsory minimum speed to one lane",
  ],

  [
    "speed_limit2",
    "ይህ ምልክት በተለያየ ረድፍ ውስጥ ተፈፃሚ እንዲሆን የተቀመጠ የፍጥነት ወሰን። Speed limits applying to different lanes",
  ],

  [
    "speed_limit3",
    "ይህ ምልክት በተለያየ ረድፍ ውስጥ ተፈፃሚ እንዲሆን የተቀመጠ አነስተኛ ፍጥነት ወሰን። Compulsory minimum speed applying to different lanes",
  ],

  ["distance_idicator", "እርቀት ጠቋሚ የመረጃ ሠጪ ምልክት ነው። Distance Indicator"],

  ["road_markings1", "በአንድ አቅጣጫ የተቆራረጠ የመንገድ አካፋይ መስመር። Broken center line"],

  ["direction", "አቅጣጫ ጠቋሚ የመረጃ ሠጪ ምልክት ነው። Direction Indicator Signals"],

  [
    "road_markings2",
    "በምስል ላይ የተመለከተው መኪና ወደ ግራ መስመሩን በማቋረጥ መኪና መቅደም የሚቻልበት ምልክት ነው። May cross the line to overtake",
  ],

  [
    "direction_plate1",
    "የግራው መኪና መታጠፍ ብቻ ነገር ግን የመሃከሉ መታጠፍም ሆነ ቀጥ ብሎ ለማለፍ የሚቻልበት ምልክት ነው። The car on the left can turn left, the middle can turn go straight.",
  ],

  [
    "road_markings3",
    "ወደ ግራ መስመሩን ማቋረጥ የተከለከለ ነው። Do not cross or straddle to the left",
  ],

  [
    "direction_plate2",
    "የግራው መኪና መታጠፍ ብቻ የመሃከሉ መኪና ደግሞ ቀጥ ብሎ ለማለፍ ብቻ የሚቻልበት ምልክት ነው። The car on the left can turn left, the middle can only go straight.",
  ],

  [
    "road_markings4",
    "በሁለቱም በኩል መስመሩን ማቋረጥ የተከለከለ ምልክት። Do not cross or straddle from both sides",
  ],

  [
    "highway_crossing3",
    "የግራው መኪና መታጠፍ ብቻ የመሃከሉ መኪና ቀጥ ብሎ ለማለፍ የቀኙ መኪና ግን ወደ ቀኝ እንዲታጠፍ የሚቻልበት ምልክት ነው። The car on the left can turn left, the middle can only go straight while the right car allowed to turn right.",
  ],

  [
    "road_markings5",
    "በሁለቱም በኩል መስመሩን ማቋረጥ ሆነ የተቀባውን መርገጥ የተከለከለ ምልክት። Do not cross or enter the hatched area",
  ],

  [
    "highway_crossing4",
    "የግራው መኪና መታጠፍና ቀጥ ብሎ ለማለፍ የመሃከሉ መኪና ቀጥ ብሎ ለማለፍ የቀኙ መኪና ግን ወደ ቀኝ እንዲታጠፍ የሚቻልበት ምልክት ነው። The car on the left can turn left and also go straight, the right car allowed to turn right.",
  ],

  ["road_markings6", "ከሁለት አቅጣጫ መጥቶ የሚገጥም /የሚደባለቅ/ መንገድ። Merging Road"],

  [
    "highway_crossin5",
    "የግራው መኪና መታጠፍና ቀጥ ብሎ ለማለፍ የመሃከሉ መኪና ቀጥ ብሎ ለማለፍ የቀኙ መኪናም ወደ ፊትለፊት እና ወደ ቀኝ እንዲታጠፍ የሚቻልበት ምልክት ነው። The car on the left can turn left and also go straight, the right car allowed to go straight and also to turn right",
  ],

  ["road_markings7", "ወደ ሁለት አቅጣጫ የሚከፈል መንገድ። Diverging Road"],

  [
    "highway_crossin6",
    "በመሬት ላይ የተመለከተው ቀስት የግራው መኪና መታጠፍ ብቻ የመሃከሉ መኪና ቀጥ ብሎ ለማለፍ የቀኙ መኪና ግን ወደ ቀኝ እንዲታጠፍ የሚቻልበት ምልክት ነው። The arrow on the ground only indicates that the car on the left can only turn left, the center car can go straight, and the right side of car can be turned right.",
  ],

  [
    "traficlight",
    "ይህ የመብራት ምልክት ወደ ግራ ለሚታጠፉ መኪናዎች ማለፍ የተፈቀደ መሆኑና ወደ ፊትና ወደ ቀኝ የሚታጠፉት እንዲቆሙ የሚያዝ ምልክት ነው። This light signal is allowed to pass left headed cars and stop for the straight and right turning cars.",
  ],

  [
    "pedasterstop",
    "ይህ የመብራት ምልክት የሚያቋርጡ መንገደኞች እንዲቆሙ የሚያዝ ምልክት ነው። This is a signal for passengers to stop.",
  ],

  [
    "traficlight1",
    "ይህ የመብራት ምልክት ወደ ግራ ለሚታጠፉ መኪናዎች እንዲቆሙ የሚያዝ አና ወደ ፊትና ወደ ቀኝ የሚታጠፉት ማለፍ የተፈቀደላቸው መሆኑ የሚያሳይ ምልክት ነው። This is a sign that the left-headed the car is stopped and the left and right turns are allowed to pass.",
  ],

  [
    "pedastergo",
    "ይህ የመብራት ምልክት የሚያቋርጡ መንገደኞች ለማቋረጥ ተፈቀደላቸው መሆኑ የሚያሳይ ምልክት ነው። This light signal is a sign that passengers are allowed to cross.",
  ],

  [
    "timetogo",
    "ይህ የመብራት ምልክት ለሚታየው ሴኮንዶች ያህል እንዲቆሙ የሚያዝ ምልክት ነው። This light signal is a signal to stop for the specified seconds.",
  ],

  [
    "timetostop",
    "ይህ የመብራት ምልክት ለሚታየው ሴኮንዶች ያህል ማለፍ የተፈቀደላቸው መሆኑ የሚያሳይ ምልክት ነው። This light signal is a signal to permit to pass for the specified seconds.",
  ],

  [
    "roundabout",
    "ይህ ቅድሚያ የሚሰጠው በአደባባይ ውስጥ የገባውን መኪና መሆኑን የሚያሳይ ነው። ለምሳሌ ቀይና ሰማያዊው መኪናዎች ከቢጫና አረንጓዴው መኪናዎች ቅድሚያ እንዳላቸው ያሳያል። This indicates that the priority is given for the car in the roundabout. For example, red and blue cars take precedence over yellow and green cars.",
  ],

  [
    "leftturn",
    "ይህ መኪና ወደ ቀኝ ለመታጠፍ መፈለጉን የሚያሳይ ምልክት እያሳየ ነው። Signal to turn to right",
  ],

  [
    "rightturn",
    "ይህ መኪና ወደ ግራ ለመታጠፍ መፈለጉን የሚያሳይ ምልክት እያሳየ ነው። Signal to turn to left",
  ],

  [
    "breaking",
    "ይህ መኪና ፍሬን የያዘ /ፍጥነት የመቀነሰ/ መሆኑን የሚያምልክት እያሳየ ነው። Signal to break the speed",
  ],

  ["stoping", "ይህ መኪናውን የማቆም መሆኑን የሚያምልክት እያሳየ ነው። Signal to stop the car"],

  [
    "greenlight",
    "ይህ የመብራት ምልክት አሽከርካሪዎች ቀድመው ወደ መረጡት አቅጣጫ ለመሄድ ይፈቅድላቸዋል። Green light means you have to look around, if safe move smothly",
  ],

  [
    "redflashlight",
    "ይህ የመብራት ምልክት ወደ መገናኛ የደረሰ አሽከርካሪ ሙሉ በሙሉ በመቆም ግራና ቀኝ ተመልክቶ ማለፍ ይጠበቅበታል። Stop on the line, look around, if it is safe move a head. Give priority",
  ],

  [
    "two_cars_1",
    "የነጠብጣብ ነጭ መስመር በጥንቃቄ የሚሄዱበትን ቀጥተኛ መስመርን መቀየር እንደሚችሉ ያመለክታል። Broken white line indicates that you can change lane with caution",
  ],

  [
    "redlight",
    "ይህ የመብራት ምልክት አሽከርካሪዎች ቀድመው ወደ መረጡት አቅጣጫ ለመሄድ የሚከለክልና በመቆም ይጠብቁ። Red light means stop, do not pass the line until green",
  ],

  [
    "two_cars_2",
    "ያልተቆራረጠ ነጭ ወይም ቢጫ መስመር የሚሄዱበትን ቀጥተኛ መስመርን መቀየር የተከለከለ መሆኑን ያመለክታል። Continues white or yellow line indicates that changing of lane is prohibited",
  ],

  [
    "redyellowlight",
    "ይህ የመብራት ምልክት ቆመው የነበሩ ተሽከርካሪዎች ለመሄድ የዘጋጁ። Get ready, allowed to pass when green shows",
  ],

  [
    "two_cars_3",
    "በግራ በኩል የነጠብጣብ መስመር እና በተጓዳኝ ልተቆራረጠ መስመር ማለት፣ በነጠብጣቡ መስመር አጠገብ ያለው አሽከርካሪ የትራፊክ ሁኔታውን ከግንዛቤ በማስገባት ቀጥተኛ መስመርን መቀየር ሲችል ፣ ነገር ግን ባልተቆራረጠ መስመር አጠገብ ያለው መኪና ቀጥተኛ መስመሩን መቀየር የተከለከለ መሆኑን ያመለክታል። Left side broken line and adjust sold line means, overtaking is permitted with care of traffic adjacent to the broken line, but prohibited for traffic adjacent to solid line",
  ],

  [
    "yellowflashlight",
    "ይህ የመብራት ምልክት ወደ መገናኛ የደረሰ አሽከርካሪ ፍጥነቱን በመቀነስ ግራና ቀኝ ተመልክቶ ማለፍ ይጠበቅበታል። Indicate that you can move with care after slowing down",
  ],

  [
    "two_cars_4",
    "ሁለት ያልተቆራረጡ ቢጫ መስመሮች ማለት፣ ለማለፍ ወይም ለመዞር እነዚህን መስመሮች መሻገር የተከለከለ መሆኑን ያመለክታል። Two sold yellow lines means, you must not cross these lines to overtake or make a U-turn",
  ],

  [
    "yellowlight",
    "ይህ የመብራት ምልክት ወደ መገናኛ በመድረሰ ላይ ያለ አሽከርካሪ በእግረኛ መተላለፊያ መስመር ሳያልፍ እንዲቆም። ወደ መገናኛው መንገድ ቀድመው የገቡ አሽከርካሪዎች በፍጥነት አደባባዩን ለቀው ይውጡ። You are allowed to go is yellow appears after you enter the crossing, or stop if you are approching the crossing",
  ],
  ["taxi", "የታክሲ መኪና ታርጋ። Taxi plate"],

  ["personal", "የግል መኪና ታርጋ። Personal plate"],

  ["busness", "የንግድ የመኪና ታርጋ። Business plate"],

  ["gov", "የመንግስት የመኪና ታርጋ። Government plate"],

  ["ngo", "የድርጅቶች የመኪና ታርጋ። Non government plate"],

  ["tempo", "የዕለት የመኪና ታርጋ። Temporary plate"],

  ["temp", "የተላላፊ የመኪና ታርጋ። Transit plate"],

  ["special", "የልዩ ተንቀሳቀሽ የመኪና ታርጋ። Special transit plate"],

  ["police", "የፖሊስ የመኪና ታርጋ። Police plate"],

  ["cdeplomat", "የኮድ ዲፕሎማቲክ የመኪና ታርጋ። Cor-Diplomatic plate"],

  ["un", "የተባበሩት መንግስታት የመኪና ታርጋ። United Nation (UN) plate"],

  [
    "unc",
    "የተባበሩት መንግስታት የዲፕሎማተክ መብት ላላቸው የመኪና ታርጋ። United Nation (UN) Cor-Diplomatic plate",
  ],

  ["au", "የአፍሪካ ሕብረት የመኪና ታርጋ። African Union (AU) plate"],

  [
    "auc",
    "የአፍሪካ ሕብረት የዲፕሎማተክ መብት ላላቸው የመኪና ታርጋ። African Union (AU) Cor-Diplomatic plate",
  ],

  ["supprt", "የዕርዳታ ድርጅት የመኪና ታርጋ። Humanitarian Organization plate"],

  [
    "supportc",
    "የዕርዳታ ድርጅት የዲፕሎማተክ መብት ላላቸው የመኪና ታርጋ። Humanitarian Organization Cor-Diplomatic plate",
  ],

  ["am", "የአማራ ታርጋ/ AM, Amhara plate"],

  ["beg", "የቤንሻንጉል ታርጋ/ BG, Benishangul Gumuz plate"],

  ["dr", "የድሬደዋ ታርጋ/ DR, Dire Dawa plate"],

  ["hr", "የሐረር ታርጋ/ HR, Harar plate"],

  ["or", "የኦሮኦሚያ ታርጋ/ OR, Oromia plate"],

  ["sm", "የኢትዮጵያ ሶማሊያ ታርጋ/ SM, Somali plate"],
]);
export {
  notAllowed,
  mandatory,
  warning,
  priority,
  body,
  information,
  plate,
  map,
};
