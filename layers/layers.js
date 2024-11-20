var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PERIMETRO_2 = new ol.format.GeoJSON();
var features_PERIMETRO_2 = format_PERIMETRO_2.readFeatures(json_PERIMETRO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETRO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETRO_2.addFeatures(features_PERIMETRO_2);
var lyr_PERIMETRO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETRO_2, 
                style: style_PERIMETRO_2,
                popuplayertitle: "PERIMETRO",
                interactive: true,
                title: '<img src="styles/legend/PERIMETRO_2.png" /> PERIMETRO'
            });
var format_hoteles_3 = new ol.format.GeoJSON();
var features_hoteles_3 = format_hoteles_3.readFeatures(json_hoteles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_3.addFeatures(features_hoteles_3);
var lyr_hoteles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_3, 
                style: style_hoteles_3,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_3.png" /> hoteles'
            });
var format_agencias_4 = new ol.format.GeoJSON();
var features_agencias_4 = format_agencias_4.readFeatures(json_agencias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_4.addFeatures(features_agencias_4);
var lyr_agencias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_4, 
                style: style_agencias_4,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_4.png" /> agencias'
            });
var format_festividades_5 = new ol.format.GeoJSON();
var features_festividades_5 = format_festividades_5.readFeatures(json_festividades_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_5.addFeatures(features_festividades_5);
var lyr_festividades_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_5, 
                style: style_festividades_5,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_5.png" /> festividades'
            });
var format_lugares_6 = new ol.format.GeoJSON();
var features_lugares_6 = format_lugares_6.readFeatures(json_lugares_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_6.addFeatures(features_lugares_6);
var lyr_lugares_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_6, 
                style: style_lugares_6,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_6.png" /> lugares'
            });
var format_restaurantes_7 = new ol.format.GeoJSON();
var features_restaurantes_7 = format_restaurantes_7.readFeatures(json_restaurantes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_7.addFeatures(features_restaurantes_7);
var lyr_restaurantes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_7, 
                style: style_restaurantes_7,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_7.png" /> restaurantes'
            });
var format_rutas_8 = new ol.format.GeoJSON();
var features_rutas_8 = format_rutas_8.readFeatures(json_rutas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_8.addFeatures(features_rutas_8);
var lyr_rutas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_8, 
                style: style_rutas_8,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_8.png" /> rutas'
            });
var format_hoteles_9 = new ol.format.GeoJSON();
var features_hoteles_9 = format_hoteles_9.readFeatures(json_hoteles_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_9.addFeatures(features_hoteles_9);
var lyr_hoteles_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_9, 
                style: style_hoteles_9,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_9.png" /> hoteles'
            });
var format_agencias_10 = new ol.format.GeoJSON();
var features_agencias_10 = format_agencias_10.readFeatures(json_agencias_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_10.addFeatures(features_agencias_10);
var lyr_agencias_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_10, 
                style: style_agencias_10,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_10.png" /> agencias'
            });
var format_festividades_11 = new ol.format.GeoJSON();
var features_festividades_11 = format_festividades_11.readFeatures(json_festividades_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_11.addFeatures(features_festividades_11);
var lyr_festividades_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_11, 
                style: style_festividades_11,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_11.png" /> festividades'
            });
var format_lugares_12 = new ol.format.GeoJSON();
var features_lugares_12 = format_lugares_12.readFeatures(json_lugares_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_12.addFeatures(features_lugares_12);
var lyr_lugares_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_12, 
                style: style_lugares_12,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_12.png" /> lugares'
            });
var format_restaurantes_13 = new ol.format.GeoJSON();
var features_restaurantes_13 = format_restaurantes_13.readFeatures(json_restaurantes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_13.addFeatures(features_restaurantes_13);
var lyr_restaurantes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_13, 
                style: style_restaurantes_13,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_13.png" /> restaurantes'
            });
var format_rutas_14 = new ol.format.GeoJSON();
var features_rutas_14 = format_rutas_14.readFeatures(json_rutas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_14.addFeatures(features_rutas_14);
var lyr_rutas_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_14, 
                style: style_rutas_14,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_14.png" /> rutas'
            });
