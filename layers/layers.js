var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Investimentos2027_1 = new ol.format.GeoJSON();
var features_Investimentos2027_1 = format_Investimentos2027_1.readFeatures(json_Investimentos2027_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Investimentos2027_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Investimentos2027_1.addFeatures(features_Investimentos2027_1);
var lyr_Investimentos2027_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Investimentos2027_1, 
                style: style_Investimentos2027_1,
                popuplayertitle: 'Investimentos 2027',
                interactive: false,
    title: 'Investimentos 2027<br />\
    <img src="styles/legend/Investimentos2027_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Investimentos2027_1_1.png" /> 1 - 100<br />\
    <img src="styles/legend/Investimentos2027_1_2.png" /> 100 - 300<br />\
    <img src="styles/legend/Investimentos2027_1_3.png" /> 300 - 700<br />\
    <img src="styles/legend/Investimentos2027_1_4.png" /> 700 - 2000<br />' });
var format_Investimentos2026_2 = new ol.format.GeoJSON();
var features_Investimentos2026_2 = format_Investimentos2026_2.readFeatures(json_Investimentos2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Investimentos2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Investimentos2026_2.addFeatures(features_Investimentos2026_2);
var lyr_Investimentos2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Investimentos2026_2, 
                style: style_Investimentos2026_2,
                popuplayertitle: 'Investimentos 2026',
                interactive: false,
    title: 'Investimentos 2026<br />\
    <img src="styles/legend/Investimentos2026_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Investimentos2026_2_1.png" /> 1 - 100<br />\
    <img src="styles/legend/Investimentos2026_2_2.png" /> 100 - 300<br />\
    <img src="styles/legend/Investimentos2026_2_3.png" /> 300 - 700<br />\
    <img src="styles/legend/Investimentos2026_2_4.png" /> 700 - 2000<br />' });
var format_Investimentos2025_3 = new ol.format.GeoJSON();
var features_Investimentos2025_3 = format_Investimentos2025_3.readFeatures(json_Investimentos2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Investimentos2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Investimentos2025_3.addFeatures(features_Investimentos2025_3);
var lyr_Investimentos2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Investimentos2025_3, 
                style: style_Investimentos2025_3,
                popuplayertitle: 'Investimentos 2025',
                interactive: false,
    title: 'Investimentos 2025<br />\
    <img src="styles/legend/Investimentos2025_3_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Investimentos2025_3_1.png" /> 1 - 100<br />\
    <img src="styles/legend/Investimentos2025_3_2.png" /> 100 - 300<br />\
    <img src="styles/legend/Investimentos2025_3_3.png" /> 300 - 700<br />\
    <img src="styles/legend/Investimentos2025_3_4.png" /> 700 - 2000<br />' });
var format_Reformas2027_4 = new ol.format.GeoJSON();
var features_Reformas2027_4 = format_Reformas2027_4.readFeatures(json_Reformas2027_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reformas2027_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reformas2027_4.addFeatures(features_Reformas2027_4);
var lyr_Reformas2027_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reformas2027_4, 
                style: style_Reformas2027_4,
                popuplayertitle: 'Reformas 2027',
                interactive: false,
    title: 'Reformas 2027<br />\
    <img src="styles/legend/Reformas2027_4_0.png" /> Sim<br />' });
var format_Reformas2026_5 = new ol.format.GeoJSON();
var features_Reformas2026_5 = format_Reformas2026_5.readFeatures(json_Reformas2026_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reformas2026_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reformas2026_5.addFeatures(features_Reformas2026_5);
var lyr_Reformas2026_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reformas2026_5, 
                style: style_Reformas2026_5,
                popuplayertitle: 'Reformas 2026',
                interactive: false,
    title: 'Reformas 2026<br />\
    <img src="styles/legend/Reformas2026_5_0.png" /> Sim<br />' });
var format_Reformas2025_6 = new ol.format.GeoJSON();
var features_Reformas2025_6 = format_Reformas2025_6.readFeatures(json_Reformas2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reformas2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reformas2025_6.addFeatures(features_Reformas2025_6);
var lyr_Reformas2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reformas2025_6, 
                style: style_Reformas2025_6,
                popuplayertitle: 'Reformas 2025',
                interactive: false,
    title: 'Reformas 2025<br />\
    <img src="styles/legend/Reformas2025_6_0.png" /> Sim<br />' });
