 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map
        });


        /********************
         * Add feature layers
         ********************/
        var featureLayer_1 = new FeatureLayer({
         portalItem: {
            id: "93768228faf64214b6c76b5bf99f379f"    
          }
    });

    map.add(featureLayer_1);

        var featureLayer_2 = new FeatureLayer({
          portalItem: {
            id: "3807c58dd48c4d32810042d8edf4a2fe"    
          }
});

    map.add(featureLayer_2);
   
         /********************
         * Zoom to Chicago to view map
         ********************/
   
 });