var format_hoteles_15 = new ol.format.GeoJSON();
var features_hoteles_15 = format_hoteles_15.readFeatures(json_hoteles_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_15.addFeatures(features_hoteles_15);
var lyr_hoteles_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_15, 
                style: style_hoteles_15,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_15.png" /> hoteles'
            });
var format_agencias_16 = new ol.format.GeoJSON();
var features_agencias_16 = format_agencias_16.readFeatures(json_agencias_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_16.addFeatures(features_agencias_16);
var lyr_agencias_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_16, 
                style: style_agencias_16,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_16.png" /> agencias'
            });
var format_festividades_17 = new ol.format.GeoJSON();
var features_festividades_17 = format_festividades_17.readFeatures(json_festividades_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_17.addFeatures(features_festividades_17);
var lyr_festividades_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_17, 
                style: style_festividades_17,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_17.png" /> festividades'
            });
var format_lugares_18 = new ol.format.GeoJSON();
var features_lugares_18 = format_lugares_18.readFeatures(json_lugares_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_18.addFeatures(features_lugares_18);
var lyr_lugares_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_18, 
                style: style_lugares_18,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_18.png" /> lugares'
            });
var format_restaurantes_19 = new ol.format.GeoJSON();
var features_restaurantes_19 = format_restaurantes_19.readFeatures(json_restaurantes_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_19.addFeatures(features_restaurantes_19);
var lyr_restaurantes_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_19, 
                style: style_restaurantes_19,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_19.png" /> restaurantes'
            });
var format_rutas_20 = new ol.format.GeoJSON();
var features_rutas_20 = format_rutas_20.readFeatures(json_rutas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_20.addFeatures(features_rutas_20);
var lyr_rutas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_20, 
                style: style_rutas_20,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_20.png" /> rutas'
            });
var format_hoteles_21 = new ol.format.GeoJSON();
var features_hoteles_21 = format_hoteles_21.readFeatures(json_hoteles_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_21.addFeatures(features_hoteles_21);
var lyr_hoteles_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_21, 
                style: style_hoteles_21,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_21.png" /> hoteles'
            });
var format_agencias_22 = new ol.format.GeoJSON();
var features_agencias_22 = format_agencias_22.readFeatures(json_agencias_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_22.addFeatures(features_agencias_22);
var lyr_agencias_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_22, 
                style: style_agencias_22,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_22.png" /> agencias'
            });
var format_festividades_23 = new ol.format.GeoJSON();
var features_festividades_23 = format_festividades_23.readFeatures(json_festividades_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_23.addFeatures(features_festividades_23);
var lyr_festividades_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_23, 
                style: style_festividades_23,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_23.png" /> festividades'
            });
var format_lugares_24 = new ol.format.GeoJSON();
var features_lugares_24 = format_lugares_24.readFeatures(json_lugares_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_24.addFeatures(features_lugares_24);
var lyr_lugares_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_24, 
                style: style_lugares_24,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_24.png" /> lugares'
            });
var format_restaurantes_25 = new ol.format.GeoJSON();
var features_restaurantes_25 = format_restaurantes_25.readFeatures(json_restaurantes_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_25.addFeatures(features_restaurantes_25);
var lyr_restaurantes_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_25, 
                style: style_restaurantes_25,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_25.png" /> restaurantes'
            });
var format_rutas_26 = new ol.format.GeoJSON();
var features_rutas_26 = format_rutas_26.readFeatures(json_rutas_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_26.addFeatures(features_rutas_26);
var lyr_rutas_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_26, 
                style: style_rutas_26,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_26.png" /> rutas'
            });
var format_hoteles_27 = new ol.format.GeoJSON();
var features_hoteles_27 = format_hoteles_27.readFeatures(json_hoteles_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_27.addFeatures(features_hoteles_27);
var lyr_hoteles_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_27, 
                style: style_hoteles_27,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_27.png" /> hoteles'
            });
