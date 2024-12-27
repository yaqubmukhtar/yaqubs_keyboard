function plate_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[87.5,-112.5],[87.5,7.75]]).appendPoint([207.75,7.75]).appendPoint([207.75,-112.45]).appendPoint([87.5,-112.5]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[200,-99.95],"radius":1})
.union(
    CAG.circle({"center":[166.65,-14.25],"radius":1})
).union(
    CAG.circle({"center":[109.5,-90.5],"radius":1})
).union(
    CAG.circle({"center":[109.5,-14.25],"radius":1})
).union(
    new CSG.Path2D([[178.7,-107],[192.7,-107]]).appendPoint([192.7,-93]).appendPoint([178.7,-93]).appendPoint([178.7,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.25,-11.75],[202.25,-11.75]]).appendPoint([202.25,2.25]).appendPoint([188.25,2.25]).appendPoint([188.25,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.25,-30.8],[202.25,-30.8]]).appendPoint([202.25,-16.8]).appendPoint([188.25,-16.8]).appendPoint([188.25,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.25,-49.85],[202.25,-49.85]]).appendPoint([202.25,-35.85]).appendPoint([188.25,-35.85]).appendPoint([188.25,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.25,-68.9],[202.25,-68.9]]).appendPoint([202.25,-54.9]).appendPoint([188.25,-54.9]).appendPoint([188.25,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.25,-87.95],[202.25,-87.95]]).appendPoint([202.25,-73.95]).appendPoint([188.25,-73.95]).appendPoint([188.25,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-11.75],[183.2,-11.75]]).appendPoint([183.2,2.25]).appendPoint([169.2,2.25]).appendPoint([169.2,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-30.8],[183.2,-30.8]]).appendPoint([183.2,-16.8]).appendPoint([169.2,-16.8]).appendPoint([169.2,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-49.85],[183.2,-49.85]]).appendPoint([183.2,-35.85]).appendPoint([169.2,-35.85]).appendPoint([169.2,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-68.9],[183.2,-68.9]]).appendPoint([183.2,-54.9]).appendPoint([169.2,-54.9]).appendPoint([169.2,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-87.95],[183.2,-87.95]]).appendPoint([183.2,-73.95]).appendPoint([169.2,-73.95]).appendPoint([169.2,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-11.75],[164.15,-11.75]]).appendPoint([164.15,2.25]).appendPoint([150.15,2.25]).appendPoint([150.15,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-30.8],[164.15,-30.8]]).appendPoint([164.15,-16.8]).appendPoint([150.15,-16.8]).appendPoint([150.15,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-49.85],[164.15,-49.85]]).appendPoint([164.15,-35.85]).appendPoint([150.15,-35.85]).appendPoint([150.15,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-68.9],[164.15,-68.9]]).appendPoint([164.15,-54.9]).appendPoint([150.15,-54.9]).appendPoint([150.15,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-87.95],[164.15,-87.95]]).appendPoint([164.15,-73.95]).appendPoint([150.15,-73.95]).appendPoint([150.15,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-107],[164.15,-107]]).appendPoint([164.15,-93]).appendPoint([150.15,-93]).appendPoint([150.15,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-11.75],[145.1,-11.75]]).appendPoint([145.1,2.25]).appendPoint([131.1,2.25]).appendPoint([131.1,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-30.8],[145.1,-30.8]]).appendPoint([145.1,-16.8]).appendPoint([131.1,-16.8]).appendPoint([131.1,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-49.85],[145.1,-49.85]]).appendPoint([145.1,-35.85]).appendPoint([131.1,-35.85]).appendPoint([131.1,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-68.9],[145.1,-68.9]]).appendPoint([145.1,-54.9]).appendPoint([131.1,-54.9]).appendPoint([131.1,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-87.95],[145.1,-87.95]]).appendPoint([145.1,-73.95]).appendPoint([131.1,-73.95]).appendPoint([131.1,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-107],[145.1,-107]]).appendPoint([145.1,-93]).appendPoint([131.1,-93]).appendPoint([131.1,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-11.75],[126.05,-11.75]]).appendPoint([126.05,2.25]).appendPoint([112.05,2.25]).appendPoint([112.05,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-30.8],[126.05,-30.8]]).appendPoint([126.05,-16.8]).appendPoint([112.05,-16.8]).appendPoint([112.05,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-49.85],[126.05,-49.85]]).appendPoint([126.05,-35.85]).appendPoint([112.05,-35.85]).appendPoint([112.05,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-68.9],[126.05,-68.9]]).appendPoint([126.05,-54.9]).appendPoint([112.05,-54.9]).appendPoint([112.05,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-87.95],[126.05,-87.95]]).appendPoint([126.05,-73.95]).appendPoint([112.05,-73.95]).appendPoint([112.05,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-107],[126.05,-107]]).appendPoint([126.05,-93]).appendPoint([112.05,-93]).appendPoint([112.05,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-11.75],[107,-11.75]]).appendPoint([107,2.25]).appendPoint([93,2.25]).appendPoint([93,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-30.8],[107,-30.8]]).appendPoint([107,-16.8]).appendPoint([93,-16.8]).appendPoint([93,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-49.85],[107,-49.85]]).appendPoint([107,-35.85]).appendPoint([93,-35.85]).appendPoint([93,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-68.9],[107,-68.9]]).appendPoint([107,-54.9]).appendPoint([93,-54.9]).appendPoint([93,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-87.95],[107,-87.95]]).appendPoint([107,-73.95]).appendPoint([93,-73.95]).appendPoint([93,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-107],[107,-107]]).appendPoint([107,-93]).appendPoint([93,-93]).appendPoint([93,-107]).close().innerToCAG()
)).union(
    new CSG.Path2D([[474.15,-112.5],[474.15,7.75]]).appendPoint([296.75,7.75]).appendPoint([296.75,-112.45]).appendPoint([474.15,-112.5]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[304.5,-99.95],"radius":1})