var format_CP_7 = new ol.format.GeoJSON();
var features_CP_7 = format_CP_7.readFeatures(json_CP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_7.addFeatures(features_CP_7);
var lyr_CP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_7, 
                style: style_CP_7,
                popuplayertitle: 'CP',
                interactive: true,
    title: 'CP<br />\
    <img src="styles/legend/CP_7_0.png" /> <br />' });
var format_Investimentos2027_8 = new ol.format.GeoJSON();
var features_Investimentos2027_8 = format_Investimentos2027_8.readFeatures(json_Investimentos2027_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Investimentos2027_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Investimentos2027_8.addFeatures(features_Investimentos2027_8);
var lyr_Investimentos2027_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Investimentos2027_8, 
                style: style_Investimentos2027_8,
                popuplayertitle: 'Investimentos 2027',
                interactive: false,
    title: 'Investimentos 2027<br />\
    <img src="styles/legend/Investimentos2027_8_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Investimentos2027_8_1.png" /> 1 - 100<br />\
    <img src="styles/legend/Investimentos2027_8_2.png" /> 100 - 300<br />\
    <img src="styles/legend/Investimentos2027_8_3.png" /> 300 - 700<br />\
    <img src="styles/legend/Investimentos2027_8_4.png" /> 700 - 2000<br />' });
var format_Investimentos2026_9 = new ol.format.GeoJSON();
var features_Investimentos2026_9 = format_Investimentos2026_9.readFeatures(json_Investimentos2026_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Investimentos2026_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Investimentos2026_9.addFeatures(features_Investimentos2026_9);
var lyr_Investimentos2026_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Investimentos2026_9, 
                style: style_Investimentos2026_9,
                popuplayertitle: 'Investimentos 2026',
                interactive: false,
    title: 'Investimentos 2026<br />\
    <img src="styles/legend/Investimentos2026_9_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Investimentos2026_9_1.png" /> 1 - 100<br />\
    <img src="styles/legend/Investimentos2026_9_2.png" /> 100 - 300<br />\
    <img src="styles/legend/Investimentos2026_9_3.png" /> 300 - 700<br />\
    <img src="styles/legend/Investimentos2026_9_4.png" /> 700 - 2000<br />' });
var format_Investimentos2025_10 = new ol.format.GeoJSON();
var features_Investimentos2025_10 = format_Investimentos2025_10.readFeatures(json_Investimentos2025_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Investimentos2025_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Investimentos2025_10.addFeatures(features_Investimentos2025_10);
var lyr_Investimentos2025_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Investimentos2025_10, 
                style: style_Investimentos2025_10,
                popuplayertitle: 'Investimentos 2025',
                interactive: false,
    title: 'Investimentos 2025<br />\
    <img src="styles/legend/Investimentos2025_10_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Investimentos2025_10_1.png" /> 1 - 100<br />\
    <img src="styles/legend/Investimentos2025_10_2.png" /> 100 - 300<br />\
    <img src="styles/legend/Investimentos2025_10_3.png" /> 300 - 700<br />\
    <img src="styles/legend/Investimentos2025_10_4.png" /> 700 - 2000<br />' });
var format_Reformas2027_11 = new ol.format.GeoJSON();
var features_Reformas2027_11 = format_Reformas2027_11.readFeatures(json_Reformas2027_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reformas2027_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reformas2027_11.addFeatures(features_Reformas2027_11);
var lyr_Reformas2027_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reformas2027_11, 
                style: style_Reformas2027_11,
                popuplayertitle: 'Reformas 2027',
                interactive: false,
    title: 'Reformas 2027<br />\
    <img src="styles/legend/Reformas2027_11_0.png" /> Sim<br />' });
var format_Reformas2026_12 = new ol.format.GeoJSON();
var features_Reformas2026_12 = format_Reformas2026_12.readFeatures(json_Reformas2026_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reformas2026_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reformas2026_12.addFeatures(features_Reformas2026_12);
var lyr_Reformas2026_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reformas2026_12, 
                style: style_Reformas2026_12,
                popuplayertitle: 'Reformas 2026',
                interactive: false,
    title: 'Reformas 2026<br />\
    <img src="styles/legend/Reformas2026_12_0.png" /> Sim<br />' });