var format_agencias_28 = new ol.format.GeoJSON();
var features_agencias_28 = format_agencias_28.readFeatures(json_agencias_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_28.addFeatures(features_agencias_28);
var lyr_agencias_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_28, 
                style: style_agencias_28,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_28.png" /> agencias'
            });
var format_festividades_29 = new ol.format.GeoJSON();
var features_festividades_29 = format_festividades_29.readFeatures(json_festividades_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_29.addFeatures(features_festividades_29);
var lyr_festividades_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_29, 
                style: style_festividades_29,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_29.png" /> festividades'
            });
var format_lugares_30 = new ol.format.GeoJSON();
var features_lugares_30 = format_lugares_30.readFeatures(json_lugares_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_30.addFeatures(features_lugares_30);
var lyr_lugares_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_30, 
                style: style_lugares_30,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_30.png" /> lugares'
            });
var format_restaurantes_31 = new ol.format.GeoJSON();
var features_restaurantes_31 = format_restaurantes_31.readFeatures(json_restaurantes_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_31.addFeatures(features_restaurantes_31);
var lyr_restaurantes_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_31, 
                style: style_restaurantes_31,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_31.png" /> restaurantes'
            });
var format_rutas_32 = new ol.format.GeoJSON();
var features_rutas_32 = format_rutas_32.readFeatures(json_rutas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_32.addFeatures(features_rutas_32);
var lyr_rutas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_32, 
                style: style_rutas_32,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_32.png" /> rutas'
            });
var format_hoteles_33 = new ol.format.GeoJSON();
var features_hoteles_33 = format_hoteles_33.readFeatures(json_hoteles_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_33.addFeatures(features_hoteles_33);
var lyr_hoteles_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_33, 
                style: style_hoteles_33,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_33.png" /> hoteles'
            });
var format_agencias_34 = new ol.format.GeoJSON();
var features_agencias_34 = format_agencias_34.readFeatures(json_agencias_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_34.addFeatures(features_agencias_34);
var lyr_agencias_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_34, 
                style: style_agencias_34,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_34.png" /> agencias'
            });
var format_festividades_35 = new ol.format.GeoJSON();
var features_festividades_35 = format_festividades_35.readFeatures(json_festividades_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_35.addFeatures(features_festividades_35);
var lyr_festividades_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_35, 
                style: style_festividades_35,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_35.png" /> festividades'
            });
var format_lugares_36 = new ol.format.GeoJSON();
var features_lugares_36 = format_lugares_36.readFeatures(json_lugares_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_36.addFeatures(features_lugares_36);
var lyr_lugares_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_36, 
                style: style_lugares_36,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_36.png" /> lugares'
            });
var format_restaurantes_37 = new ol.format.GeoJSON();
var features_restaurantes_37 = format_restaurantes_37.readFeatures(json_restaurantes_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_37.addFeatures(features_restaurantes_37);
var lyr_restaurantes_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_37, 
                style: style_restaurantes_37,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_37.png" /> restaurantes'
            });
var format_rutas_38 = new ol.format.GeoJSON();
var features_rutas_38 = format_rutas_38.readFeatures(json_rutas_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_38.addFeatures(features_rutas_38);
var lyr_rutas_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_38, 
                style: style_rutas_38,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_38.png" /> rutas'
            });
var format_hoteles_39 = new ol.format.GeoJSON();
var features_hoteles_39 = format_hoteles_39.readFeatures(json_hoteles_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_39.addFeatures(features_hoteles_39);
var lyr_hoteles_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_39, 
                style: style_hoteles_39,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_39.png" /> hoteles'
            });
var format_agencias_40 = new ol.format.GeoJSON();
var features_agencias_40 = format_agencias_40.readFeatures(json_agencias_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_40.addFeatures(features_agencias_40);
var lyr_agencias_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_40, 
                style: style_agencias_40,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_40.png" /> agencias'
            });