.union(
    CAG.circle({"center":[337.85,-14.25],"radius":1})
).union(
    CAG.circle({"center":[452.15,-90.5],"radius":1})
).union(
    CAG.circle({"center":[452.15,-14.25],"radius":1})
).union(
    new CSG.Path2D([[311.8,-107],[325.8,-107]]).appendPoint([325.8,-93]).appendPoint([311.8,-93]).appendPoint([311.8,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[454.65,-11.75],[468.65,-11.75]]).appendPoint([468.65,2.25]).appendPoint([454.65,2.25]).appendPoint([454.65,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[454.65,-30.8],[468.65,-30.8]]).appendPoint([468.65,-16.8]).appendPoint([454.65,-16.8]).appendPoint([454.65,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[454.65,-49.85],[468.65,-49.85]]).appendPoint([468.65,-35.85]).appendPoint([454.65,-35.85]).appendPoint([454.65,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[454.65,-68.9],[468.65,-68.9]]).appendPoint([468.65,-54.9]).appendPoint([454.65,-54.9]).appendPoint([454.65,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[454.65,-87.95],[468.65,-87.95]]).appendPoint([468.65,-73.95]).appendPoint([454.65,-73.95]).appendPoint([454.65,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[454.65,-107],[468.65,-107]]).appendPoint([468.65,-93]).appendPoint([454.65,-93]).appendPoint([454.65,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[435.6,-11.75],[449.6,-11.75]]).appendPoint([449.6,2.25]).appendPoint([435.6,2.25]).appendPoint([435.6,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[435.6,-30.8],[449.6,-30.8]]).appendPoint([449.6,-16.8]).appendPoint([435.6,-16.8]).appendPoint([435.6,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[435.6,-49.85],[449.6,-49.85]]).appendPoint([449.6,-35.85]).appendPoint([435.6,-35.85]).appendPoint([435.6,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[435.6,-68.9],[449.6,-68.9]]).appendPoint([449.6,-54.9]).appendPoint([435.6,-54.9]).appendPoint([435.6,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[435.6,-87.95],[449.6,-87.95]]).appendPoint([449.6,-73.95]).appendPoint([435.6,-73.95]).appendPoint([435.6,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[435.6,-107],[449.6,-107]]).appendPoint([449.6,-93]).appendPoint([435.6,-93]).appendPoint([435.6,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[416.55,-11.75],[430.55,-11.75]]).appendPoint([430.55,2.25]).appendPoint([416.55,2.25]).appendPoint([416.55,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[416.55,-30.8],[430.55,-30.8]]).appendPoint([430.55,-16.8]).appendPoint([416.55,-16.8]).appendPoint([416.55,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[416.55,-49.85],[430.55,-49.85]]).appendPoint([430.55,-35.85]).appendPoint([416.55,-35.85]).appendPoint([416.55,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[416.55,-68.9],[430.55,-68.9]]).appendPoint([430.55,-54.9]).appendPoint([416.55,-54.9]).appendPoint([416.55,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[416.55,-87.95],[430.55,-87.95]]).appendPoint([430.55,-73.95]).appendPoint([416.55,-73.95]).appendPoint([416.55,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[416.55,-107],[430.55,-107]]).appendPoint([430.55,-93]).appendPoint([416.55,-93]).appendPoint([416.55,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[397.5,-11.75],[411.5,-11.75]]).appendPoint([411.5,2.25]).appendPoint([397.5,2.25]).appendPoint([397.5,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[397.5,-30.8],[411.5,-30.8]]).appendPoint([411.5,-16.8]).appendPoint([397.5,-16.8]).appendPoint([397.5,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[397.5,-49.85],[411.5,-49.85]]).appendPoint([411.5,-35.85]).appendPoint([397.5,-35.85]).appendPoint([397.5,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[397.5,-68.9],[411.5,-68.9]]).appendPoint([411.5,-54.9]).appendPoint([397.5,-54.9]).appendPoint([397.5,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[397.5,-87.95],[411.5,-87.95]]).appendPoint([411.5,-73.95]).appendPoint([397.5,-73.95]).appendPoint([397.5,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[397.5,-107],[411.5,-107]]).appendPoint([411.5,-93]).appendPoint([397.5,-93]).appendPoint([397.5,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.45,-11.75],[392.45,-11.75]]).appendPoint([392.45,2.25]).appendPoint([378.45,2.25]).appendPoint([378.45,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.45,-30.8],[392.45,-30.8]]).appendPoint([392.45,-16.8]).appendPoint([378.45,-16.8]).appendPoint([378.45,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.45,-49.85],[392.45,-49.85]]).appendPoint([392.45,-35.85]).appendPoint([378.45,-35.85]).appendPoint([378.45,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.45,-68.9],[392.45,-68.9]]).appendPoint([392.45,-54.9]).appendPoint([378.45,-54.9]).appendPoint([378.45,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.45,-87.95],[392.45,-87.95]]).appendPoint([392.45,-73.95]).appendPoint([378.45,-73.95]).appendPoint([378.45,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.45,-107],[392.45,-107]]).appendPoint([392.45,-93]).appendPoint([378.45,-93]).appendPoint([378.45,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.4,-11.75],[373.4,-11.75]]).appendPoint([373.4,2.25]).appendPoint([359.4,2.25]).appendPoint([359.4,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.4,-30.8],[373.4,-30.8]]).appendPoint([373.4,-16.8]).appendPoint([359.4,-16.8]).appendPoint([359.4,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.4,-49.85],[373.4,-49.85]]).appendPoint([373.4,-35.85]).appendPoint([359.4,-35.85]).appendPoint([359.4,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.4,-68.9],[373.4,-68.9]]).appendPoint([373.4,-54.9]).appendPoint([359.4,-54.9]).appendPoint([359.4,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.4,-87.95],[373.4,-87.95]]).appendPoint([373.4,-73.95]).appendPoint([359.4,-73.95]).appendPoint([359.4,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.4,-107],[373.4,-107]]).appendPoint([373.4,-93]).appendPoint([359.4,-93]).appendPoint([359.4,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.35,-11.75],[354.35,-11.75]]).appendPoint([354.35,2.25]).appendPoint([340.35,2.25]).appendPoint([340.35,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.35,-30.8],[354.35,-30.8]]).appendPoint([354.35,-16.8]).appendPoint([340.35,-16.8]).appendPoint([340.35,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.35,-49.85],[354.35,-49.85]]).appendPoint([354.35,-35.85]).appendPoint([340.35,-35.85]).appendPoint([340.35,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.35,-68.9],[354.35,-68.9]]).appendPoint([354.35,-54.9]).appendPoint([340.35,-54.9]).appendPoint([340.35,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.35,-87.95],[354.35,-87.95]]).appendPoint([354.35,-73.95]).appendPoint([340.35,-73.95]).appendPoint([340.35,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.35,-107],[354.35,-107]]).appendPoint([354.35,-93]).appendPoint([340.35,-93]).appendPoint([340.35,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.3,-11.75],[335.3,-11.75]]).appendPoint([335.3,2.25]).appendPoint([321.3,2.25]).appendPoint([321.3,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.3,-30.8],[335.3,-30.8]]).appendPoint([335.3,-16.8]).appendPoint([321.3,-16.8]).appendPoint([321.3,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.3,-49.85],[335.3,-49.85]]).appendPoint([335.3,-35.85]).appendPoint([321.3,-35.85]).appendPoint([321.3,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.3,-68.9],[335.3,-68.9]]).appendPoint([335.3,-54.9]).appendPoint([321.3,-54.9]).appendPoint([321.3,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.3,-87.95],[335.3,-87.95]]).appendPoint([335.3,-73.95]).appendPoint([321.3,-73.95]).appendPoint([321.3,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.25,-11.75],[316.25,-11.75]]).appendPoint([316.25,2.25]).appendPoint([302.25,2.25]).appendPoint([302.25,-11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.25,-30.8],[316.25,-30.8]]).appendPoint([316.25,-16.8]).appendPoint([302.25,-16.8]).appendPoint([302.25,-30.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.25,-49.85],[316.25,-49.85]]).appendPoint([316.25,-35.85]).appendPoint([302.25,-35.85]).appendPoint([302.25,-49.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.25,-68.9],[316.25,-68.9]]).appendPoint([316.25,-54.9]).appendPoint([302.25,-54.9]).appendPoint([302.25,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.25,-87.95],[316.25,-87.95]]).appendPoint([316.25,-73.95]).appendPoint([302.25,-73.95]).appendPoint([302.25,-87.95]).close().innerToCAG()
))).extrude({ offset: [0, 0, 1.5] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = plate_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        