var format_Reformas2025_13 = new ol.format.GeoJSON();
var features_Reformas2025_13 = format_Reformas2025_13.readFeatures(json_Reformas2025_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reformas2025_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reformas2025_13.addFeatures(features_Reformas2025_13);
var lyr_Reformas2025_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reformas2025_13, 
                style: style_Reformas2025_13,
                popuplayertitle: 'Reformas 2025',
                interactive: false,
    title: 'Reformas 2025<br />\
    <img src="styles/legend/Reformas2025_13_0.png" /> Sim<br />' });
var format_FP_14 = new ol.format.GeoJSON();
var features_FP_14 = format_FP_14.readFeatures(json_FP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FP_14.addFeatures(features_FP_14);
var lyr_FP_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FP_14, 
                style: style_FP_14,
                popuplayertitle: 'FP',
                interactive: true,
    title: 'FP<br />\
    <img src="styles/legend/FP_14_0.png" /> <br />' });
var group_FazendaFP = new ol.layer.Group({
                                layers: [lyr_Investimentos2027_8,lyr_Investimentos2026_9,lyr_Investimentos2025_10,lyr_Reformas2027_11,lyr_Reformas2026_12,lyr_Reformas2025_13,lyr_FP_14,],
                                fold: 'close',
                                title: 'Fazenda FP'});