var format_festividades_41 = new ol.format.GeoJSON();
var features_festividades_41 = format_festividades_41.readFeatures(json_festividades_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_41.addFeatures(features_festividades_41);
var lyr_festividades_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_41, 
                style: style_festividades_41,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_41.png" /> festividades'
            });
var format_lugares_42 = new ol.format.GeoJSON();
var features_lugares_42 = format_lugares_42.readFeatures(json_lugares_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_42.addFeatures(features_lugares_42);
var lyr_lugares_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_42, 
                style: style_lugares_42,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_42.png" /> lugares'
            });
var format_restaurantes_43 = new ol.format.GeoJSON();
var features_restaurantes_43 = format_restaurantes_43.readFeatures(json_restaurantes_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_43.addFeatures(features_restaurantes_43);
var lyr_restaurantes_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_43, 
                style: style_restaurantes_43,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_43.png" /> restaurantes'
            });
var format_rutas_44 = new ol.format.GeoJSON();
var features_rutas_44 = format_rutas_44.readFeatures(json_rutas_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_44.addFeatures(features_rutas_44);
var lyr_rutas_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_44, 
                style: style_rutas_44,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_44.png" /> rutas'
            });
var format_hoteles_45 = new ol.format.GeoJSON();
var features_hoteles_45 = format_hoteles_45.readFeatures(json_hoteles_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_45.addFeatures(features_hoteles_45);
var lyr_hoteles_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_45, 
                style: style_hoteles_45,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_45.png" /> hoteles'
            });
var format_agencias_46 = new ol.format.GeoJSON();
var features_agencias_46 = format_agencias_46.readFeatures(json_agencias_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_46.addFeatures(features_agencias_46);
var lyr_agencias_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_46, 
                style: style_agencias_46,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_46.png" /> agencias'
            });
var format_festividades_47 = new ol.format.GeoJSON();
var features_festividades_47 = format_festividades_47.readFeatures(json_festividades_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_47.addFeatures(features_festividades_47);
var lyr_festividades_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_47, 
                style: style_festividades_47,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_47.png" /> festividades'
            });
var format_lugares_48 = new ol.format.GeoJSON();
var features_lugares_48 = format_lugares_48.readFeatures(json_lugares_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_48.addFeatures(features_lugares_48);
var lyr_lugares_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_48, 
                style: style_lugares_48,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_48.png" /> lugares'
            });
var format_restaurantes_49 = new ol.format.GeoJSON();
var features_restaurantes_49 = format_restaurantes_49.readFeatures(json_restaurantes_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_49.addFeatures(features_restaurantes_49);
var lyr_restaurantes_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_49, 
                style: style_restaurantes_49,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_49.png" /> restaurantes'
            });
var format_rutas_50 = new ol.format.GeoJSON();
var features_rutas_50 = format_rutas_50.readFeatures(json_rutas_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_50.addFeatures(features_rutas_50);
var lyr_rutas_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_50, 
                style: style_rutas_50,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_50.png" /> rutas'
            });
var format_hoteles_51 = new ol.format.GeoJSON();
var features_hoteles_51 = format_hoteles_51.readFeatures(json_hoteles_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_51.addFeatures(features_hoteles_51);
var lyr_hoteles_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hoteles_51, 
                style: style_hoteles_51,
                popuplayertitle: "hoteles",
                interactive: true,
                title: '<img src="styles/legend/hoteles_51.png" /> hoteles'
            });
var format_agencias_52 = new ol.format.GeoJSON();
var features_agencias_52 = format_agencias_52.readFeatures(json_agencias_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agencias_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agencias_52.addFeatures(features_agencias_52);
var lyr_agencias_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agencias_52, 
                style: style_agencias_52,
                popuplayertitle: "agencias",
                interactive: true,
                title: '<img src="styles/legend/agencias_52.png" /> agencias'
            });
var format_festividades_53 = new ol.format.GeoJSON();
var features_festividades_53 = format_festividades_53.readFeatures(json_festividades_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_festividades_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_festividades_53.addFeatures(features_festividades_53);
var lyr_festividades_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_festividades_53, 
                style: style_festividades_53,
                popuplayertitle: "festividades",
                interactive: true,
                title: '<img src="styles/legend/festividades_53.png" /> festividades'
            });
var format_lugares_54 = new ol.format.GeoJSON();
var features_lugares_54 = format_lugares_54.readFeatures(json_lugares_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lugares_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lugares_54.addFeatures(features_lugares_54);
var lyr_lugares_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lugares_54, 
                style: style_lugares_54,
                popuplayertitle: "lugares",
                interactive: true,
                title: '<img src="styles/legend/lugares_54.png" /> lugares'
            });
var format_restaurantes_55 = new ol.format.GeoJSON();
var features_restaurantes_55 = format_restaurantes_55.readFeatures(json_restaurantes_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_55.addFeatures(features_restaurantes_55);
var lyr_restaurantes_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurantes_55, 
                style: style_restaurantes_55,
                popuplayertitle: "restaurantes",
                interactive: true,
                title: '<img src="styles/legend/restaurantes_55.png" /> restaurantes'
            });
var format_rutas_56 = new ol.format.GeoJSON();
var features_rutas_56 = format_rutas_56.readFeatures(json_rutas_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_56.addFeatures(features_rutas_56);
var lyr_rutas_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rutas_56, 
                style: style_rutas_56,
                popuplayertitle: "rutas",
                interactive: true,
                title: '<img src="styles/legend/rutas_56.png" /> rutas'
            });
var group_SATIPO = new ol.layer.Group({
                                layers: [lyr_hoteles_51,lyr_agencias_52,lyr_festividades_53,lyr_lugares_54,lyr_restaurantes_55,lyr_rutas_56,],
                                fold: "open",
                                title: "SATIPO"});
var group_CONCEPCIN = new ol.layer.Group({
                                layers: [lyr_hoteles_45,lyr_agencias_46,lyr_festividades_47,lyr_lugares_48,lyr_restaurantes_49,lyr_rutas_50,],
                                fold: "open",
                                title: "CONCEPCIÓN"});
var group_JAUJA = new ol.layer.Group({
                                layers: [lyr_hoteles_39,lyr_agencias_40,lyr_festividades_41,lyr_lugares_42,lyr_restaurantes_43,lyr_rutas_44,],
                                fold: "open",
                                title: "JAUJA"});
var group_TARMA = new ol.layer.Group({
                                layers: [lyr_hoteles_33,lyr_agencias_34,lyr_festividades_35,lyr_lugares_36,lyr_restaurantes_37,lyr_rutas_38,],
                                fold: "open",
                                title: "TARMA"});
var group_YAULI = new ol.layer.Group({
                                layers: [lyr_hoteles_27,lyr_agencias_28,lyr_festividades_29,lyr_lugares_30,lyr_restaurantes_31,lyr_rutas_32,],
                                fold: "open",
                                title: "YAULI"});
var group_CHUPACA = new ol.layer.Group({
                                layers: [lyr_hoteles_21,lyr_agencias_22,lyr_festividades_23,lyr_lugares_24,lyr_restaurantes_25,lyr_rutas_26,],
                                fold: "open",
                                title: "CHUPACA"});
var group_CHANCHAMAYO = new ol.layer.Group({
                                layers: [lyr_hoteles_15,lyr_agencias_16,lyr_festividades_17,lyr_lugares_18,lyr_restaurantes_19,lyr_rutas_20,],
                                fold: "open",
                                title: "CHANCHAMAYO"});
var group_HUANCAYO = new ol.layer.Group({
                                layers: [lyr_hoteles_9,lyr_agencias_10,lyr_festividades_11,lyr_lugares_12,lyr_restaurantes_13,lyr_rutas_14,],
                                fold: "open",
                                title: "HUANCAYO"});
var group_JUNIN = new ol.layer.Group({
                                layers: [lyr_hoteles_3,lyr_agencias_4,lyr_festividades_5,lyr_lugares_6,lyr_restaurantes_7,lyr_rutas_8,],
                                fold: "open",
                                title: "JUNIN"});