var group_FazendaCP = new ol.layer.Group({
                                layers: [lyr_Investimentos2027_1,lyr_Investimentos2026_2,lyr_Investimentos2025_3,lyr_Reformas2027_4,lyr_Reformas2026_5,lyr_Reformas2025_6,lyr_CP_7,],
                                fold: 'close',
                                title: 'Fazenda CP'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Investimentos2027_1.setVisible(true);lyr_Investimentos2026_2.setVisible(true);lyr_Investimentos2025_3.setVisible(true);lyr_Reformas2027_4.setVisible(true);lyr_Reformas2026_5.setVisible(true);lyr_Reformas2025_6.setVisible(true);lyr_CP_7.setVisible(true);lyr_Investimentos2027_8.setVisible(true);lyr_Investimentos2026_9.setVisible(true);lyr_Investimentos2025_10.setVisible(true);lyr_Reformas2027_11.setVisible(true);lyr_Reformas2026_12.setVisible(true);lyr_Reformas2025_13.setVisible(true);lyr_FP_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_FazendaCP,group_FazendaFP];
lyr_Investimentos2027_1.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', 'Investimentos 2027': 'Investimentos 2027', });
lyr_Investimentos2026_2.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', 'Investimentos 2026': 'Investimentos 2026', });
lyr_Investimentos2025_3.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', 'Investimentos 2025': 'Investimentos 2025', });
lyr_Reformas2027_4.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', 'Reformas 2027': 'Reformas 2027', });
lyr_Reformas2026_5.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', 'Reformas 2026': 'Reformas 2026', });
lyr_Reformas2025_6.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', 'Reformas 2025': 'Reformas 2025', });
lyr_CP_7.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', 'Reformas 2025': 'Reformas 2025', 'Reformas 2026': 'Reformas 2026', 'Reformas 2027': 'Reformas 2027', 'Investimentos 2025': 'Investimentos 2025', 'Investimentos 2026': 'Investimentos 2026', 'Investimentos 2027': 'Investimentos 2027', });
lyr_Investimentos2027_8.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Investimentos 2027': 'Investimentos 2027', });
lyr_Investimentos2026_9.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Investimentos 2026': 'Investimentos 2026', });
lyr_Investimentos2025_10.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Investimentos 2025': 'Investimentos 2025', });
lyr_Reformas2027_11.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Reformas 2027': 'Reformas 2027', });
lyr_Reformas2026_12.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Reformas 2026': 'Reformas 2026', });
lyr_Reformas2025_13.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Reformas 2025': 'Reformas 2025', });
lyr_FP_14.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Reformas 2025': 'Reformas 2025', 'Reformas 2026': 'Reformas 2026', 'Reformas 2027': 'Reformas 2027', 'Investimentos 2025': 'Investimentos 2025', 'Investimentos 2026': 'Investimentos 2026', 'Investimentos 2027': 'Investimentos 2027', });
lyr_Investimentos2027_1.set('fieldImages', {'fid': '', 'text': '', 'Area': '', 'Fazenda': '', 'Investimentos 2027': '', });
lyr_Investimentos2026_2.set('fieldImages', {'fid': '', 'text': '', 'Area': '', 'Fazenda': '', 'Investimentos 2026': '', });
lyr_Investimentos2025_3.set('fieldImages', {'fid': '', 'text': '', 'Area': '', 'Fazenda': '', 'Investimentos 2025': '', });
lyr_Reformas2027_4.set('fieldImages', {'fid': '', 'text': '', 'Area': '', 'Fazenda': '', 'Reformas 2027': '', });
lyr_Reformas2026_5.set('fieldImages', {'fid': '', 'text': '', 'Area': '', 'Fazenda': '', 'Reformas 2026': '', });
lyr_Reformas2025_6.set('fieldImages', {'fid': '', 'text': '', 'Area': '', 'Fazenda': '', 'Reformas 2025': '', });
lyr_CP_7.set('fieldImages', {'fid': '', 'text': '', 'Area': '', 'Fazenda': '', 'Reformas 2025': '', 'Reformas 2026': '', 'Reformas 2027': '', 'Investimentos 2025': '', 'Investimentos 2026': '', 'Investimentos 2027': '', });
lyr_Investimentos2027_8.set('fieldImages', {'fid': '', 'text': '', 'Fazenda': '', 'Area': '', 'Investimentos 2027': 'Range', });
lyr_Investimentos2026_9.set('fieldImages', {'fid': '', 'text': '', 'Fazenda': '', 'Area': '', 'Investimentos 2026': 'Range', });
lyr_Investimentos2025_10.set('fieldImages', {'fid': '', 'text': '', 'Fazenda': '', 'Area': '', 'Investimentos 2025': 'Range', });
lyr_Reformas2027_11.set('fieldImages', {'fid': '', 'text': '', 'Fazenda': '', 'Area': '', 'Reformas 2027': 'TextEdit', });
lyr_Reformas2026_12.set('fieldImages', {'fid': '', 'text': '', 'Fazenda': '', 'Area': '', 'Reformas 2026': 'TextEdit', });
lyr_Reformas2025_13.set('fieldImages', {'fid': '', 'text': '', 'Fazenda': '', 'Area': '', 'Reformas 2025': 'TextEdit', });
lyr_FP_14.set('fieldImages', {'fid': '', 'text': '', 'Fazenda': '', 'Area': '', 'Reformas 2025': 'TextEdit', 'Reformas 2026': 'TextEdit', 'Reformas 2027': 'TextEdit', 'Investimentos 2025': 'Range', 'Investimentos 2026': 'Range', 'Investimentos 2027': 'Range', });
lyr_Investimentos2027_1.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Investimentos 2027': 'inline label - always visible', });
lyr_Investimentos2026_2.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Investimentos 2026': 'inline label - always visible', });
lyr_Investimentos2025_3.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Investimentos 2025': 'inline label - always visible', });
lyr_Reformas2027_4.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Reformas 2027': 'inline label - always visible', });
lyr_Reformas2026_5.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Reformas 2026': 'inline label - always visible', });
lyr_Reformas2025_6.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Reformas 2025': 'inline label - always visible', });
lyr_CP_7.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Reformas 2025': 'inline label - always visible', 'Reformas 2026': 'inline label - always visible', 'Reformas 2027': 'inline label - always visible', 'Investimentos 2025': 'inline label - always visible', 'Investimentos 2026': 'inline label - always visible', 'Investimentos 2027': 'inline label - always visible', });
lyr_Investimentos2027_8.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Investimentos 2027': 'inline label - always visible', });
lyr_Investimentos2026_9.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Investimentos 2026': 'inline label - always visible', });
lyr_Investimentos2025_10.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Investimentos 2025': 'inline label - always visible', });
lyr_Reformas2027_11.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Reformas 2027': 'inline label - always visible', });
lyr_Reformas2026_12.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Reformas 2026': 'inline label - always visible', });
lyr_Reformas2025_13.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Reformas 2025': 'inline label - always visible', });
lyr_FP_14.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Reformas 2025': 'inline label - always visible', 'Reformas 2026': 'inline label - always visible', 'Reformas 2027': 'inline label - always visible', 'Investimentos 2025': 'inline label - always visible', 'Investimentos 2026': 'inline label - always visible', 'Investimentos 2027': 'inline label - always visible', });
lyr_FP_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});