var group_PROVINCIAS = new ol.layer.Group({
                                layers: [lyr_PERIMETRO_2,],
                                fold: "open",
                                title: "PROVINCIAS"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,],
                                fold: "open",
                                title: "MAPA BASE"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_PERIMETRO_2.setVisible(true);lyr_hoteles_3.setVisible(false);lyr_agencias_4.setVisible(false);lyr_festividades_5.setVisible(false);lyr_lugares_6.setVisible(false);lyr_restaurantes_7.setVisible(false);lyr_rutas_8.setVisible(false);lyr_hoteles_9.setVisible(false);lyr_agencias_10.setVisible(false);lyr_festividades_11.setVisible(false);lyr_lugares_12.setVisible(false);lyr_restaurantes_13.setVisible(false);lyr_rutas_14.setVisible(false);lyr_hoteles_15.setVisible(false);lyr_agencias_16.setVisible(false);lyr_festividades_17.setVisible(false);lyr_lugares_18.setVisible(false);lyr_restaurantes_19.setVisible(false);lyr_rutas_20.setVisible(false);lyr_hoteles_21.setVisible(false);lyr_agencias_22.setVisible(false);lyr_festividades_23.setVisible(false);lyr_lugares_24.setVisible(false);lyr_restaurantes_25.setVisible(false);lyr_rutas_26.setVisible(false);lyr_hoteles_27.setVisible(false);lyr_agencias_28.setVisible(false);lyr_festividades_29.setVisible(false);lyr_lugares_30.setVisible(false);lyr_restaurantes_31.setVisible(false);lyr_rutas_32.setVisible(false);lyr_hoteles_33.setVisible(false);lyr_agencias_34.setVisible(false);lyr_festividades_35.setVisible(false);lyr_lugares_36.setVisible(false);lyr_restaurantes_37.setVisible(false);lyr_rutas_38.setVisible(false);lyr_hoteles_39.setVisible(false);lyr_agencias_40.setVisible(false);lyr_festividades_41.setVisible(false);lyr_lugares_42.setVisible(false);lyr_restaurantes_43.setVisible(false);lyr_rutas_44.setVisible(false);lyr_hoteles_45.setVisible(false);lyr_agencias_46.setVisible(false);lyr_festividades_47.setVisible(false);lyr_lugares_48.setVisible(false);lyr_restaurantes_49.setVisible(false);lyr_rutas_50.setVisible(false);lyr_hoteles_51.setVisible(false);lyr_agencias_52.setVisible(false);lyr_festividades_53.setVisible(false);lyr_lugares_54.setVisible(false);lyr_restaurantes_55.setVisible(false);lyr_rutas_56.setVisible(false);
var layersList = [group_MAPABASE,group_PROVINCIAS,group_JUNIN,group_HUANCAYO,group_CHANCHAMAYO,group_CHUPACA,group_YAULI,group_TARMA,group_JAUJA,group_CONCEPCIN,group_SATIPO];
lyr_PERIMETRO_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CCDD': 'CCDD', 'CCPP': 'CCPP', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', });
lyr_hoteles_3.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_4.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_5.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_6.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_7.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_8.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_9.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_10.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_11.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_12.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_13.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_14.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_15.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_16.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_17.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_18.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_19.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_20.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_21.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_22.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_23.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_24.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_25.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_26.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_27.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_28.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_29.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_30.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_31.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_32.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_33.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_34.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_35.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_36.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_37.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_38.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_39.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_40.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_41.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_42.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_43.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_44.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_45.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_46.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_47.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_48.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_49.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_50.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_hoteles_51.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'cochera': 'cochera', });
lyr_agencias_52.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'nombre': 'nombre', 'direccion': 'direccion', 'contacto': 'contacto', 'circuitos': 'circuitos', 'salidas': 'salidas', });
lyr_festividades_53.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'festividad': 'festividad', 'descripcion': 'descripcion', 'danza': 'danza', 'fecha': 'fecha', });
lyr_lugares_54.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'descripcion': 'descripcion', 'altitud': 'altitud', 'enlace': 'enlace', });
lyr_restaurantes_55.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'centropoblado': 'centropoblado', 'nombre': 'nombre', 'direccion': 'direccion', 'celular': 'celular', 'horario': 'horario', 'menu': 'menu', });
lyr_rutas_56.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'distrito': 'distrito', 'inicio': 'inicio', 'fin': 'fin', 'distancia_km': 'distancia_km', 'descarga': 'descarga', });
lyr_PERIMETRO_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CCDD': 'TextEdit', 'CCPP': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', });
lyr_hoteles_3.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_4.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_5.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_6.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_7.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_8.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_9.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_10.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_11.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_12.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_13.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_14.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_15.set('fieldImages', {'id': '', 'provincia': '', 'distrito': '', 'nombre': '', 'direccion': '', 'contacto': '', 'cochera': '', });
lyr_agencias_16.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_17.set('fieldImages', {'id': '', 'provincia': '', 'distrito': '', 'festividad': '', 'descripcion': '', 'danza': '', 'fecha': '', });
lyr_lugares_18.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_19.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_20.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_21.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_22.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_23.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_24.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_25.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_26.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_27.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_28.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_29.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_30.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_31.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_32.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_33.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_34.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_35.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_36.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_37.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_38.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_39.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_40.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_41.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_42.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_43.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_44.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_45.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_46.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_47.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_48.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_49.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_50.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_hoteles_51.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'cochera': 'TextEdit', });
lyr_agencias_52.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'contacto': 'TextEdit', 'circuitos': 'TextEdit', 'salidas': 'TextEdit', });
lyr_festividades_53.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'festividad': 'TextEdit', 'descripcion': 'TextEdit', 'danza': 'TextEdit', 'fecha': 'TextEdit', });
lyr_lugares_54.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'altitud': 'TextEdit', 'enlace': 'TextEdit', });
lyr_restaurantes_55.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'centropoblado': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'celular': 'TextEdit', 'horario': 'TextEdit', 'menu': 'TextEdit', });
lyr_rutas_56.set('fieldImages', {'id': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'inicio': 'TextEdit', 'fin': 'TextEdit', 'distancia_km': 'TextEdit', 'descarga': 'TextEdit', });
lyr_PERIMETRO_2.set('fieldLabels', {'OBJECTID': 'no label', 'CCDD': 'no label', 'CCPP': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', });
lyr_hoteles_3.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_4.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_5.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_6.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_7.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_8.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_9.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_10.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_11.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_12.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_13.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_14.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_15.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_16.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_17.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_18.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_19.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_20.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_21.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_22.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_23.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_24.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_25.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_26.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_27.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_28.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_29.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_30.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_31.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_32.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_33.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_34.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_35.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_36.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_37.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_38.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_39.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_40.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_41.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_42.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_43.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_44.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_45.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_46.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_47.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_48.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_49.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_50.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_hoteles_51.set('fieldLabels', {'id': 'no label', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'cochera': 'inline label - always visible', });
lyr_agencias_52.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'contacto': 'inline label - always visible', 'circuitos': 'inline label - always visible', 'salidas': 'inline label - always visible', });
lyr_festividades_53.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'festividad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'danza': 'inline label - always visible', 'fecha': 'inline label - always visible', });
lyr_lugares_54.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'altitud': 'inline label - always visible', 'enlace': 'inline label - always visible', });
lyr_restaurantes_55.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'centropoblado': 'inline label - always visible', 'nombre': 'inline label - always visible', 'direccion': 'inline label - always visible', 'celular': 'inline label - always visible', 'horario': 'inline label - always visible', 'menu': 'inline label - always visible', });
lyr_rutas_56.set('fieldLabels', {'id': 'inline label - always visible', 'provincia': 'inline label - always visible', 'distrito': 'inline label - always visible', 'inicio': 'inline label - always visible', 'fin': 'inline label - always visible', 'distancia_km': 'inline label - always visible', 'descarga': 'inline label - always visible', });
lyr_rutas_56.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});